class VehiculoController {
  constructor({ VehiculoService }) {
    this.VehiculoService = VehiculoService;
  }

  getVehiculos = async () => {
    const vehiculos = await VehiculoService.getVehiculos;
  };
}
