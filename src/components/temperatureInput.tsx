import React, { Component } from "react";

const scaleName = {
    c: 'Celsius',
    f: 'Fahrenheit'
}

class TemperatureInput extends Component{
    constructor(props){
        super(props)
        this.state = {
            temperature: ''
        }
    }

    handleChange = e => {
        // this.setState({ temperature: e.target.value })
        this.props.onTemperatureChange(e.target.value)
    }

    render() {
        const temperature = this.props.temperature
        const scale = this.props.scale
        return (
            <div>
                <fieldset>
                    <legend>Enter temperature in { scaleName[scale] }</legend>
                    <input value={temperature}
                            onChange={this.handleChange}
                    />
                </fieldset>
            </div>
        )
    }
}

export default TemperatureInput;