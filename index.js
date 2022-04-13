/*const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('static'));

require('./route/index')(app);

app.listen(3000, function () {
    console.log('Hello :3000');
});*/

const userModel = require('./models/user');

let uj = new userModel();
uj.id = 2;
uj.username = 'gdahxr';
uj.password = 'xy12zz2';
uj.save(error => {
    console.log(error);
})

