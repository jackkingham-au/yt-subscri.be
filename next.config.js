/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        domains: ['localhost', 'yt-subscri.be'],
    },
    async redirects() {
        return [
            {
                source: '/c/:channelId',
                destination: 'https://youtube.com/channel/:channelId?sub_confirmation=1',
                permanent: true,
            },
        ]
    },
}

module.exports = nextConfig
