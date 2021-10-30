/*
	该文件专门用于暴露一个store对象，整个应用只有一个store对象
*/

// 引入creatStore 专门用于创建redux最核心的store对象
import {createStore} from "redux";
// 引入applyMiddleware 作为中间件来应用thunk
import {applyMiddleware} from "redux";
//引入redeux-thunk，用于支持异步action
import thunk from "redux-thunk";
//引入redux-devtools-extension
import {composeWithDevTools} from 'redux-devtools-extension'
//引入汇总之后的reducer
import reducer from './reducers'

//暴露store
export default createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))