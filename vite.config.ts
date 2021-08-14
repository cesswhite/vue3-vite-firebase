import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import WindiCSS from "vite-plugin-windicss";
import Pages from "vite-plugin-pages";
import ViteIcons, { ViteIconsResolver } from "vite-plugin-icons";
import ViteComponents from "vite-plugin-components";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue(),
    Pages({ nuxtStyle: true }),
    ViteComponents({
      directoryAsNamespace: true,
      customComponentResolvers: ViteIconsResolver({
        componentPrefix: "icon",
      }),
    }),
    VitePWA(),
    WindiCSS({
      transformCSS: "pre",
      preflight: true,
    }),
    ViteIcons(),
  ],
});
