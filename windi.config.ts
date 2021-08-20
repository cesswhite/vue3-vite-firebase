import { defineConfig } from "vite-plugin-windicss";
import typography from "windicss/plugin/typography";
import forms from "windicss/plugin/forms";
import colors from "windicss/colors";

export default defineConfig({
  attributify: true,
  darkMode: "class",
  plugins: [typography, forms],
  shortcuts: {
    "border-default": "border-2 border-gray-800 border-opacity-10",
    "label-default": "font-semibold text-gray-800/90 text-lg mb-2",
    "input-default":
      "border-default py-3 placeholder-gray-800 font-bold text-xl placeholder-opacity-20 rounded-md relative pl-12 mb-4",
    "icon-button":
      "absolute top-12 w-8 h-8 left-2  flex items-center justify-center fill-current text-gray-800 text-opacity-20 text-xl bg-gray-800 bg-opacity-8 rounded-sm px-1 py-1",
    "show-password":
      "absolute top-12 w-8 h-8 right-2 flex items-center justify-center fill-current text-gray-800 text-opacity-20 text-xl px-1 py-1 cursor-pointer hover:text-opacity-40 focus:outline-none",
    "btn-primary":
      "font-bold bg-gray-800 text-xl py-3 text-gray-50 px-8 rounded-md",
  },
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
      },
    },
  },
});
