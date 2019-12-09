const { Router } = require('express');

module.exports = ({ AdminController }) => {
    const router = Router();

    router.get('/', AdminController.getAdmin.bind(AdminController));
    router.post('/login', AdminController.getAdminLogin.bind(AdminController));
    router.get('/:id', AdminController.getAdmin.bind(AdminController));
    router.post('/', AdminController.createAdmin.bind(AdminController));
    router.put('/:id', AdminController.updateAdmin.bind(AdminController));
    router.delete(
        '/:id',
        AdminController.deleteAdmin.bind(AdminController)
    );

    return router;
};
