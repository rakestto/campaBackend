const BaseService = require('./Base.service');

class AdminService extends BaseService {
    constructor({ AdminBussines }) {
        super(AdminBussines);
        this.AdminBussines = AdminBussines
    }
    async getLogin(email, contrasenia) {
        const login = await this.AdminBussines.getLogin(email, contrasenia)
        return login
    }
}

module.exports = AdminService;
