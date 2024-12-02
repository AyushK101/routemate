import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: {
        ...globals.node, // Use Node.js globals instead of browser globals
      },
    },
  },
  pluginJs.configs.recommended,
];
