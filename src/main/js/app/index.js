import React, { Component } from 'react';
import { BarChart } from '../charts/bar'

export class App extends Component {
    render() {
        let series = [
                {"values": [20,40,25,50,15,45,33,34]},
                {"values":[5,30,21,18,59,50,28,33]},
                {"values":[30,5,18,21,33,41,29,15]}
            ];
        return (
            <div>
                <BarChart
                    type={ "bar3d" }
                    series={ series }
                    legend={ true }
                    height={ 600 }
                    width={ 1000 }
                />
            </div>
        )
    }
}