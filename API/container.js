const { asClass, asFunction, asValue, createContainer } = require('awilix');
const Container = createContainer();

const Server = require('./Server');

Container.register({
  app: asClass(Server).singleton()
});

module.exports = Container;
