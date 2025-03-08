import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  plugins: [
    cloudflare({ viteEnvironment: { name: "ssr" } }),
    reactRouter(),
    tsconfigPaths(),
  ],
  build: {
    outDir: 'build/server', // 输出目录
    rollupOptions: {
      output: {
        entryFileNames: 'index.js', // 生成单一入口文件
      },
    },
  },
});
