import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";


export default defineConfig([
  {
    ignores: ["node_modules/", "dist/", "build"]
  },

  js.configs.recommended,

  pluginReact.configs.flat.recommended,

  {
    files: ["**/*.{js,jsx}"],
    languageOptions: { 
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        }
      },
      globals:{
        ...globals.browser,
        ...globals.node
      }
     },
  
  rules: {
    "no-console": "warn",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
   },
   settings: {
    react:{
      version: "detect"
    }
   }
   },
]);
