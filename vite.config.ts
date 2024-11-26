import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Assure que les ressources utilisent des chemins relatifs, essentiel pour Netlify
  build: {
    outDir: 'dist', // Spécifie le dossier de sortie
    sourcemap: false, // Désactive les cartes source pour réduire la taille de build
    cssCodeSplit: true, // Optimise la gestion des CSS
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            return 'vendor'; // Sépare les dépendances tierces dans un fichier distinct
          }
        },
      },
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'], // Conserve votre exclusion actuelle
  },
});
