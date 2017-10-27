/*
 * @Author: mikey.zhaopeng 
 * @Date: 2017-10-27 11:16:37 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2017-10-27 16:11:43
 */

// 第一步，引入 dva、connect、router、Switch、keymaster
import dva, { connect } from 'dva';
import { Router, Route, Switch } from 'dva/router';
import key from 'keymaster';

/* ------------------------------------- */

// 第二步，初始化一个app
const app = dva();

// 使用插件，目前用不到，忽略
// app.use({})

/* ------------------------------------- */

// 第三步，创建一个数据模型
// app.model({
//     // namespace 是 model state 在全局 state 所用的 key
//     namespace: 'count',
//     // state 是默认数据
//     state: {},
//     // 更新 state 是通过 reducers 处理, reducer 是唯一可以更新 state 的地方
//     // (state,action) => newState
//     reducers: {},
//     // dva 通过对 model 增加 effects 属性来处理 side effect(异步任务)
//     effects: {},
//     // Subscription 语义是订阅，用于订阅一个数据源，然后根据条件 dispatch 需要的 action。
//     // 数据源可以是当前的时间、服务器的 websocket 连接、keyboard 输入、geolocation 变化、history 路由变化等等。
//     // dva 中的 subscriptions 是和 model 绑定的
//     subscriptions: {},
// })

/* ------------------------------------- */

// 第十二步，添加 reducers
app.model({
    namespace: 'count',
    // 将计数器开始值默认为 0 
    state: {
        number: 0
    },
    reducers: {
        // 增加
        add(state) {
            state.number = state.number + 1
            return {
                ...state
            }
        },
        // 减少
        minus(state) {
            state.number = state.number - 1
            return {
                ...state
            }
        }
    },
    // 添加副作用
    effects: {
        *todo(action, {call, put}) {
            // 先运行 reducers 中的 add 方法
            yield put({
                type: 'add'
            });
            // 当 add 每点击一次成功后，执行 delay 函数，并且携带参数 1000
            yield call(delay, 1000);
            // 1秒后，执行 reducers 中的 minus 方法
            yield put({
                type: 'minus'
            });
        }
    },
    // 绑定键盘事件
    subscriptions: {
        /* 订阅键盘事件 */
        keyboardWatcher({dispatch}) {
            key('⌘+up, ctrl+up', () => {
                dispatch({
                    type: 'todo'
                })
            });
            key('⌘+down, ctrl+down', () => {
                dispatch({
                    type: 'minus'
                })
            });
        }
    },
})

/* ------------------------------------- */

// 第十三步，增加 delay 函数 time 为 *todo 携带来的参数
function delay(time) {
    return new Promise((resolve, reject) => {
        // 延迟 1 秒后， return resolve （成功）
        // resolve：成功回调； reject：失败回调
        setTimeout(resolve, time)
    });
}

/* ------------------------------------- */

// 第四步，创建一个 Count 组件
// const Count = (props) =>{
//     return(
//         <div>Count</div>
//     )
// }

/* ------------------------------------- */

// 第十一步，完善组件,引入样式
// 对于样式部分，不做累述哈 <- 🤑 ->
import styles from './index.less';
// const Count = (props) =>{
//     return(
//         <div className={styles.normal}>
//             <h2>实现购物车“添加/减少”商品</h2>
//             <div className={styles.count}>商品数量：0</div>
//             <div className={styles.toggle}>
//                 <button className={styles.add}>+</button>
//                 <button className={styles.minus}>-</button>
//             </div>
//         </div>
//     )
// }

/* ------------------------------------- */
// 第十四步，绑定 + - 到 reducers
const Count = (props) => {
    // 获取负组件传来的 models
    props = props.props;
    return (
        <div className={ styles.normal }>
          <h2>实现购物车“添加/减少”商品</h2>
          <div className={ styles.count }>商品数量：
            { props.count.number }
          </div>
          <div className={ styles.toggle }>
            <button className={ styles.add } 
            onClick={ () => {
                props.dispatch({
                    type: 'count/todo'
                })
            } }>+</button>
            <button className={ styles.minus } 
            onClick={ () => {
                props.dispatch({
                    type: 'count/minus'
                })
            } }>-</button>
          </div>
        </div>
    )
}


/* ------------------------------------- */

// 第五步，在当前页中引入组件
function App(props) {
    return (
        <div>
          { /* models 传给组件  */ }
          <Count props={ props } />
        </div>
    )
}

/* ------------------------------------- */

// 第六步，将数据吐出给App页面
function mapStateToProps(state) {
    return {
        ...state
    }
}

/* ------------------------------------- */

// 第七步，将模型数据和当前页面关联
const Page = connect(mapStateToProps)(App)

/* ------------------------------------- */


// 第八步，定义路由
const RouterConfig = ({history, app}) => {
    return (
        <Router history={ history }>
          <Switch>
            <Route exact path="/" component={ Page } />
          </Switch>
        </Router>
    )
}

/* ------------------------------------- */

// 第九步，将路由暴露给app
app.router(RouterConfig)

/* ------------------------------------- */


// 第十步，将代码塞给入口id为root的div中
app.start('#root')



