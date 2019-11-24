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
const VehiculoClienteRoutes = require('./Routes/VehiculoClientes.routes');

//Controladores
const VehiculoController = require('./Controllers/Vehiculo.controller');
const ClienteController = require('./Controllers/Cliente.controller');
const FacturaController = require('./Controllers/Factura.controller');
const VehiculoClienteController = require('./Controllers/VehiculoCliente.controller');

//Servicios SERVICES LAYER
const VehiculoService = require('../Services/Vehiculo.service');
const ClienteService = require('../Services/Cliente.service');
const FacturaService = require('../Services/Factura.service');
const VehiculoClienteService = require('../Services/VehiculoCliente.service');

//Logica de negocio DOMAIN LAYER
const VehiculoBussines = require('../Domain/Vehiculo.bussines');
const ClienteBussines = require('../Domain/Cliente.bussines');
const FacturaBussines = require('../Domain/Factura.bussines');
const VehiculoClienteBussines = require('../Domain/VehiculoCliente.bussines');

//Repositorios DATA ACCESS LAYER
const VehiculoRepository = require('../Data/repositories/Vehiculo.repository');
const ClienteRepository = require('../Data/repositories/Cliente.repository');
const FacturaRepository = require('../Data/repositories/Factura.repository');
const VehiculoClienteRepository = require('../Data/repositories/VehiculoCliente.repository');

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
    FacturaRoutes: asFunction(FacturaRoutes).singleton(),
    VehiculoClienteRoutes: asFunction(VehiculoClienteRoutes).singleton()
  })
  .register({
    //CONTROLADORES
    VehiculoController: asClass(VehiculoController).singleton(),
    ClienteController: asClass(ClienteController).singleton(),
    FacturaController: asClass(FacturaController).singleton(),
    VehiculoClienteController: asClass(VehiculoClienteController).singleton()
  })
  .register({
    //SERVICIOS
    VehiculoService: asClass(VehiculoService).singleton(),
    ClienteService: asClass(ClienteService).singleton(),
    FacturaService: asClass(FacturaService).singleton(),
    VehiculoClienteService: asClass(VehiculoClienteService).singleton()
  })
  .register({
    //LOGICA NEGOCIO
    VehiculoBussines: asClass(VehiculoBussines).singleton(),
    ClienteBussines: asClass(ClienteBussines).singleton(),
    FacturaBussines: asClass(FacturaBussines).singleton(),
    VehiculoClienteBussines: asClass(VehiculoClienteBussines).singleton()
  })
  .register({
    //REPOSITORIO
    VehiculoRepository: asClass(VehiculoRepository).singleton(),
    ClienteRepository: asClass(ClienteRepository).singleton(),
    FacturaRepository: asClass(FacturaRepository).singleton(),
    VehiculoClienteRepository: asClass(VehiculoClienteRepository).singleton()
  });

module.exports = Container;
