import React from 'react';
import styles from './index.less';

const Count = (props) => {
    // 获取父组件传来的 models
    let countProps = props.props;
    console.log(countProps.count.number)
    return (
        <div className={styles.normal}>
            <h2>实现购物车“添加/减少”商品</h2>
            <div className={styles.count}>商品数量:{countProps.count.number}
            </div>
            <div className={styles.toggle}>
                <button
                    className={styles.add}
                    onClick={() => {
                        countProps.dispatch({type: 'count/todo'})
                }}>+</button>
                <button
                    className={styles.minus}
                    onClick={() => {
                        countProps.dispatch({type: 'count/minus'})
                }}>-</button>
            </div>
        </div>
    )
};

Count.propTypes = {};

export default Count;
