import React, { Component } from 'react';

export default class List extends Component{
    constructor(props: any) {
        super(props)
        this.state = {
            num: props.numbers
        }
    }

    render() {
        return(
            <ul>{this.state.num.map((number, index) => 
                <li key={index} style={{color: '#ccc'}}>{number + ' - 项'}</li>
            )}</ul>
        )
    }
}