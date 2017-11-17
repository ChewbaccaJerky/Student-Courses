const express = require('express');
const routes = require('./routes.js');
const app = express();

routes(app);

const dir = __dirname.replace('backend', "");
app.use('/javascript', express.static(dir + '/asset/javascript'));
app.use('/css', express.static(dir + '/asset/css'));

app.listen(3000);
console.log('Server is running at http://localhost:3000/');