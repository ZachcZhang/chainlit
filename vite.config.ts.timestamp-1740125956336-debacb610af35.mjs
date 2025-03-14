// vite.config.ts
import react from "file:///Users/zachczhang/Desktop/%E5%8D%8F%E5%92%8C%E6%8A%A5%E5%91%8A%E8%A7%A3%E8%AF%BB/chainlit/frontend/node_modules/.pnpm/@vitejs+plugin-react-swc@3.3.2_vite@5.4.14_@types+node@20.5.7_/node_modules/@vitejs/plugin-react-swc/index.mjs";
import path from "path";
import { defineConfig } from "file:///Users/zachczhang/Desktop/%E5%8D%8F%E5%92%8C%E6%8A%A5%E5%91%8A%E8%A7%A3%E8%AF%BB/chainlit/frontend/node_modules/.pnpm/vite@5.4.14_@types+node@20.5.7/node_modules/vite/dist/node/index.js";
import svgr from "file:///Users/zachczhang/Desktop/%E5%8D%8F%E5%92%8C%E6%8A%A5%E5%91%8A%E8%A7%A3%E8%AF%BB/chainlit/frontend/node_modules/.pnpm/vite-plugin-svgr@4.2.0_rollup@4.31.0_typescript@5.2.2_vite@5.4.14_@types+node@20.5.7_/node_modules/vite-plugin-svgr/dist/index.js";
import tsconfigPaths from "file:///Users/zachczhang/Desktop/%E5%8D%8F%E5%92%8C%E6%8A%A5%E5%91%8A%E8%A7%A3%E8%AF%BB/chainlit/frontend/node_modules/.pnpm/vite-tsconfig-paths@4.2.0_typescript@5.2.2_vite@5.4.14_@types+node@20.5.7_/node_modules/vite-tsconfig-paths/dist/index.mjs";
var __vite_injected_original_dirname = "/Users/zachczhang/Desktop/\u534F\u548C\u62A5\u544A\u89E3\u8BFB/chainlit/frontend";
var vite_config_default = defineConfig({
  build: {
    sourcemap: true
  },
  plugins: [react(), tsconfigPaths(), svgr()],
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src"),
      // To prevent conflicts with packages in @chainlit/react-client, we need to specify the resolution paths for these dependencies.
      react: path.resolve(__vite_injected_original_dirname, "./node_modules/react"),
      "usehooks-ts": path.resolve(__vite_injected_original_dirname, "./node_modules/usehooks-ts"),
      sonner: path.resolve(__vite_injected_original_dirname, "./node_modules/sonner"),
      lodash: path.resolve(__vite_injected_original_dirname, "./node_modules/lodash"),
      recoil: path.resolve(__vite_injected_original_dirname, "./node_modules/recoil")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvemFjaGN6aGFuZy9EZXNrdG9wL1x1NTM0Rlx1NTQ4Q1x1NjJBNVx1NTQ0QVx1ODlFM1x1OEJGQi9jaGFpbmxpdC9mcm9udGVuZFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL3phY2hjemhhbmcvRGVza3RvcC9cdTUzNEZcdTU0OENcdTYyQTVcdTU0NEFcdTg5RTNcdThCRkIvY2hhaW5saXQvZnJvbnRlbmQvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3phY2hjemhhbmcvRGVza3RvcC8lRTUlOEQlOEYlRTUlOTIlOEMlRTYlOEElQTUlRTUlOTElOEElRTglQTclQTMlRTglQUYlQkIvY2hhaW5saXQvZnJvbnRlbmQvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3Qtc3djJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgc3ZnciBmcm9tICd2aXRlLXBsdWdpbi1zdmdyJztcbmltcG9ydCB0c2NvbmZpZ1BhdGhzIGZyb20gJ3ZpdGUtdHNjb25maWctcGF0aHMnO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgYnVpbGQ6IHtcbiAgICBzb3VyY2VtYXA6IHRydWVcbiAgfSxcbiAgcGx1Z2luczogW3JlYWN0KCksIHRzY29uZmlnUGF0aHMoKSwgc3ZncigpXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnQCc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYycpLFxuICAgICAgLy8gVG8gcHJldmVudCBjb25mbGljdHMgd2l0aCBwYWNrYWdlcyBpbiBAY2hhaW5saXQvcmVhY3QtY2xpZW50LCB3ZSBuZWVkIHRvIHNwZWNpZnkgdGhlIHJlc29sdXRpb24gcGF0aHMgZm9yIHRoZXNlIGRlcGVuZGVuY2llcy5cbiAgICAgIHJlYWN0OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9ub2RlX21vZHVsZXMvcmVhY3QnKSxcbiAgICAgICd1c2Vob29rcy10cyc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL25vZGVfbW9kdWxlcy91c2Vob29rcy10cycpLFxuICAgICAgc29ubmVyOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9ub2RlX21vZHVsZXMvc29ubmVyJyksXG4gICAgICBsb2Rhc2g6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL25vZGVfbW9kdWxlcy9sb2Rhc2gnKSxcbiAgICAgIHJlY29pbDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vbm9kZV9tb2R1bGVzL3JlY29pbCcpXG4gICAgfVxuICB9XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBd1gsT0FBTyxXQUFXO0FBQzFZLE9BQU8sVUFBVTtBQUNqQixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFVBQVU7QUFDakIsT0FBTyxtQkFBbUI7QUFKMUIsSUFBTSxtQ0FBbUM7QUFPekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsT0FBTztBQUFBLElBQ0wsV0FBVztBQUFBLEVBQ2I7QUFBQSxFQUNBLFNBQVMsQ0FBQyxNQUFNLEdBQUcsY0FBYyxHQUFHLEtBQUssQ0FBQztBQUFBLEVBQzFDLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssS0FBSyxRQUFRLGtDQUFXLE9BQU87QUFBQTtBQUFBLE1BRXBDLE9BQU8sS0FBSyxRQUFRLGtDQUFXLHNCQUFzQjtBQUFBLE1BQ3JELGVBQWUsS0FBSyxRQUFRLGtDQUFXLDRCQUE0QjtBQUFBLE1BQ25FLFFBQVEsS0FBSyxRQUFRLGtDQUFXLHVCQUF1QjtBQUFBLE1BQ3ZELFFBQVEsS0FBSyxRQUFRLGtDQUFXLHVCQUF1QjtBQUFBLE1BQ3ZELFFBQVEsS0FBSyxRQUFRLGtDQUFXLHVCQUF1QjtBQUFBLElBQ3pEO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
