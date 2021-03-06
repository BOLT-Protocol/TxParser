module.exports = {
  apps : [{
    name: 'TxParser',
    script: 'bin/main.js',

    // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
    args: 'one two',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'ubuntu',
      key  : `${process.env.HOME}/.ssh/APLO.pem`,
      host : '13.231.5.164',
      ref  : 'origin/main',
      repo : 'https://github.com/BOLT-Protocol/TxParser',
      path : '/etc/production/TxParser',
      'post-deploy' : 'pm2 reload ecosystem.config.js --env production'
    }
  }
};
