const path = require("path");

/** @type {import('next').NextConfig} */

// Remove this if you're not using Fullcalendar features
const withTM = require("next-transpile-modules")([
	"@fullcalendar/common",
	"@fullcalendar/react",
	"@fullcalendar/daygrid",
	"@fullcalendar/list",
	"@fullcalendar/timegrid",
]);

module.exports = withTM({
	basePath: "/admin",
	trailingSlash: true,
	reactStrictMode: false,
	experimental: {
		esmExternals: false,
		jsconfigPaths: true, // enables it for both jsconfig.json and tsconfig.json
	},
	webpack: (config) => {
		return config;
	},
});
