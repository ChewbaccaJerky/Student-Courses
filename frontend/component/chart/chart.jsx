import React from 'react';
import PieGraph from './pie-graph';
class Chart extends React.Component {
    constructor({courses, year, fetchCourses, fetchCoursesByYear, chooseCourse}) {
        super();
        this.state = { courses, year };
        this.handleChange = this.handleChange.bind(this);
        this.fetchCourses = fetchCourses.bind(this);
        this.fetchCoursesByYear = fetchCoursesByYear.bind(this);
        this.chooseCourse = chooseCourse.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if(this.state.courses !== nextProps.courses) {
            this.setState({courses: nextProps.courses, year: nextProps.year});
        }
    }

    handleChange(e) {
        if(e.target.value === "all") {
            this.fetchCourses();
        }
        else {
            this.fetchCoursesByYear(parseInt(e.target.value));
        }
    }

    render(){
        return(
            <div className="chart-container">
                <form onChange={this.handleChange}>
                    Year:
                    <input type="radio" name="year" value="all" defaultChecked/> All
                    <input type="radio" name="year" value="2015"/> 2015
                    <input type="radio" name="year" value="2016"/> 2016
                </form>
                <PieGraph courses={this.state.courses} chooseCourse={this.chooseCourse}/>
            </div>
        );
    }
}

export default Chart;