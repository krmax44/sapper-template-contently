---
title: How is Sapper different from Next.js?
createdAt: 2019-09-06T21:32:34.775Z
---

[Next.js](https://github.com/zeit/next.js) is a React framework from [Zeit](https://zeit.co), and is the inspiration for Sapper. There are a few notable differences, however:

- It's powered by [Svelte](https://svelte.dev) instead of React, so it's faster and your apps are smaller
. Instead of route masking, we encode route parameters in filenames. For example, the page you're looking at right now is `src/routes/blog/[slug].html`
- As well as pages (Svelte components, which render on server or client), you can create _server routes_ in your `routes` directory. These are just `.js` files that export functions corresponding to HTTP methods, and receive Express `request` and `response` objects as arguments. This makes it very easy to, for example, add a JSON API such as the one [powering this very page](blog/how-is-sapper-different-from-next-js.json)
- Links are just `<a>` elements, rather than framework-specific `<Link>` components. That means, for example, that [this link right here](blog/how-can-i-get-involved), despite being inside a blob of HTML (technically inside a blob of Markdown, transformed to HTML), works with the router as you'd expect.