/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    "plugin:prettier/recommended",
  ],
  plugins: [
    'simple-import-sort',
    "import",
    "unused-imports",
    "prettier"
  ],
  rules: {
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ExportDefaultDeclaration',
        message: 'Prefer named exports.'
      }
    ],
    'simple-import-sort/imports': 'error',
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "off",
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ExportDefaultDeclaration',
        message: 'Prefer named exports.'
      }
    ],
    "unused-imports/no-unused-vars": [
      "warn",
      {
        "vars": "all",
        "varsIgnorePattern": "^_",
        "args": "after-used",
        "argsIgnorePattern": "^_"
      }
    ],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        "selector": "variable",
        "format": ["camelCase", "snake_case"],
      },
      {
        "selector": "function",
        "format": ["camelCase"]
      },
      {
        "selector": 'import',
        "format": ['PascalCase'],
      },
      {
        "selector": 'class',
        "format": ['PascalCase'],
      },
      {
        "selector": "variable",
        "types": ["function"],
        "format": ["camelCase"]
      },
    ],
    "unicorn/filename-case": [
      'error',
      {
        case: 'kebabCase',
      }
    ],
    "unicorn/import-style": [
      "error",
      {
        "styles": {
          "util": false,
          "path": {
            "named": true
          }
        }
      }
    ],
    "unicorn/catch-error-name": [
      "error",
      {
        "name": "error"
      }
    ],
  },
}
