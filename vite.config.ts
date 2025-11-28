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
        outDir: '../dist/', 
        emptyOutDir: true,
    },
    base: '/',
});