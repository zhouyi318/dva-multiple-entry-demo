import React,{PureComponent} from 'react';
import {connect} from 'dva';
import PropTypes from 'prop-types';
import {List,Icon} from 'antd-mobile';
import { routerRedux } from 'dva/router'


class HomeList extends PureComponent{
    constructor(props){
        super(props)
        let {renderHeader,container} = props.location.query;
        this.state={
            renderHeader:renderHeader,
            container:container
        }
    }

    componentWillMount(){
        this.props.dispatch({
            type:"home/setnavbar",
            payload:{
                title:this.state.renderHeader,
                icon:<Icon type="left" />,
                onLeftClick:()=>{
                    this.props.history.goBack()
                },
                rightContent:<Icon key="1" type="ellipsis" />
            }
        })
    }

    render(){
        let {renderHeader,container}=this.state;
        return(
            <div>
                <p>{container}</p>
            </div>
        )
    }
    
}

// 将数据吐出给组件props
function mapStateToProps(state) {
    return {
        ...state
    }
}

HomeList.propTypes = {};

// 用 connect 将数据和组件链接
export default connect(mapStateToProps)(HomeList);
