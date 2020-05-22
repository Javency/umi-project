import React, { Component } from "react";
import styles from '@/styles/main/componentsAndProps.less';

class comAndProp extends Component{

    Welcome(props){
        return <h1>Hello, {props.name}</h1>
    }

    render() {
        const element = <p>这是被渲染的p标签组件</p>
        const elestr = 'const elestr = <p>这是被渲染的p标签组件</p>'
        return(
            <div>
                <div className={styles.box}>
                    <h1>渲染组件：</h1>
                    <code>{elestr}</code>
                    {element}
                </div>
                <div className={styles.box}>
                    <h1>组合组件：</h1>
                    <this.Welcome name="Sara"/>
                    <this.Welcome name="Cahal"/>
                    <this.Welcome name="Edite"/>
                </div>
            </div>
        )
    }
}

export default comAndProp