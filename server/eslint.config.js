export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        // enable Node.js globals
        require: "readonly",
        process: "readonly",
        module: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
      },
    },
    env: {
      node: true,
      es2021: true,
    },
    rules: {
      // your rules here, or leave empty for defaults
    },
  },
];
