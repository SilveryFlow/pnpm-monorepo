import { compression } from 'vite-plugin-compression2'
import viteRestart from 'vite-plugin-restart'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import Font from 'vite-plugin-font'
import type { PluginOption } from 'vite'
import UnoCSS from 'unocss/vite'

export const vitePluginPreset = (): PluginOption[] => [
  compression(),
  viteRestart({
    restart: ['.env*', 'vite.config.[jt]s', 'src/config/**/*', 'scripts/vite/**/*'],
  }),
  ViteImageOptimizer({}),
  Font.vite({
    include: [/\.otf/, /\.ttf/, /\.woff/, /\.woff2/],
  }),
  UnoCSS(),
]
