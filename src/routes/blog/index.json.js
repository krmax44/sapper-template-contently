import posts from './_posts.js';

let contents;
(async () => {
	contents = JSON.stringify((await posts()).map(post => {
		return {
			title: post.attributes.title,
			slug: post.slug
		};
	}));
})();

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}