import React, { Component } from 'react';
import { Button } from 'antd';
import List from '@/components/list'
import { Link } from 'umi';

export default class third extends Component {
    constructor(props: any) {
        super(props)
        // console.log(props)
        this.state = {
            date: new Date(),
            num: [1, 2, 3, 4, 5],
            msg: '',
            value: ''
        }

        // this.handleBtn = this.handleBtn.bind(this)
    }
    componentDidMount() {
        this.timerId = setInterval(
            () => this.tick(),
            1000
        )
        // document.title = 'third'
    }

    componentWillUnmount = () => {
        clearInterval(this.timerID);
        this.handleBtn = ''
    }
    
    tick() {
        this.setState({
            date: new Date()
        });
    }

    handleBtn = () => {
        this.setState({
            msg: 'Hi'
        })
    }

    handleDele = () => {
        this.setState({
            msg: ''
        })
    }

    handleValue = event => {
        // console.log(event);
        this.setState({value: event.target.value})
    }
    
    render() {
        return(
            <div>
                <Link to="/">回首页</Link>
                <h1>hello, react</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
                <h3>列表：</h3>
                <List numbers={this.state.num}/>
                <h3>state：</h3>
                <Button type="primary" onClick={this.handleBtn}>click me</Button>&nbsp;
                <Button type="ghost" onClick={this.handleDele}>click me to delete</Button>
                <p style={{fontSize:'30px'}}>{this.state.msg}</p>
                <h3>表单：</h3>
                <form>
                    <label>
                        名字：<input type="text" value={this.state.value} onChange={this.handleValue}/>
                    </label>
                </form>
                <p>{this.state.value}</p>
            </div>
        )
    }
}