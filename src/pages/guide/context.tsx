import React, { Component } from 'react';
import ContextChild from '@/components/contextChild';

const ThemContext = React.createContext('primary')
export default class ContextCom extends Component{

    componentDidMount() {
        console.log(ThemContext)
    }

    render() {
        return(
            <div>
                <ThemContext.Provider value="dashed">
                    <ContextChild></ContextChild>
                </ThemContext.Provider>
            </div>
        )
    }
}