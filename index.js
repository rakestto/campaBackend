const container = require('./api/container');
const application = container.resolve('app');
const db = container.resolve('db');

application.start().then(console.log('STARTING API'));
