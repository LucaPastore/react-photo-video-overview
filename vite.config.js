import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import replace from '@rollup/plugin-replace';

export default defineConfig({
  plugins: [
    react(),
    replace({
      'require(': 'import(', // Sostituisce require con import
      preventAssignment: true, // Impedisce che venga fatto un cambio indesiderato
    }),
  ]
});
