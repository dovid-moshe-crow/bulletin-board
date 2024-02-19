/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {hostname:"utfs.io"}
        ]
    },
    experimental:{
      serverActions:{
        allowedOrigins: ['glowing-waddle-6w7r945gp5x24979-3000.app.github.dev',"localhost:3000"],
      }
    }
};

export default nextConfig;
