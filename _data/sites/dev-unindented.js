module.exports = {
	name: "dev.unindented.org", // optional, falls back to object key
	description: "Unindented (Dev)",
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
		"https://dev.unindented.org/",
		"https://dev.unindented.org/about/",
		"https://dev.unindented.org/blog/",
		"https://dev.unindented.org/playground/",
		"https://dev.unindented.org/blog/github-ribbon-using-css-transforms/",
	]
};