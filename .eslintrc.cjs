module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/eslint-config-typescript"
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2021,
    sourceType: "module",
    jsxPragma: "React",
    ecmaFeatures: {
      jsx: true,
      tsx: true
    }
  },
  rules: {
    // TS
    "@typescript-eslint/no-explicit-any": "off",
    "no-debugger": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_"
      }
    ],
    "no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_"
      }
    ],
    // Vue
    "vue/no-v-html": "off",
    "vue/require-default-prop": "off",
    "vue/require-explicit-emits": "off",
    "vue/multi-word-component-names": "off",
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "always",
          normal: "always",
          component: "always"
        },
        svg: "always",
        math: "always"
      }
    ],

    'no-console': "warn", // 禁止使用 console
    'no-undef': 2, // 未定义的变量会发出错误 0 = off, 1 = warn, 2 = error
    'eqeqeq': ['warn', 'always'], // 要求使用 === 和 !==
    'quotes': ['warn', 'double'], // 要求使用单引号
    'indent': ['warn', 2], // 缩进使用 2 个空格
    'comma-dangle': ['warn', 'never'], // 要求或禁止末尾逗号
    'semi': ['warn', 'always'], // 要求语句末尾使用分号
    'brace-style': ['warn', '1tbs'], // 要求使用一致的大括号风格
    'array-bracket-spacing': ['warn', 'never'], // 禁止在数组括号内使用空格
    'object-curly-spacing': ['warn', 'always'], // 要求在对象的属性中使用空格
    'max-len': ['warn', { 'code': 150 }], // 限制行的最大长度为 80 个字符
  }
}
