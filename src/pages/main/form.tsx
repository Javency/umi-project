import React, { Component } from "react";
import { Form, Input, Button, Checkbox } from 'antd';

class FormPage extends Component{
    constructor(props){
        super(props)
        this.state = {
            value: ''
        }
    }

    handleChange = e => {
        this.setState({ value: e.target.value })
    }

    handleSubmit = e => {
        console.log('Submit:', this.state.value)
        e.preventDefault()
    }

    render() {
        const layout = {
            labelCol: { span: 2 },
            wrapperCol: { span: 10 }
        };

        const tailLayout = {
            wrapperCol: { offset: 2, span: 10 }
        };

        const onFinish = values => {
            console.log('Success:', values )
        }

        const onFinishFailed = errorInfo => {
            console.log('Failed:', errorInfo)
        }
        
        return (
            <div>
                <h1>native:</h1>
                <form onSubmit={this.handleSubmit} style={{marginBottom: '16px'}}>
                    <label>
                        名字：
                        <input type="text" value={this.state.value} onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="提交"/>
                </form>

                <h1>ant design:</h1>
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{ rember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Plase input your username' }]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password' }]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">submit</Button>
                    </Form.Item>

                </Form>
            </div>
        )
    }
}

export default FormPage;