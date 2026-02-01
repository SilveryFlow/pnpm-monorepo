/** @type {import('lint-staged').Configuration} */
export default {
  '**/*.{js,ts,vue,jsx,tsx}': [
    'eslint --fix --cache',
    'prettier --write --experimental-cli --cache',
    'cspell --no-exit-code --no-must-find-files --cache',
  ],
  '**/*.{css,scss,html,json}': [
    'prettier --write --experimental-cli --cache',
    'cspell --no-exit-code --no-must-find-files --cache',
  ],
  '**/*.md': ['prettier --write --experimental-cli --cache'],
}
