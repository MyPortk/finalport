import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  base: "/finalport/", // ✅ Make sure this matches your GitHub repository name
  plugins: [react()],
  root: "client", // ✅ Ensure Vite uses "client" as the root folder
  build: {
    outDir: "dist", // ✅ Keep output inside "client/dist"
    emptyOutDir: true,
  },
  server: {
    port: 5000, // ✅ Localhost port for development
  },
});
