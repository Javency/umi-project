import React, { Component } from "react";

class eleCreate extends Component{
    constructor(props: any){
        super(props)
        this.state = {
            date: ''
        }
    }

    tick() {
        this.setState({date: new Date().toLocaleTimeString()})
    }

    componentWillMount(){
        this.timerId = setInterval(
            () => this.tick()
        , 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerId)
    }

    render() {
        return(
            <div>
                <h1>hello, React</h1>
                <h1>It is {this.state.date}</h1>
            </div>
        )
    }
}

export default eleCreate;