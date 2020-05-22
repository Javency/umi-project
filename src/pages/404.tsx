import { Result, Button } from 'antd'
import { Component } from 'react';
import { history } from 'umi'

class notFound extends Component{
    backHome = () => {
        history.push('/')
    }
    render() {
        return(
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exit"
                extra={<Button type="primary" onClick={this.backHome}>Back Home</Button>}
            />
        )
    }
}

export default notFound;