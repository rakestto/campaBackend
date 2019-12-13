class VehiculoController {
    constructor({ VehiculoService, ImagenesService }) {
        this.VehiculoService = VehiculoService;
        this.ImagenesService = ImagenesService
    }

    async getVehiculos(req, res) {
        const vehiculos = await this.VehiculoService.getAll();
        if (!vehiculos) {
            return res.sendStatus(404);
        }
        return res.send({
            vehiculos
        });
    }

    async getVehiculoFiltrado(req, res) {
        const body = req.query;

        const vehiculos = await this.VehiculoService.getVehiculoFiltrado(body);
        if (vehiculos) {
            return res.send({
                vehiculos
            });
        } else {
            return res.sendStatus(404);
        }
    }

    async getVehiculoConImagenes(req, res) {
        const { id } = req.params;
        const vehiculoImagenes = await this.VehiculoService.getVehiculoConImagenes(
            id
        );
        if (vehiculoImagenes.vehiculo) {
            return res.send({
                vehiculoImagenes
            });
        } else {
            res.sendStatus(404);
        }
    }

    async getVehiculo(req, res) {
        const { id } = req.params;
        const vehiculo = await this.VehiculoService.get(id);
        if (!vehiculo) {
            return res.sendStatus(404);
        } else {
            return res.send({
                vehiculo
            });
        }
    }

    async createVehiculo(req, res) {
        const { body } = req;
        const imagen = req.files[0].filename;
        const vehiculoCreado = await this.VehiculoService.createVehiculo(
            body,
            imagen,
            req
        );
        if (!vehiculoCreado.vehiculo || !vehiculoCreado.galeria) {
            return res.sendStatus(404);
        }
        return res.send({
            vehiculoCreado
        });
    }
    async updateVehiculo(req, res) {
        const { body } = req;
        const { id } = req.params;
        const updatedVehiculo = await this.VehiculoService.update(id, body);
        if (!updatedVehiculo) {
            return res.sendStatus(404);
        }
        return res.send({
            updatedVehiculo
        });
    }

    async galeryUpdate(req, res) {
        const idVehiculo = req.params.id
        const imagen = req.files[0].filename
        const imagenCreada = await this.ImagenesService.createNew(idVehiculo, imagen)
        return imagenCreada ? res.send({ imagenCreada }) : res.sendStatus(404)
    }


    async deleteVehiculo(req, res) {
        const { id } = req.params;
        const deletedVehiculo = await this.VehiculoService.delete(id);
        if (!deletedVehiculo) return null;
        return res.send({
            deletedVehiculo
        });
    }
}

module.exports = VehiculoController;
