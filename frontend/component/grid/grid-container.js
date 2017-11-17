import { connect } from 'react-redux';
import Grid from './grid';

const DEFAULT = {
    current_course: "",
    courses: [],
    avg: 0,
}

const mapStateToProps = (state, ownProps) => {
    //two returns 
    // 1: when current_course is empty
    if(state.current_course === "") {
        return DEFAULT;
    }
    
    let courseHash = {
        2015: {},
        2016: {}
    };

    // 2: when current_course is picked
    let courses = state.courses;
    let total = 0;
    let size = 0;
    // iterate through courses and create a hash
    for(let i = 0; i < courses.length; i++) {
        let instructor = courses[i].instructor;
        let year = courses[i].year;
        let students = courses[i].students;
        total += students;

        if(!courseHash[year][instructor]) {
            courseHash[year][instructor] = {
                students: students,
                instructor: instructor,
                year: year,
                course: state.current_course
            };   
            size++; 
        }
        else {
            courseHash[year][instructor].students += students;
        }
    }

    // Create an Array for easy mapping inside of main React Component
    let courseArray = [];
    let years = Object.keys(courseHash);
    for(let i = 0; i < years.length; i++) {
       let tempArray = Array.from(Object.values(courseHash[years[i]]));
       courseArray = courseArray.concat(tempArray);
    }

    return {
        current_course: state.current_course,
        courses: courseArray,
        year: state.year,
        avg: (total/size)
    }
}

export default connect(mapStateToProps, null)(Grid);