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

function mapStateToProps(state) {
    return {
        ...state
    }
}

App.propTypes = {};

export default connect(mapStateToProps)(App);
