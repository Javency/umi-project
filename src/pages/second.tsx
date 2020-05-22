import React, { Component } from 'react';
import { Button } from 'antd';
import { Link } from 'umi';
import StatePop from '@/components/statePop'


export default class second extends Component {
    constructor(props: any){
        super(props)
        this.state = {
            celsius: ''
        }
    }

    handleValue = event => {
        let data = event.target.value
        this.setState((state) => ({
            celsius: data
        }));
    }

    render() {
        const scale = this.props.scale
        return (
            <div>
                <Button type="primary"><Link to="/">回首页</Link></Button>
                <Button type="primary"><Link to="/third">第三页</Link></Button><br/>
                <input type="text" value={this.state.celsius} onChange={this.handleValue}/>
                <StatePop celsius={parseInt(this.state.celsius)}>
                    <p>aha, this is called slot</p>
                </StatePop>
            </div>
        );
    }
}