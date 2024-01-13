import express from 'express';
import homeController from '../controllers/homeController';
import userController from '../controllers/userController';

let router = express.Router();

const testMiddleware = (req, res, next) => {
    if (true) {
        return res.send("reject middleware")
    }
    next();
}



const webRoute = (app) => {
    router.get('/toan', (req, res) => {
        return res.send('Đây là Toàn')
    })
    router.get('/', (req, res) => {
        return res.send('Chào mừng bạn đến với trang home')
    })

    router.get('/crud', homeController.postCRUD);
    router.post('/post-crud', homeController.actionPostCRUD);

    router.get('/crud-user-get', testMiddleware, userController.handleGetAllUsers);
    router.post('/crud-user-create', userController.handleCreateAllUsers);
    router.post('/crud-user-delete', userController.handleDeleteUsers);
    router.post('/crud-user-edit', userController.handleEditUsers);

    router.post('/api/login', userController.handleLoginUsers);

    router.post('/crud-product-create', userController.handleCreateAllProduct);
    router.get('/crud-product-get', userController.handleGetAllProduct);
    router.post('/crud-product-delete', userController.handleDeleteProduct);
    router.post('/crud-product-edit', userController.handleEditProduct);

    router.get('/crud-get-one-user', userController.handleGetUser);
    router.get('/crud-get-one-product', userController.handleGetProduct);

    router.post('/crud-orders-create', userController.handleCreateOrders);
    router.get('/crud-orders-get', userController.handleGetOrders);
    router.post('/crud-orders-edit', userController.handleEditOrders);

    router.post('/crud-orders-edit-complete', userController.handleEditOrdersComplete);


    router.post('/crud-dk-create', userController.handleCreatedk);
    router.post('/crud-dk-edit', userController.handleEditdk);





    return app.use('/', router);
}

module.exports = webRoute