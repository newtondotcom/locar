import adapter from '@sveltejs/adapter-static';
//import adapter from "@sveltejs/adapter-node";
import { vitePreprocess } from '@sveltejs/kit/vite';

/*
export default {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		})
	}
};
*/

export default {
	kit: {
		adapter: adapter()
	},
	preprocess: vitePreprocess()
};