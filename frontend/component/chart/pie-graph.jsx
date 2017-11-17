import React from 'react';
import Chart from 'chart.js';

const COLORS = [
    "#FCF6B1",
    "#A9E5BB",
    "#B1EDE8",
    "#FF6978"
];

class PieGraph extends React.Component {
    constructor(props) {
        super(props);
        this.state = {courses: props.courses};
        this.chooseCourse = props.chooseCourse.bind(this);
        this.createGraph = this.createGraph.bind(this);
        this.updateGraph = this.updateGraph.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.Pie;
    }

    componentDidMount() {
        this.createGraph(this.state.courses);
    }

    
    componentWillReceiveProps(nextProps) {
        this.setState({courses: nextProps.courses}, ()=>{
            this.updateGraph(this.state.courses);
        });
    }

    createGraph(courses) {
        const canvas = document.querySelector('#pie-chart');
        // canvas.addEventListener('click', this.handleClick);
        const ctx = canvas.getContext("2d");
        
        const labels = [];
        const data = [];
        canvas.style.backgroundColor = "#FFF";

        // get labels and data
        for(let k in courses) {
            labels.push(k);
            data.push(courses[k]);
        }
        
        const config = {
            type : 'pie',
            data : {
                datasets: [{
                    data: data,
                    backgroundColor: COLORS
                }],
                labels: labels
            },
            options: {
                animation: {
                    animateScale: true
                },
                legend: {
                    position: "bottom"
                },
                onClick: this.handleClick
            }
        }
        this.Pie = new Chart(ctx, config);
    }

    updateGraph(courses) {
        const labels = [];
        const data = [];

        for(let key in courses) {
            labels.push(key);
            data.push(courses[key]);
        }

        this.updateData(data, labels);
    }

    updateData(data, labels) {
        this.Pie.labels = labels;
        // avoids async
        for(let i = 0; i < this.Pie.data.datasets.length; i++) {
            this.Pie.data.datasets[i].data = data;
        }
        this.Pie.data.datasets.data = data;
        this.Pie.update();
    }

    handleClick(e) {
        const course = this.Pie.getElementsAtEvent(e)[0];
        // if clicked outside of segment do nothing
        if(course) {
            this.chooseCourse(course._model.label);
        }
    }


    render() {
        return (
            <div className="chart">
                <canvas id="pie-chart"></canvas>
            </div>
        );
    }
}
export default PieGraph;