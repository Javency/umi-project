import React, { Component } from "react";
import FakeMsg from '@/components/fakeMsg';
import { Alert } from 'antd'

class Relationship extends Component{
    render() {
        return(
            <div>
                <h2>包含关系eg:</h2>
                <FakeMsg
                    left={
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, totam? Pariatur nesciunt incidunt deserunt et natus velit est laudantium quia eum totam labore quos dicta, laboriosam iusto accusamus vel ut!</p>
                    }
                    right={
                        <p>
                            <i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro iusto incidunt vel amet neque voluptatibus! Nesciunt vero cupiditate unde reprehenderit at asperiores, quis doloremque aliquam architecto aliquid mollitia esse modi.</i>
                        </p>
                    }
                >
                    <h3>这是props.children里的内容</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates illum enim iste aspernatur, perspiciatis repudiandae aliquid, deleniti ex dignissimos eos excepturi esse rem placeat. Cumque autem accusantium quaerat nisi dicta.</p>
                </FakeMsg>
                <h2 style={{marginTop: '16px'}}>Tips:</h2>
                <Alert
                    showIcon 
                    message="包含关系："
                    description="<Relationship>JSX标签中的所有内容都会作为一个 children prop 传递给FakeMsg组件。因为FakeMsg将{props.children}渲染在一个<div>中。"
                    type="info"
                    style={{marginBottom: '16px'}}
                />
                <Alert
                    showIcon 
                    message="其他："
                    description="组件可以接受任意props，包括基本数据类型，React元素及函数。"
                    type="info"
                    style={{marginBottom: '16px'}}
                />
            </div>
        )
    }
}

export default Relationship