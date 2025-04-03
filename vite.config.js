import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ["isomorphic-fetch"], // Seleziona le dipendenze esterne che non devono essere incluse nel bundle
    }
  },
  optimizeDeps: {
    include: ["isomorphic-fetch"]
  }
});
