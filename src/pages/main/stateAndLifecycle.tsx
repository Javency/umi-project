import React, { Component } from "react";

class stateAndLifecycle extends Component{
    constructor(props){
        super(props)
        this.state = {
            date: '',
            value: ''
        }
    }

    componentDidMount() {
        this.setState({
            date: new Date().toLocaleTimeString()
        })

        this.setState((state, props) => ({
            value: `现在时间：${state.date}`
        }))
    }

    render() {
        return(
            <div>
                <h1>date：</h1>
                <p>{this.state.date}</p>
                <h1>value：</h1>
                <p>{this.state.value}</p>
            </div>
        )
    }
}

export default stateAndLifecycle;