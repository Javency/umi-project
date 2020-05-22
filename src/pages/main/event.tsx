import React ,{ Component } from "react";
import { Button, Alert } from 'antd';

class handingEvent extends Component{
    constructor(props){
        super(props)
        this.state = {
            value: '石猴'
        }
    }

    handleClick = event => {
        this.setState({value: this.state.value === '石猴' ? '行者孙！' : '石猴'})
    }

    render() {
        return(
            <div>
                <p>{this.state.value}</p>
                <Button type="primary" onClick={this.handleClick}>变身</Button>

                <h2 style={{marginTop: '24px'}}>事件传参的两种方式</h2>
                <div style={{width: '40%'}}>
                    <Alert 
                        showIcon 
                        message="使用箭头函数传参："
                        description="onClick={ (e) => this.handleClick(arg, e) }"
                        type="info"
                        style={{marginBottom: '16px'}}
                    />
                    <Alert 
                        showIcon 
                        message="使用bind方式传参："
                        description="onClick={ this.handleClick.bind(this, arg) }"
                        type="info"
                    />
                </div>
            </div>
        )
    }
}

export default handingEvent;