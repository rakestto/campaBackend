const { asClass, asFunction, asValue, createContainer } = require('awilix');
const Container = createContainer();

//Servidor
const Server = require('./Server');
const config = require('../Config/config.json');
const db = require('../Data/models/index');

//Rutas
const router = require('./Routes/index');
const VehiculoRoutes = require('./Routes/Vehiculo.routes');
const VehiculoClientesRoutes = require('./Routes/VehiculoClientes.routes');
const ClientesRoutes = require('./Routes/Cliente.routes');
const InteresRoutes = require('./Routes/Interes.routes');
const FacturaRoutes = require('./Routes/Factura.routes');

//Controladores
const VehiculoController = require('./Controllers/Vehiculo.controller');

//Servicios SERVICES LAYER
const VehiculoService = require('../Services/Vehiculo.service');

//Logica de negocio DOMAIN LAYER
const VehiculoBussines = require('../Domain/Vehiculo.bussines');

//Repositorios DATA ACCESS LAYER
const VehiculoRepository = require('../Data/repositories/Vehiculo.repository');

Container.register({
  app: asClass(Server).singleton(),
  router: asFunction(router).singleton(),
  config: asValue(config),
  db: asValue(db)
})
  .register({
    //RUTAS
    VehiculoRoutes: asFunction(VehiculoRoutes).singleton()
    // VehiculoClientesRoutes: asFunction(VehiculoClientesRoutes).singleton(),
    // ClientesRoutes: asFunction(ClientesRoutes).singleton(),
    // InteresRoutes: asFunction(InteresRoutes).singleton(),
    // FacturaRoutes: asFunction(FacturaRoutes).singleton()
  })
  .register({
    //CONTROLADORES
    VehiculoController: asClass(VehiculoController).singleton()
  })
  .register({
    //SERVICIOS
    VehiculoService: asClass(VehiculoService).singleton()
  })
  .register({
    //LOGICA NEGOCIO
    VehiculoBussines: asClass(VehiculoBussines).singleton()
  })
  .register({
    //REPOSITORIO
    VehiculoRepository: asClass(VehiculoRepository).singleton()
  });

module.exports = Container;
