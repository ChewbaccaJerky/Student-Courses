import React from 'react';
import ReactDOM from 'react-dom';
import Root from './component/root';
import * as CourseUtil from './util/course_api_util';
import * as CourseActions from './action/course_action';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', ()=>{
    const root = document.getElementById('root');
    CourseUtil.fetchCourses().then(res => {
        res.json().then(courses => {
            let preloadedState = { 
                courses: courses,
                year: "all",
                current_course: ""
            };
            const store = configureStore(preloadedState);

            // window.CourseActions = CourseActions;
            // window.store = store;

            ReactDOM.render(<Root store={store}/>, root);
        });
    });
});

