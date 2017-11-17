import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import CourseReducer from '../reducer/course_reducer';

// const middleWares = [thunk, logger];
const middleWares = [thunk];
const configureStore = (preloadedState = {}) => (

    createStore(
        CourseReducer,
        preloadedState,
        applyMiddleware(...middleWares)
    )
);

export default configureStore;