const db = require('./config/db');
const UserModel = require('./models/user');
const ProductModel = require('./models/product');
const OrderModel = require('./models/order');

const newUser = new UserModel();
newUser.id = 1172;
newUser.username = 'pityu';
newUser.password = '123ds456';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session')

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(session({
    secret: 'rgfgregf15r2g1er6ger5g',
    resave: false,
    saveUninitialized: true,
    cookie: {secure: false}
}))

app.set('view engine', 'ejs');
//app.use(express.static('static'));

require('./route/index')(app);

app.listen(3000, function () {
    console.log('Hello :3000');
});