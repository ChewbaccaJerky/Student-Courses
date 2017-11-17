import React from 'react';
import GridTitle from './grid-title';
import GridIndex from './grid-index';

class Grid extends React.Component {
    constructor({avg, current_course, courses, year}) {
        super();
        this.state = {avg, current_course, courses, year};
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            avg: nextProps.avg,
            current_course: nextProps.current_course,
            courses: nextProps.courses,
            year: nextProps.year
        });
    }

    render() {
        // console.log(this.state);
        return (
            <div className="grid-container">
                <GridTitle current_course={this.state.current_course} />
                <GridIndex props={this.state} />
            </div>
        );
    }
}

export default Grid;