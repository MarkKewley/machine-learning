import React, { Component } from 'react';
import zingchart from 'zingchart';

export class BarChart extends Component {
    componentDidMount() {
        var chartData = {
            "type": this.props.type,
            "series": this.props.series,
            "title": this.props.title,
            "plot": this.props.plot,
            "legend": `${this.props.legend}`,
            "theme": this.props.theme
        };
        zingchart.render({
            id: 'barDiv',
            data: chartData,
            height: this.props.height,
            width: this.props.width
        });
    }

    render() {
        return (
            <div id='barDiv' />
        )
    }
}

BarChart.propTypes = {
    type: React.PropTypes.oneOf(["bar", "vbar", "bar3d", "vbar3d", "hbar", "hbar3d"]),
    title: React.PropTypes.string,
    plot: React.PropTypes.object,
    series: React.PropTypes.array,
    height: React.PropTypes.number,
    width: React.PropTypes.number,
    legend: React.PropTypes.bool,
    theme: React.PropTypes.string
};
