module.exports = {
  apps: [{
    name: 'tripnest',
    script: 'serve',
    args: '-s build -l 3008',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production'
    }
  }]
};
