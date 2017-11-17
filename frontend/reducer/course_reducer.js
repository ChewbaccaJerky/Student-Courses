import { RECEIVE_COURSES, CHOOSE_COURSE } from '../action/course_action';
import { merge } from 'lodash';

const DEFAULT = { courses: [], year: "all", current_course: ""};

const CourseReducer = (oldState = DEFAULT, action) => {
    Object.freeze(oldState);
    let newState = merge({}, oldState);
    switch(action.type) {
        case RECEIVE_COURSES:
            newState.courses = action.courses;
            newState.year = action.year;
            newState.current_course = action.current_course;
            return newState;
        case CHOOSE_COURSE:
            newState.current_course = action.current_course;
            return newState;
        default:
            return oldState;
    }
};

export default CourseReducer;