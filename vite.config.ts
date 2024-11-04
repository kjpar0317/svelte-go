import { sveltekit } from '@sveltejs/kit/vite';
import { resolve } from 'path';

const port = process.env.PORT || 8080;

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			'@': resolve(__dirname, 'src')
		},
		dedupe: ['@fullcalendar/common']
	},
	optimizeDeps: {
		include: ['@fullcalendar/common']
	},
	server: {
		proxy: {
			'/api': {
				target: `http://127.0.0.1:${port}`,
				changeOrigin: true,
				secure: false,
				ws: true
				// rewrite: path => path.replace(/^\/api/, "")
			}
		}
	}
};

export default config;
