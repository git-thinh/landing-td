import {
	defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'
import fs from 'fs'
import path from 'path'
import Components from 'unplugin-vue-components/vite'


export default defineConfig({
	vue: {
		config: {
			//silent: IsComRuntime === 1
		},
	},
	plugins: [
		vue(),
		Components({
			// relative paths to the directory to search for components.
			dirs: ['src/components'],

			// valid file extensions for components.
			extensions: ['vue'],
			// search for subdirectories
			deep: true,
			// resolvers for custom components
			resolvers: [],

			// generate `components.d.ts` global declarations,
			// also accepts a path for custom filename
			// default: `true` if package typescript is installed
			dts: false,

			// Allow subdirectories as namespace prefix for components.
			directoryAsNamespace: false,
			// Subdirectory paths for ignoring namespace prefixes
			// works when `directoryAsNamespace: true`
			globalNamespaces: [],

			// auto import for directives
			// default: `true` for Vue 3, `false` for Vue 2
			// Babel is needed to do the transformation for Vue 2, it's disabled by default for performance concerns.
			// To install Babel, run: `npm install -D @babel/parser`
			directives: true,

			// Transform path before resolving
			importPathTransform: v => v,

			// Allow for components to override other components with the same name
			allowOverrides: false,

			// filters for transforming targets
			include: [/\.vue$/, /\.vue\?vue/],
			exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/],
		}),
	],
	define: {
		__lang: JSON.stringify('en'),
		__environment: JSON.stringify('Development'),
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'~': path.resolve(__dirname, './public'),
		},
	},
	base: '/',
	publicDir: 'public',

	build: {
		emptyOutDir: false,
		ssrManifest: false,
		outDir: './build',
		minify: false,
		//manifest: true,
		assetsDir: 'assets__',
		rollupOptions: {
			output: {
				assetFileNames: (assetInfo) => {
					let extType = assetInfo.name.split('.').at(1);
					if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
						extType = 'img';
					}
					return `assets__/${extType}/[name]-[hash][extname]`;
				},
				chunkFileNames: 'assets__/js/[name]-[hash].js',
				entryFileNames: 'assets__/js/[name]-[hash].js',
			},
		}
	},
})
