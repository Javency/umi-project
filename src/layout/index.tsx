import React, { Component } from 'react';
import styles from './index.less'
import {Layout, Menu, Breadcrumb} from 'antd'
import {Link} from 'umi'
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    StarOutlined,
    FlagOutlined,
    } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class MainLayout extends Component{
    constructor(props: any){
        super(props)
        this.state = {
            collapsed: false
        }
    }

    componentDidMount() {
        document.addEventListener('visibilitychange', function() {
            if(document.visibilityState === 'hidden'){
                document.title = 'Bye，待会儿见'
            }

            if(document.visibilityState === 'visible'){
                document.title = 'Hi，欢迎回来~'
            }
        })

    }

    onCollapse = collapsed => {
        this.setState({ collapsed });
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed
        })
    }

    render() {
        let iscollapsed = this.state.collapsed,
            imgEle
        if(!iscollapsed){
            imgEle = <p>
                        <img src="https://img.cdn.icaibei.net/avatar/3c9c7bc1fccdea472a4eeae58f8b8f89.png" alt=""/>
                        &nbsp;&nbsp;<span style={{color: '#fff'}}>hi，贾文斯</span>
                    </p>
        }else{
            imgEle = <img src="https://img.cdn.icaibei.net/avatar/3c9c7bc1fccdea472a4eeae58f8b8f89.png" alt=""/>
        }

        return(
            <Layout style={{minHeight: '100vh'}}>
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div className={styles.logo}>
                        {imgEle}
                    </div>
                    <Menu theme="dark" mode="inline">
                        <SubMenu key="sub1" icon={<StarOutlined />} title="核心概念">
                            <Menu.Item key="1">
                                <Link to="/main/rendering-elements">元素渲染</Link>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Link to="/main/componentsAndProps">组件&props</Link>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Link to="/main/stateAndLifecycle">state&生命周期</Link>
                            </Menu.Item>
                            <Menu.Item key="4">
                                <Link to="/main/event">事件处理</Link>
                            </Menu.Item>
                            <Menu.Item key="5">
                                <Link to="/main/list">列表渲染</Link>
                            </Menu.Item>
                            <Menu.Item key="6">
                                <Link to="/main/form">表单</Link>
                            </Menu.Item>
                            <Menu.Item key="7">
                                <Link to="/main/stateup">状态提升</Link>
                            </Menu.Item>
                            <Menu.Item key="8">
                                <Link to="/main/relationship">组合&继承</Link>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<FlagOutlined />} title="高级指引">
                            <Menu.Item key="9">
                                <Link to="/guide/context">Context</Link>
                            </Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>

                <Layout>
                    <Header className={styles.siteLayoutBackground} style={{ padding: 0 }}>
                        {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: styles.trigger,
                            onClick: this.toggle,
                        })}
                    </Header>
                    
                    <Content
                        className={styles.siteLayoutBackground}
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        <div>{this.props.children}</div>
                    </Content>
                </Layout>
            </Layout>
        )
    }
}

export default MainLayout