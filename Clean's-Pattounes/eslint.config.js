import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import globals from 'globals'
import prettierConfig from 'eslint-config-prettier'

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{js,mjs,jsx,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },

  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },

  js.configs.recommended,           // ESLint JS config recommandé
  ...pluginVue.configs['flat/essential'],  // Config Vue
  prettierConfig,                   // Ajouter la config Prettier pour l'intégration du formatage
]
