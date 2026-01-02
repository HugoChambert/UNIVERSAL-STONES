// vite.config.js
import { defineConfig } from "file:///home/project/node_modules/vite/dist/node/index.js";
import { resolve } from "path";
import { viteStaticCopy } from "file:///home/project/node_modules/vite-plugin-static-copy/dist/index.js";
var __vite_injected_original_dirname = "/home/project";
var vite_config_default = defineConfig({
  base: "/",
  server: {
    port: 3e3,
    open: true
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: "pic/**/*",
          dest: "pic"
        },
        {
          src: "Sink/**/*",
          dest: "Sink"
        },
        {
          src: "logo.jpg",
          dest: ""
        }
      ]
    })
  ],
  build: {
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      input: {
        main: resolve(__vite_injected_original_dirname, "index.html"),
        work: resolve(__vite_injected_original_dirname, "work.html"),
        news: resolve(__vite_injected_original_dirname, "news.html"),
        faq: resolve(__vite_injected_original_dirname, "faq.html"),
        contact: resolve(__vite_injected_original_dirname, "contact.html"),
        warranty: resolve(__vite_injected_original_dirname, "warranty.html")
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9wcm9qZWN0L3ZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3Byb2plY3Qvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJztcbmltcG9ydCB7IHZpdGVTdGF0aWNDb3B5IH0gZnJvbSAndml0ZS1wbHVnaW4tc3RhdGljLWNvcHknO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBiYXNlOiAnLycsXG4gIHNlcnZlcjoge1xuICAgIHBvcnQ6IDMwMDAsXG4gICAgb3BlbjogdHJ1ZVxuICB9LFxuICBwbHVnaW5zOiBbXG4gICAgdml0ZVN0YXRpY0NvcHkoe1xuICAgICAgdGFyZ2V0czogW1xuICAgICAgICB7XG4gICAgICAgICAgc3JjOiAncGljLyoqLyonLFxuICAgICAgICAgIGRlc3Q6ICdwaWMnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBzcmM6ICdTaW5rLyoqLyonLFxuICAgICAgICAgIGRlc3Q6ICdTaW5rJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgc3JjOiAnbG9nby5qcGcnLFxuICAgICAgICAgIGRlc3Q6ICcnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9KVxuICBdLFxuICBidWlsZDoge1xuICAgIG91dERpcjogJ2Rpc3QnLFxuICAgIGFzc2V0c0RpcjogJ2Fzc2V0cycsXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgaW5wdXQ6IHtcbiAgICAgICAgbWFpbjogcmVzb2x2ZShfX2Rpcm5hbWUsICdpbmRleC5odG1sJyksXG4gICAgICAgIHdvcms6IHJlc29sdmUoX19kaXJuYW1lLCAnd29yay5odG1sJyksXG4gICAgICAgIG5ld3M6IHJlc29sdmUoX19kaXJuYW1lLCAnbmV3cy5odG1sJyksXG4gICAgICAgIGZhcTogcmVzb2x2ZShfX2Rpcm5hbWUsICdmYXEuaHRtbCcpLFxuICAgICAgICBjb250YWN0OiByZXNvbHZlKF9fZGlybmFtZSwgJ2NvbnRhY3QuaHRtbCcpLFxuICAgICAgICB3YXJyYW50eTogcmVzb2x2ZShfX2Rpcm5hbWUsICd3YXJyYW50eS5odG1sJylcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF5TixTQUFTLG9CQUFvQjtBQUN0UCxTQUFTLGVBQWU7QUFDeEIsU0FBUyxzQkFBc0I7QUFGL0IsSUFBTSxtQ0FBbUM7QUFJekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsTUFBTTtBQUFBLEVBQ04sUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLGVBQWU7QUFBQSxNQUNiLFNBQVM7QUFBQSxRQUNQO0FBQUEsVUFDRSxLQUFLO0FBQUEsVUFDTCxNQUFNO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxVQUNFLEtBQUs7QUFBQSxVQUNMLE1BQU07QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFVBQ0UsS0FBSztBQUFBLFVBQ0wsTUFBTTtBQUFBLFFBQ1I7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLElBQ1IsV0FBVztBQUFBLElBQ1gsZUFBZTtBQUFBLE1BQ2IsT0FBTztBQUFBLFFBQ0wsTUFBTSxRQUFRLGtDQUFXLFlBQVk7QUFBQSxRQUNyQyxNQUFNLFFBQVEsa0NBQVcsV0FBVztBQUFBLFFBQ3BDLE1BQU0sUUFBUSxrQ0FBVyxXQUFXO0FBQUEsUUFDcEMsS0FBSyxRQUFRLGtDQUFXLFVBQVU7QUFBQSxRQUNsQyxTQUFTLFFBQVEsa0NBQVcsY0FBYztBQUFBLFFBQzFDLFVBQVUsUUFBUSxrQ0FBVyxlQUFlO0FBQUEsTUFDOUM7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
