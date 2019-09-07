import Contently from 'contently';
import ContentlySourceFs from 'contently-source-fs';
import ContentlyTransformMarkdown from 'contently-transform-markdown';
const posts = [];

export default async () => {
	if (posts.length === 0) {
		const { results } = await new Contently()
			.use(ContentlySourceFs, { patterns: 'src/posts/*.md' })
			.use(ContentlyTransformMarkdown)
			.run()

		// Usually for a blog, the newest posts appear on top.
		// For this example, it's the other way around.
		// Swap the ">" for a "<" to put the most recent items first.
		const sorted = results.sort((a, b) => a.attributes.createdAt > b.attributes.createdAt ? 1 : -1)

		posts.push(...sorted);
	}

	return posts;
};
