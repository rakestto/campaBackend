class AdminController {
    constructor({ AdminService }) {
        this.AdminService = AdminService;
    }

    async getAdmins(req, res) {
        const Admins = await this.AdminService.getAll();
        return res.send({
            Admins
        });
    }

    async getAdminLogin(req, res) {
        const { email, password } = req.body
        const adminLogin = await this.AdminService.getLogin(email, password)
        return adminLogin ? res.send( adminLogin ) : res.sendStatus(404)
    }

    async getAdmin(req, res) {
        const { id } = req.params;
        const Admins = await this.AdminService.get(id);
        return Admins ? res.send({ Admins }) : res.sendStatus(404);
    }

    async createAdmin(req, res) {
        const { body } = req;
        const AdminCreado = await this.AdminService.create(body);
        if (!AdminCreado) {
            return res.sendStatus(404);
        }
        return res.send({
            AdminCreado
        });
    }

    async updateAdmin(req, res) {
        const { body } = req;
        const { id } = req.params;
        const updatedAdmin = await this.AdminService.update(id, body);
        if (!updatedAdmin) {
            return res.sendStatus(404);
        }
        return res.send({
            updatedAdmin
        });
    }

    async deleteAdmin(req, res) {
        const { id } = req.params;
        const deletedAdmin = await this.AdminService.delete(id);
        if (!deletedAdmin) {
            return res.sendStatus(404);
        }
        return res.send({
            deletedAdmin
        });
    }
}

module.exports = AdminController;
