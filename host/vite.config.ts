import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "app",
      remotes: {
        franchise: "http://localhost:2020/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
});