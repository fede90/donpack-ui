const ESLintPlugin = require('eslint-webpack-plugin');

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config,env) => {
        if (env.dev) {
            config.plugins.push(new ESLintPlugin({
                extensions: ['js', 'jsx', 'ts', 'tsx'],
                files: ['src'],
                failOnError: false,
            }))
        }
        return config;
    },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.unsplash.com',
            port: '',
            pathname: '/photo**',
          },
        ],
      },

};

module.exports = nextConfig;