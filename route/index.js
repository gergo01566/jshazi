const renderMW = require('../middleware/renderMW');

const checkPassMW = require('../middleware/auth/checkPassMW');
const authMW = require('../middleware/auth/authMW');
const logoutMW = require('../middleware/auth/logoutMW');

const getCartMW = require('../middleware/shoppingcart/getCartMW');
const deleteCartMW = require('../middleware/shoppingcart/deleteCartMW');
const saveCartMW = require('../middleware/shoppingcart/saveCartMW');
const addToCartMW = require('../middleware/shoppingcart/addToCartMW');

const getOrderMW = require('../middleware/order/getOrderMW');
const deleteOrderMW = require('../middleware/order/deleteOrderMW');
const getOrderDetailsMW = require('../middleware/order/getOrderDetailsMW');
const getAllOrdersMW = require('../middleware/order/getAllOrdersMW');

const getProductsMW = require('../middleware/products/getProductsMW');
const saveProductMW = require('../middleware/products/saveProductMW');
const deleteProductMW = require('../middleware/products/deleteProductMW');
const getDrinksMW = require('../middleware/products/getDrinksMW');
const getSweetsMW = require('../middleware/products/getSweetsMW');
const getAlcholosMW = require('../middleware/products/getAlcoholsMW');

const getUserMW = require('../middleware/user/getUserMW');
const deleteUserMW = require('../middleware/user/deleteUserMW');
const saveUserMW = require('../middleware/user/saveUserMW');

module.exports = function (app) {
    const objRepo = {};

    app.use('/login',
        checkPassMW(objRepo),
        renderMW(objRepo, 'index'));

    /* Products routes */

    app.get('/drinks',
        authMW(objRepo),
        getDrinksMW(objRepo),
        logoutMW(objRepo),
        renderMW(objRepo, 'drinks'));

    app.use('/drinks/add/:productid',
        authMW(objRepo),
        addToCartMW(objRepo));

    app.get('/sweets',
        authMW(objRepo),
        getSweetsMW(objRepo),
        logoutMW(objRepo),
        renderMW(objRepo, 'sweets'));

    app.use('/sweets/add/:productid',
        authMW(objRepo),
        addToCartMW(objRepo));

    app.get('/alcohols',
        authMW(objRepo),
        getAlcholosMW(objRepo),
        logoutMW(objRepo),
        renderMW(objRepo, 'alcohols'));

    app.use('/alcohols/add/:productid',
        authMW(objRepo),
        addToCartMW(objRepo));

    /* Shoppingcart routes */

    app.get('/shoppingcart',
        authMW(objRepo),
        getCartMW(objRepo),
        logoutMW(objRepo),
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
        logoutMW(objRepo),
        renderMW(objRepo, 'orders'));

    /* Admin routes */

    app.get('/adminpage',
        authMW(objRepo),
        getAllOrdersMW(objRepo),
        getProductsMW(objRepo),
        getUserMW(objRepo),
        logoutMW(objRepo),
        renderMW(objRepo, 'adminpage'));

    app.get('/adminpage/orders/view/:orderID',
        authMW(objRepo),
        getOrderDetailsMW(objRepo),
        new	renderMW(objRepo, 'vieworder'));

    app.get('/adminpage/orders/delete/:orderID',
        authMW(objRepo),
        getAllOrdersMW(objRepo),
        deleteOrderMW(objRepo));

    app.use('/adminpage/products/edit/:productID',
        authMW(objRepo),
        getProductsMW(objRepo),
        saveProductMW(objRepo),
        logoutMW(objRepo),
        renderMW(objRepo, 'editproduct'));

    app.get('/adminpage/products/delete/:productID',
        authMW(objRepo),
        getProductsMW(objRepo),
        deleteProductMW(objRepo));

    app.use('/adminpage/products/new/:productID',
        authMW(objRepo),
        getProductsMW(objRepo),
        saveProductMW(objRepo),
        logoutMW(objRepo),
        renderMW (objRepo, 'newproduct'));

    app.get('/adminpage/users/delete/:userID',
        authMW(objRepo),
        getUserMW(objRepo),
        deleteUserMW(objRepo),
        logoutMW(objRepo));

    app.use('/adminpage/users/new/:userID',
        authMW(objRepo),
        getUserMW(objRepo),
        saveUserMW(objRepo),
        logoutMW(objRepo),
        new	renderMW(objRepo, 'newuser'));

};