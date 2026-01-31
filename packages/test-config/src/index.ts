import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import type { ViteUserConfig, ConfigEnv } from 'vitest/config'

/**
 * 基础 Vitest 配置预设
 */
export const baseVitestConfig = defineConfig({
  test: {
    environment: 'jsdom',
    exclude: [...configDefaults.exclude, 'e2e/**'],
  },
})

/**
 * 合并应用特定的 Vite 配置和 Vitest 预设
 * @param viteConfig 应用的 Vite 配置
 * @param vitestOverrides 覆盖 Vitest 配置
 */
export function defineVitestConfig(
  viteConfig: ViteUserConfig | ((env: ConfigEnv) => ViteUserConfig),
  vitestOverrides: ViteUserConfig = {},
) {
  return defineConfig(configEnv => {
    const baseConfig = typeof viteConfig === 'function' ? viteConfig(configEnv) : viteConfig

    return mergeConfig(baseConfig, mergeConfig(baseVitestConfig, vitestOverrides))
  })
}
