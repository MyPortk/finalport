import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/finalport/", // ✅ Ensure correct base
  plugins: [react()],
  build: {
    outDir: "dist",
    emptyOutDir: true,
  }
});
