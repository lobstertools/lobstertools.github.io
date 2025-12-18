import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';
import tailwindcss from '@tailwindcss/vite';
import { imagetools } from 'vite-imagetools';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';
import fs from 'fs';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        checker({ typescript: true }),
        tailwindcss(),
        imagetools(),
        tsconfigPaths({
            root: '../',
        }),
        {
            name: 'github-404-hack',
            closeBundle() {
                const outDir = path.resolve(__dirname, './dist');
                const index = path.resolve(outDir, 'index.html');
                const fourOhFour = path.resolve(outDir, '404.html');

                if (fs.existsSync(index)) {
                    fs.copyFileSync(index, fourOhFour);
                    console.log('✅ Generated 404.html for GitHub Pages');
                } else {
                    console.error('☠️ Could not copy index.html for GitHub Pages');
                    process.exit(-1);
                }
            },
        },
    ],

    root: 'src/',
    publicDir: '../public',

    resolve: {
        alias: {
            '@/images': path.resolve(__dirname, './src/images'),
        },
    },

    build: {
        outDir: '../dist/',
        emptyOutDir: true,
    },
    base: '/',
});
