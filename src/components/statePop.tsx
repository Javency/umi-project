import React, { Component } from 'react';

export default class statePop extends Component{
    constructor(props: any){
        super(props)
    }

    render() {
        let isBoil = this.props.celsius >= 100 ? true : false
        let pEle
        if(isBoil) {
            pEle = <p>The water would boil</p>
        }else{
            pEle = <p>The water would not boil</p>
        }
        
        return(
            <div>
                {pEle}
                {this.props.children}
            </div>
        )
    }
}