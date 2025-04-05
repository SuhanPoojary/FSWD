module.exports = {
  env: {
    browser: true,  // Enables browser-specific globals like `window`
    es2023: true,   // Supports modern ES features
    node: true,     // Enables Node.js global variables
  },
  extends: ["eslint:recommended"], // Uses recommended ESLint rules
  parserOptions: {
    ecmaVersion: "latest", // Enables the latest JavaScript features
    sourceType: "module",   // Allows ES module imports/exports
  },
  rules: {
    "no-unused-vars": "warn",   // Warns about unused variables instead of errors
    "no-console": "off",        // Allows `console.log` for debugging
    "react/react-in-jsx-scope": "off" // No need to import React in JSX files (Next.js/Vite)
  },
};
