/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{ protocol: "https", hostname: "www.wakenyawhocode.com" },
			{ protocol: "https", hostname: "defenx.us" },
			{ protocol: "https", hostname: "maduka-gold.vercel.app" },
			{ protocol: "https", hostname: "raty-rsjf.vercel.app" },
			{ protocol: "https", hostname: "xanes.framer.website" },
			{ protocol: "https", hostname: "avatars.githubusercontent.com" },
		],
	},
};

module.exports = nextConfig;
