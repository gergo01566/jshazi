const renderMW = require('../middleware/renderMW');

const checkPassMW = require('../middleware/auth/checkPassMW');
const authMW = require('../middleware/auth/authMW');
const logoutMW = require('../middleware/auth/logoutMW');
const inverseAuthMW = require('../middleware/auth/inverseAuthMW');

const getCartMW = require('../middleware/shoppingcart/getCartMW');
const deleteCartMW = require('../middleware/shoppingcart/deleteCartMW');
const saveCartMW = require('../middleware/shoppingcart/saveCartMW');
const addToCartMW = require('../middleware/shoppingcart/addToCartMW');

const getOrderMW = require('../middleware/order/getOrderMW');
const deleteOrderMW = require('../middleware/order/deleteOrderMW');
const getOrderDetailsMW = require('../middleware/order/getOrderDetailsMW');
const getAllOrdersMW = require('../middleware/order/getAllOrdersMW');

const getProductsMW = require('../middleware/products/getProductsMW');
const getProductMW = require('../middleware/products/getProductMW');
const saveProductMW = require('../middleware/products/saveProductMW');
const deleteProductMW = require('../middleware/products/deleteProductMW');
const getDrinksMW = require('../middleware/products/getDrinksMW');
const getSweetsMW = require('../middleware/products/getSweetsMW');
const getAlcholosMW = require('../middleware/products/getAlcoholsMW');

const getUsersMW = require('../middleware/user/getUsersMW');
const deleteUserMW = require('../middleware/user/deleteUserMW');
const saveUserMW = require('../middleware/user/saveUserMW');
const getUserMW = require('../middleware/user/getUserMW');

const UserModel = require('../models/user');
const OrderModel = require('../models/order');
const ProductModel = require('../models/product');

module.exports = function (app) {
    const objRepo = {
        UserModel,
        OrderModel,
        ProductModel
    };

    app.use('/login',
        inverseAuthMW(objRepo),
        checkPassMW(objRepo),
        renderMW(objRepo, 'index'));

    app.get('/logout',
        authMW(objRepo),
        logoutMW(objRepo));

    /* Products routes */

    app.get('/drinks',
        authMW(objRepo),
        getProductsMW(objRepo),
        renderMW(objRepo, 'drinks'));

    app.get('/sweets',
        authMW(objRepo),
        getProductsMW(objRepo),
        renderMW(objRepo, 'sweets'));

    app.get('/alcohols',
        authMW(objRepo),
        getProductsMW(objRepo),
        renderMW(objRepo, 'alcohols'));

    /* Shoppingcart routes */

    app.get('/shoppingcart',
        authMW(objRepo),
        getCartMW(objRepo),
        renderMW(objRepo, 'shoppingcart'));

    app.use('/shoppingcart/delete',
        authMW(objRepo),
        getCartMW(objRepo),
        deleteCartMW(objRepo));

    app.use('/shoppingcart/order',
        authMW(objRepo),
        getCartMW(objRepo),
        saveCartMW(objRepo));

    /* Order history routes */

    app.get('/orders/:userID',
        authMW(objRepo),
        getOrderMW(objRepo),
        renderMW(objRepo, 'orders'));

    /* Admin routes */

    app.get('/adminpage',
        authMW(objRepo),
        getAllOrdersMW(objRepo),
        getProductsMW(objRepo),
        getUsersMW(objRepo),
        renderMW(objRepo, 'adminpage'));

    app.get('/adminpage/orders/view/:orderID',
        authMW(objRepo),
        getOrderDetailsMW(objRepo),
        renderMW(objRepo, 'vieworder'));

    app.get('/adminpage/orders/delete/:orderID',
        authMW(objRepo),
        getAllOrdersMW(objRepo),
        deleteOrderMW(objRepo));

    app.use('/adminpage/products/edit/:productID',
        authMW(objRepo),
        getProductMW(objRepo),
        saveProductMW(objRepo),
        renderMW(objRepo, 'newproduct'));

    app.get('/adminpage/products/delete/:productID',
        authMW(objRepo),
        getProductMW(objRepo),
        deleteProductMW(objRepo));

    app.use('/adminpage/products/new',
        authMW(objRepo),
        getProductMW(objRepo),
        saveProductMW(objRepo),
        renderMW (objRepo, 'newproduct'));

    app.get('/adminpage/users/delete/:userID',
        authMW(objRepo),
        getUserMW(objRepo),
        deleteUserMW(objRepo));

    app.use('/adminpage/users/new/',
        authMW(objRepo),
        getUserMW(objRepo),
        saveUserMW(objRepo),
        renderMW(objRepo, 'newuser'));



};