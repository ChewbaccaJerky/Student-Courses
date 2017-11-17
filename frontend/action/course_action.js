import * as CourseUtil from '../util/course_api_util';

export const RECEIVE_COURSES = "RECEIVE_COURSES";
export const CHOOSE_COURSE = "CHOOSE_COURSE";

const receiveCourses = (courses, year = "all", current_course = "") => ({
    type: RECEIVE_COURSES,
    courses,
    year,
    current_course
});

const pickedCourse = (current_course) => ({
    type: CHOOSE_COURSE,
    current_course
});

export const fetchCourses = () => dispatch => {
    return CourseUtil.fetchCourses().then(res => {
        res.json().then(courses => (dispatch(receiveCourses(courses, "all"))));
    });
};

export const fetchCoursesByYear = (year) => dispatch => {
    return CourseUtil.fetchCoursesByYear(year).then(res => {
        res.json().then(courses => (dispatch(receiveCourses(courses, year))));
    });
};

export const chooseCourse = (course) => dispatch => {
    return dispatch(pickedCourse(course));
};