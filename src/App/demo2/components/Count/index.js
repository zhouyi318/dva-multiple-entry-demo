import React,{PureComponent} from 'react';
import styles from './index.less';

const Count = (props) => {
    // 获取父组件传来的 models
    props = props.props;
    // 打印数据
    console.log(props.count)
    return (
        <div className={styles.normal}>
            <h2>实现购物车“添加/减少”商品</h2>
            <div className={styles.count}>商品数量： {props.count.number}
            </div>
            <div className={styles.toggle}>
                <button
                    className={styles.add}
                    // 当点击 + 的时候，dispatch 一个action => 'count/todo'
                    onClick={() => {
                    props.dispatch({type: 'count/todo'})
                }}>+</button>
                <button
                    className={styles.minus}
                    // 当点击 - 的时候，dispatch 一个action => 'count/minus'
                    onClick={() => {
                    props.dispatch({type: 'count/minus'})
                }}>-</button>
            </div>
            <hr/>
<<<<<<< HEAD
            <p className={styles.ajax}>Ajax请求数据：</p>
=======
            <p>Ajax请求数据：</p> 
>>>>>>> 8fc3f34955c51f0000a547179c97ec76469f3a0d
            <p>{props.count.string}</p>   
        </div>
    )
};

Count.propTypes = {};

export default Count;
