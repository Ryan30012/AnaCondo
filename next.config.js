module.exports = {
    // Enables the output as 'standalone', suitable for static hosting environments
    output: 'export',
  
    // Additional configurations can go here
    // For example, if you need to add custom webpack config, environment variables, etc.
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      // Example customization:
      // Modify the config as per your requirement
      return config;
    },
  
    // Environment variables can be placed here if needed
    env: {
      CUSTOM_VAR: 'value', // Replace 'value' with your actual variable value
    },
  
    // Optionally, you can add rewrites, redirects, headers, etc., if needed for your project
    async rewrites() {
      return [
        // Example: Redirect all URLs to the main entry point (index.html)
        // This is useful for single-page applications (SPA) that handle routing in the frontend
        {
          source: '/:path*',
          destination: '/',
        },
      ];
    },
  };
  