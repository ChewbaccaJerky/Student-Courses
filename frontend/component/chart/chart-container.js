import { connect } from 'react-redux';
import Chart from './chart';
import { fetchCourses, fetchCoursesByYear, chooseCourse } from '../../action/course_action';

const mapStateToProps = (state, ownProps) => {
    let hash = {};
    const courses = state.courses;
    for(let i = 0; i < courses.length; i++) {
        let curCourse = courses[i];
        if(hash[curCourse.course]) {
            hash[curCourse.course] += parseInt(curCourse.students);
        }
        else {
            hash[curCourse.course] = parseInt(curCourse.students);
        }
    }
    return {
        courses: hash,
        year: state.year
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchCourses: () => dispatch(fetchCourses()),
        fetchCoursesByYear: year => dispatch(fetchCoursesByYear(year)),
        chooseCourse: course => dispatch(chooseCourse(course))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Chart);