module.exports = {
	name: "unindented.org", // optional, falls back to object key
	description: "Unindented (Prod)",
	skip: false,
	options: {
		frequency: 60 * 23, // 23 hours
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "site"
	},
	urls: [
		"https://www.unindented.org/",
		"https://www.unindented.org/about/",
		"https://www.unindented.org/blog/",
		"https://www.unindented.org/playground/",
		"https://www.unindented.org/blog/github-ribbon-using-css-transforms/",
	]
};