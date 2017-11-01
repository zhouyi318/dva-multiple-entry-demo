import React,{PureComponent} from 'react';
import { connect } from 'dva';
import { NavBar, Icon } from 'antd-mobile';

import Header from 'components/Header'

class App extends PureComponent{

    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        const header = {
            title:'DEMO',
            icon:<Icon type="left" />
        }

        return(
            <div>
                <Header {...this.props}/>
                {this.props.children}
            </div>
        )
    }
}

// <NavBar {...header} >{header.title}</NavBar>

// 将数据吐出给组件props
function mapStateToProps(state) {
    return {
        ...state
    }
}

App.propTypes = {};

// 用 connect 将数据和组件链接 
export default connect(mapStateToProps)(App);
