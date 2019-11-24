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
const FacturaRoutes = require('./Routes/Factura.routes');

//Controladores
const VehiculoController = require('./Controllers/Vehiculo.controller');
const ClienteController = require('./Controllers/Cliente.controller');
const FacturaController = require('./Controllers/Factura.controller');

//Servicios SERVICES LAYER
const VehiculoService = require('../Services/Vehiculo.service');
const ClienteService = require('../Services/Cliente.service');
const FacturaService = require('../Services/Factura.service');

//Logica de negocio DOMAIN LAYER
const VehiculoBussines = require('../Domain/Vehiculo.bussines');
const ClienteBussines = require('../Domain/Cliente.bussines');
const FacturaBussines = require('../Domain/Factura.bussines');
//Repositorios DATA ACCESS LAYER
const VehiculoRepository = require('../Data/repositories/Vehiculo.repository');
const ClienteRepository = require('../Data/repositories/Cliente.repository');
const FacturaRepository = require('../Data/repositories/Factura.repository');

Container.register({
  app: asClass(Server).singleton(),
  router: asFunction(router).singleton(),
  config: asValue(config),
  db: asValue(db)
})
  .register({
    //RUTAS
    VehiculoRoutes: asFunction(VehiculoRoutes).singleton(),
    ClienteRoutes: asFunction(ClienteRoutes).singleton(),
    FacturaRoutes: asFunction(FacturaRoutes).singleton()
  })
  .register({
    //CONTROLADORES
    VehiculoController: asClass(VehiculoController).singleton(),
    ClienteController: asClass(ClienteController).singleton(),
    FacturaController: asClass(FacturaController).singleton()
  })
  .register({
    //SERVICIOS
    VehiculoService: asClass(VehiculoService).singleton(),
    ClienteService: asClass(ClienteService).singleton(),
    FacturaService: asClass(FacturaService).singleton()
  })
  .register({
    //LOGICA NEGOCIO
    VehiculoBussines: asClass(VehiculoBussines).singleton(),
    ClienteBussines: asClass(ClienteBussines).singleton(),
    FacturaBussines: asClass(FacturaBussines).singleton()
  })
  .register({
    //REPOSITORIO
    VehiculoRepository: asClass(VehiculoRepository).singleton(),
    ClienteRepository: asClass(ClienteRepository).singleton(),
    FacturaRepository: asClass(FacturaRepository).singleton()
  });

module.exports = Container;
