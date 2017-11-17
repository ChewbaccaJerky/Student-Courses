import React from 'react';

const GridTitle = ({current_course}) => {
    const content = current_course === "" ? "Choose A Course" : current_course;
    return(
        <h1 className="grid-title">{content}</h1>
    );
};

export default GridTitle;