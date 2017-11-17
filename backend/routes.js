
module.exports = function(app){
    const root = require('./controller/root');
    const courses = require('./controller/courses');

    app.get('/', root);
    app.get('/api/courses', courses.findAll);
    app.get('/api/courses/:year', courses.findByYear);
};