import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), checker({ typescript: true }),  tailwindcss()],
    
    root: 'src/', 

    publicDir: '../public',

    build: {
        // This path is now relative to the 'root' (src/), 
        // so '../dist/' correctly places the build folder
        // in the project root.
        outDir: '../dist/', 
        emptyOutDir: true,
    },
    // base: './' is good for static hosting if not at domain root
    base: './',
});