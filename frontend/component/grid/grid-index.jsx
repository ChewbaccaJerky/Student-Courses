import React from 'react';
import GridIndexItem from './grid-index-item';

class GridIndex extends React.Component {
    constructor(props) {
        super();
        this.state = { avg: props.avg, current_course: props.current_course, courses: props.courses, year: props.year};
    }

    componentWillReceiveProps({props}) {
        this.setState({
            avg: props.avg,
            current_course: props.current_course,
            courses: props.courses,
            year: props.year
        }); 
    }

    render() {
        let content = "";
        if(this.state.current_course === undefined || this.state.current_course === "") return (<table></table>);
        if(this.state.courses) {
            content = this.state.courses.map((course, idx) => (
                <GridIndexItem 
                    key={idx} 
                    course={course} 
                    avg={this.state.avg}
                    idx={idx}
                />
            ));
        }
        return (
            <table className="grid-index">
                <tbody>
                <tr className="head">
                    <th>Year</th>
                    <th>Course</th>
                    <th>Instructor</th>
                    <th>Students</th>
                </tr>
                {content}
                </tbody>
            </table>
        );
    }
}
/*
{
    this
        .state
        .courses
        .map((course) => (<GridIndexItem course={course}/>))
}
*/
export default GridIndex;