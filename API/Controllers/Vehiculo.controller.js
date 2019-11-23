class VehiculoController {
  constructor({ VehiculoService }) {
    this.VehiculoService = VehiculoService;
  }

  getVehiculos = async (req, res) => {
    const vehiculos = await this.VehiculoService.getVehiculos();
    if(!vehiculos)
  };

  getVehiculo = async (req, res) => {
    const vehiculo = await this.VehiculoService.getVehiculo();
    return vehiculo;
  };

  createVehiculo = async (req, res) => {
    const 
  };
}
