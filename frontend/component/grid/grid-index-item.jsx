import React from 'react';

const GridIndexItem = ({course, avg, idx}) => {
    return (
        <tr className={idx%2 === 0 ? "colored" : ""} >
            <td>{course.year}</td>
            <td>{course.course}</td>
            <td>{course.instructor}</td>
            <td className={ course.students < avg ? "bold" : ""}>{course.students}</td>
        </tr>);
};

export default GridIndexItem;