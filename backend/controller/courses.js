const fs = require('fs');
const dir = __dirname.replace('backend/controller', '/data.json');
const rawData = fs.readFileSync(dir);
const coursesArray = JSON.parse(rawData);

exports.findAll = (req, res) => {
    res.send(coursesArray.courses);
};

exports.findByYear = (req, res) => {
    let courses = coursesArray.courses;
    courses = courses.filter((course)=>{
        return course.year == req.params.year;
    });
    res.send(courses);
};