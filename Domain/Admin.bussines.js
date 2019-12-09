const BaseBussines = require('./Base.bussines');

class AdminBussines extends BaseBussines {
    constructor({ AdminRepository }) {
        super(AdminRepository);
        this.AdminRepository = AdminRepository
    }

    async getLogin(email, contrasenia) {
        const login = await this.AdminRepository.getLogin(email, contrasenia)
        if (login) {
            if (login.password === contrasenia) {
                return { login: true } 
            } else {
                return { login: false, message: "Contaseña incorrecta" } 
            }
        } else {
            return { login: false, message: "Email incorrecto" } 
        }
    }
}

module.exports = AdminBussines;
