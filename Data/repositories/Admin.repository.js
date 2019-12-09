const BaseRepository = require('./Base.repository');

class AdminRepository extends BaseRepository {
    constructor({ db }) {
        super(db, 'Admin');
    }

    getLogin(email, contrasenia) {
        const login = this.db.Admin.findOne({ where: { email } })
        return login
    }
}

module.exports = AdminRepository;
