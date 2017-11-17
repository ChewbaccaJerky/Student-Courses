const path = require('path');
module.exports = function(req, res){
    const dir = __dirname.replace('/backend/controller', '/index.html');
    res.sendFile(dir);
}; 