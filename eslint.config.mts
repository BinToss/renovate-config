import js from '@eslint/js'
import globals from 'globals'
import tseslint, { type ConfigArray } from 'typescript-eslint'
import json from '@eslint/json'
import markdown from '@eslint/markdown'
import stylistic from '@stylistic/eslint-plugin'

const config: ConfigArray = tseslint.config([
  { files: ['**/*.{js,mjs,cjs,ts,mts,cts}'], plugins: { js }, extends: [js.configs.recommended] },
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    languageOptions: {
      globals: globals.node,
      parserOptions: { projectService: true, ecmaVersion: 2023, jsDocParsingMode: 'all' },
    },
    extends: [
      tseslint.configs.strictTypeChecked,
      tseslint.configs.stylisticTypeChecked,
      stylistic.configs.recommended,
    ],
  },
  { files: ['**/*.json'], plugins: { json }, language: 'json/json', extends: [json.configs.recommended] },
  { files: ['**/*.jsonc'], plugins: { json }, language: 'json/jsonc', extends: [json.configs.recommended] },
  { files: ['**/*.json5'], plugins: { json }, language: 'json/json5', extends: [json.configs.recommended] },
  { files: ['**/*.md'], plugins: { markdown }, language: 'markdown/gfm', extends: [markdown.configs.recommended] },
])

export default config
