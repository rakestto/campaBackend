class InteresController {
  constructor({ InteresService }) {
    this.InteresService = InteresService;
  }

  async getIntereses(req, res) {
    const Interess = await this.InteresService.getAll();
    if (!Interess) {
      return res.sendStatus(404);
    }
    return res.send({
      Interess
    });
  }

  async getInteres(req, res) {
    const { id } = req.params;
    const Interes = await this.InteresService.get(id);
    if (!Interes) {
      return res.sendStatus(404);
    } else {
      return res.send({
        Interes
      });
    }
  }

  async createInteres(req, res) {
    const { body } = req;
    console.log(body);
    const InteresCreado = await this.InteresService.create(body);
    if (!InteresCreado) {
      return res.sendStatus(404);
    }
    return res.send({
      InteresCreado
    });
  }
  async updateInteres(req, res) {
    const { body } = req;
    const { id } = req.params;
    const updatedInteres = await this.InteresService.update(id, body);
    if (!updatedInteres) {
      return res.sendStatus(404);
    }
    return res.send({
      updatedInteres
    });
  }

  async deleteInteres(req, res) {
    const { vehiculoId } = req.params;
    const deletedInteres = await this.InteresService.deleteConVehiculo(vehiculoId);
    if (!deletedInteres) return null;
    return res.send({
      deletedInteres
    });
  }


}

module.exports = InteresController;
