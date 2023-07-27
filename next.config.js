/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: "export",
    // trailingSlash: true,
    compiler: {
        styledComponents:true
    },
    experimental: {
        serverComponentsExternalPackages: ["mongoose"]
    }
}

module.exports = nextConfig
