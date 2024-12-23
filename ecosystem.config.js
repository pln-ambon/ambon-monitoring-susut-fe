module.exports = {
  apps: [
    {
      name: 'ambon-susut-fe-6002',
      script: 'node_modules/next/dist/bin/next',
      args: 'start -p 6002',
      instances: 'max',
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
