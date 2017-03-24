import React, { Component } from 'react';
import zingchart from 'zingchart';

export class BarChart extends Component {
    componentDidMount() {
        console.log('Calling createChart');
        var chartData = {
            "type": "bar",
            "series": [
                { "values": [35, 42, 67, 89]},
                { "values": [28, 40, 39, 36]}
            ]
        };
        console.log(chartData);
        zingchart.render({
            id: 'barDiv',
            data: chartData,
            height: 400,
            width: 600
        });
        console.log('HERE 2');
    }

    render() {
        return (
            <div id='barDiv' />
        )
    }
}
