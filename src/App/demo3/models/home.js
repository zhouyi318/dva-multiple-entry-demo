import * as Ajax from '../services/home';

function delay(time) {
    return new Promise((resolve) => {
        setTimeout(resolve, time)
    });
}

export default {
    namespace : 'home',
    state : {
        list:[],
        // header:{}
        /*
        list:[{
            id:'1',
            renderHeader:"标题1",
            container:"这是一个****************"
        },{
            id:'2',
            renderHeader:"标题2",
            container:"这是一个****************"
        },{
            id:'3',
            renderHeader:"标题3",
            container:"这是一个****************"
        },{
            id:'4',
            renderHeader:"标题4",
            container:"这是一个****************"
        }]
        */
    },
    reducers : {
        save(state,{payload:{data:list}}) {
            return {...state,list}
        },
        setnavbar(state,{payload:header}){
            console.log(header)
            return{
                ...state,
                header
            }
        }
    },
    effects : {
        *fetch({payload}, {call, put}){
            const {data} = yield call(Ajax.fetch);
            // console.log(data)
            yield call(delay,200);
            yield put({type: 'save',payload: {data}});
        },
    },
    subscriptions : {
        setup({dispatch, history}) {
            return history.listen(({pathname}) => {
                if (pathname === '/') {
                    dispatch({type: 'fetch'})
                }
            })
        }
    }
};
