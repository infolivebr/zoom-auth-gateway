module.exports = {
  apps: [
    {
      name: 'zoom-auth-gateway',
      script: 'npm',
      args: 'start',
      interpreter: 'none',
      exec_mode: 'cluster',
      instances: 2,
      env_file: '.env',
      autorestart: true,
      watch: false,
      max_memory_restart: '200M',
      output: './logs/out.log',
      error: './logs/err.log',
      merge_logs: true,
      time: true
    }
  ]
}
