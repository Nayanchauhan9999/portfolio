/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: "export",
    // trailingSlash: true,
    compiler: {
        styledComponents:true
    },
    experimental: {
        serverComponentsExternalPackages: ["mongoose"]
    },
    async rewrites() {
        return [
            {
                source: "/api/v1/users",
                destination:"http://localhost:8080/api/v1/users"
            }
        ]
    }
}

module.exports = nextConfig
