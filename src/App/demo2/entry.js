/*
 * @Author: mikey.zhaopeng 
 * @Date: 2017-10-27 11:16:37 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2017-10-27 16:11:06
 */
import dva, { connect } from 'dva';

const app = dva();

app.use({})

app.model(require('./models/count'))

app.router(require('./router'))


app.start('#root')



