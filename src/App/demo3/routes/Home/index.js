import React,{PureComponent} from 'react';
import {connect} from 'dva';
import PropTypes from 'prop-types';
import {List,Icon} from 'antd-mobile';
import { routerRedux } from 'dva/router'

const Item = List.Item;
const Brief = Item.Brief;

class Home extends PureComponent{
    constructor(props){
        // console.log(props)
        super(props)
        this.state={}
    }

    componentWillMount(){
        this.props.dispatch({
            type:"home/setnavbar",
            payload:{
                title:'HOME',
            }
        })
    }


    render(){
        const {list} = this.props.home;
        // console.log(list)
        return(
            <div>
                {list.map(({id,renderHeader,container}) => {
                    return (
                        <List key={id} renderHeader={() => renderHeader}>
                            <Item 
                                extra={<Icon type="right" />}
                                onClick={this.intoHomeList({renderHeader,container})}
                            >{container}</Item>
                        </List>
                    )
                })}
            </div>
        )
    }

    intoHomeList = (args) =>{
        return () => { this._intoHomeList(args) }
    }
    _intoHomeList=(args)=>{
        this.props.dispatch(routerRedux.push({
            pathname:'/homelist',
            query:{
                ...args
            }
        }));
    }
}

// 将数据吐出给组件props
function mapStateToProps(state) {
    // console.log(state)
    return {
        ...state
    }
}

Home.propTypes = {};

// 用 connect 将数据和组件链接
export default connect(mapStateToProps)(Home);
