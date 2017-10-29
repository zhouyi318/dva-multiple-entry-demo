import key from 'keymaster';
import * as usersService from '../services/user'

// 第十三步，增加 delay 函数 time 为 *todo 携带来的参数
function delay(time) {
    return new Promise((resolve) => {
        // 延迟 1 秒后， return resolve （成功） Promise(resolve,reject) resolve：成功回调；
        // reject：失败回调
        setTimeout(resolve, time)
    });
}

export default {
    namespace : 'count',
    // 将计数器开始值默认为 0
    state : {
        number: 0,
        string: ''
    },
    reducers : {
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
        },
        save(state,{payload:{data}}) {
            state.string = data
            return {...state}
        }

    },
    // 添加副作用
    effects : {
        *fetch({
            payload
        }, {call, put}) {
            const {data} = yield call(usersService.fetch, 1);
            yield put({
                type: 'save',
                payload: {
                    data
                }
            });
        },
        *todo(action, {call, put}) {
            // 先运行 reducers 中的 add 方法
            yield put({type: 'add'});
            // 当 add 每点击一次成功后，执行 delay 函数，并且携带参数 1000
            yield call(delay, 1000);
            // 1秒后，执行 reducers 中的 minus 方法
            yield put({type: 'minus'});
        }
    },
    // 绑定键盘事件
    subscriptions : {
        // 监听事件
        setup({dispatch, history}) {
            return history.listen(({pathname}) => {
                if (pathname === '/') {
                    dispatch({type: 'fetch'})
                }
            })
        },
        // 订阅键盘事件
        keyboardWatcher({dispatch}) {
            key('⌘+up, ctrl+up', () => {
                dispatch({type: 'todo'})
            });
            key('⌘+down, ctrl+down', () => {
                dispatch({type: 'minus'})
            });
        }
    }
}
