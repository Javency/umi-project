import React, { Component } from "react";

export default class FakeMsg extends Component{
    constructor(props){
        super(props)
    }

    render() {
        return(
            <div>
                {this.props.children}
                <div style={{ marginTop: '16px', padding: '8px' }}>
                    <div style={{backgroundColor: '#ffccc7', borderRadius: '4px', padding: '8px', marginBottom: '8px'}}>
                        {this.props.left}
                    </div>
                    <div style={{backgroundColor: '#f4ffb8', borderRadius: '4px', padding: '8px'}}>
                        {this.props.right}
                    </div>
                </div>
            </div>
        )
    }
}