import {
	defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'


export default defineConfig({
	plugins: [vue()],
	publicDir: 'assets',
    define: {
        __lang: JSON.stringify('en'),
        __environment: JSON.stringify('Development'),
    },
    build: {
        emptyOutDir: false,
        ssrManifest: false,
        outDir: __cf.vueBuild.outDir,
        minify: false,
        //manifest: true,
        assetsDir: 'assets__',
        rollupOptions: {
            output: {
                assetFileNames: (assetInfo) => {
                    let extType = assetInfo.name.split('.').at(1);
                    if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) { extType = 'img'; }
                    return `assets__/${extType}/[name]-[hash][extname]`;
                },
                chunkFileNames: 'assets__/js/[name]-[hash].js',
                entryFileNames: 'assets__/js/[name]-[hash].js',
            },
        }
    },
})
