import React from 'react';

import NumberInput from './number-input';
import Output from './output';

export default class RateCalculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          dayrate: 300,
          hours: 5
        }
    }

    render() {
        const rate = parseFloat(this.state.dayrate) / parseFloat(this.state.hours);

        return (
            <form>
                <NumberInput id="day-rate" updateValue={rate=> this.setState({dayrate: rate})} value={this.state.dayrate} label="Day rate" min={0} max={5000} />
                <NumberInput id="hours" updateValue={hours => this.setState({ hours })} value={this.state.hours} label="Hours" min={1} max={12} />
                <Output id="hourly-rate" label="Hourly rate" value={rate.toFixed(2)}/>
            </form>
        );
    }
}

