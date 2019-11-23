const { asClass, asFunction, asValue, createContainer } = require('awilix');
const Container = createContainer();

//Servidor
const Server = require('./Server');
const router = require('./Routes');
const config = require('../Config/config.json');
const database = require('../Data/models/index');

//Rutas
const VehiculoRoutes = require('./Routes/Vehiculo.routes');
const VehiculoClientesRoutes = require('./Routes/VehiculoClientes.routes');
const ClientesRoutes = require('./Routes/Cliente.routes');
const InteresRoutes = require('./Routes/Interes.routes');
const FacturaRoutes = require('./Routes/Factura.routes');

Container.register({
  app: asClass(Server).singleton(),
  config: asValue(config),
  router: asFunction(router).singleton()
}).register({
  //RUTAS
  VehiculoRoutes: asFunction(VehiculoRoutes).singleton(),
  VehiculoClientesRoutes: asFunction(VehiculoClientesRoutes).singleton(),
  ClientesRoutes: asFunction(ClientesRoutes).singleton(),
  InteresRoutes: asFunction(InteresRoutes).singleton(),
  FacturaRoutes: asFunction(FacturaRoutes).singleton()
});

module.exports = Container;
