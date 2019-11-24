const { asClass, asFunction, asValue, createContainer } = require('awilix');
const Container = createContainer();

//Servidor
const Server = require('./Server');
const config = require('../Config/config.json');
const db = require('../Data/models/index');

//Rutas
const router = require('./Routes/index');
const VehiculoRoutes = require('./Routes/Vehiculo.routes');
const ClienteRoutes = require('./Routes/Cliente.routes');

//Controladores
const VehiculoController = require('./Controllers/Vehiculo.controller');
const ClienteController = require('./Controllers/Cliente.controller');

//Servicios SERVICES LAYER
const VehiculoService = require('../Services/Vehiculo.service');
const ClienteService = require('../Services/Cliente.service');

//Logica de negocio DOMAIN LAYER
const VehiculoBussines = require('../Domain/Vehiculo.bussines');
const ClienteBussines = require('../Domain/Cliente.bussines');
//Repositorios DATA ACCESS LAYER
const VehiculoRepository = require('../Data/repositories/Vehiculo.repository');
const ClienteRepository = require('../Data/repositories/Cliente.repository');

Container.register({
  app: asClass(Server).singleton(),
  router: asFunction(router).singleton(),
  config: asValue(config),
  db: asValue(db)
})
  .register({
    //RUTAS
    VehiculoRoutes: asFunction(VehiculoRoutes).singleton(),
    ClienteRoutes: asFunction(ClienteRoutes).singleton()
  })
  .register({
    //CONTROLADORES
    VehiculoController: asClass(VehiculoController).singleton(),
    ClienteController: asClass(ClienteController).singleton()
  })
  .register({
    //SERVICIOS
    VehiculoService: asClass(VehiculoService).singleton(),
    ClienteService: asClass(ClienteService).singleton()
  })
  .register({
    //LOGICA NEGOCIO
    VehiculoBussines: asClass(VehiculoBussines).singleton(),
    ClienteBussines: asClass(ClienteBussines).singleton()
  })
  .register({
    //REPOSITORIO
    VehiculoRepository: asClass(VehiculoRepository).singleton(),
    ClienteRepository: asClass(ClienteRepository).singleton()
  });

module.exports = Container;
