//import adapter from '@sveltejs/adapter-static';
import adapter from "@sveltejs/adapter-node";

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
	}
};