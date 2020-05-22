import React, { Component } from "react";
import { message, Button, Space } from 'antd'

class list extends Component{

    info = (i) => {
        message.info(`u clicked ${i}`)
    }

    render() {
        const arr = [1, 2, 3, 4, 5]
        const items = arr.map(number =>
            <Button type="primary" key={number.toString()} onClick={() => this.info(number)}>click the {number}</Button>
        )
        return(
            <div>
                <Space>
                    {items}
                </Space>
            </div>
        )
    }
}

export default list;