import React from 'react';
import { connect } from 'dva';
import Count from '../components/Count';

// import styles from './app.less';

function App(props) {
  return (
      <div>
        { /* models 传给组件  */ }
        <Count props={ props } />
      </div>
  )
}

// 将数据吐出给组件props
function mapStateToProps(state) {
    return {
        ...state
    }
}

App.propTypes = {};

// 用 connect 将数据和组件链接 
export default connect(mapStateToProps)(App);
