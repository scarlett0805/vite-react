module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: [
    "react-refresh",
    "prettier",
    "react",
    "react-hooks",
    "@typescript-eslint",
  ],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    // eslint 的配置
    quotes: [ERROR, "single"], //单引号
    "no-console": ["error", { allow: ["log"] }], // 允许使用 console.log()
    "no-confusing-arrow": 0, // 禁止在可能与比较操作符相混淆的地方使用箭头函数
    // eslint-plugin-react 的配置
    "react/no-this-in-sfc": 0,
    "react/prop-types": 0,
    "react/display-name": "off",
    // eslint-plugin-react-hooks 的配置
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive -deps": "warn",
  },
};
