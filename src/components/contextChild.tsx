import React, { Component } from 'react';
import { Button } from 'antd'

// const ThemContext = React.createContext('primary')
export default class ContextChild extends Component{
    // static contextType = ThemContext

    componentDidMount() {
        console.log(this.context)
    }

    render() {
        return(
            <div>
                <Button>Default</Button>
            </div>
        )
    }
}