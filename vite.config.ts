import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';
import tailwindcss from '@tailwindcss/vite';
import { imagetools } from 'vite-imagetools'
import tsconfigPaths from 'vite-tsconfig-paths'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        checker({ typescript: true }),
        tailwindcss(),
        imagetools(),        
        tsconfigPaths({
            root: '../'
        }),
    ],

    root: 'src/', 
    publicDir: '../public',
    
    resolve: {
        alias: {
            '@/images': path.resolve(__dirname, './src/images')
        }
    },    

    build: {
        outDir: '../dist/', 
        emptyOutDir: true,
    },
    base: '/',
});
