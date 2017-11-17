
export const fetchCourses = () => (
    fetch('./api/courses')
);

export const fetchCoursesByYear = (year) => (
    fetch(`./api/courses/${year}`)
);