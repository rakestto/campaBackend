class VehiculoService {
  constructor({ VehiculoBussines }) {
    this.VehiculoBussines = VehiculoBussines;
  }

  getVehiculos = async () => {
    const vehiculos = await this.VehiculoRepository;
  };
}
