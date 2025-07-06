import { type UserConfig, RuleConfigSeverity } from '@commitlint/types'
import '@commitlint/config-conventional'

export default {
  extends: '@commitlint/config-conventional',
  rules: {
    'scope-enum': [
      RuleConfigSeverity.Error,
      'always',
      [
        'deps',
        'deps-dev',
        'README',
        'renovate',
        'vscode',
      ],
    ],
  },
} as UserConfig
