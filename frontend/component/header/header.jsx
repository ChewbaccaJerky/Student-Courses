import React from 'react';

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = { courses: props.courses, year: props.year };
    }

    componentWillReceiveProps(nextProps) {
        if(this.state.year !== nextProps.year) {
            this.setState({courses: nextProps.courses, year: nextProps.year});
        }
    }

    render(){
        let content = this.state.year === "all" ? "" : ` ${this.state.year}`;
        return (
            <div className="header">
                <h1>Students by Course {content}</h1>
            </div>
        );
    }
}

export default Header;