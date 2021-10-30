/*
	该文件专门用于暴露一个store对象，整个应用只有一个store对象
*/

// 引入creatStore 专门用于创建redux最核心的store对象
import {createStore} from "redux";
// 引入applyMiddleware 作为中间件来应用thunk
import {applyMiddleware} from "redux";
//引入为Count组件服务的reducer
import countReducer from'./count_reducer'
//引入redeux-thunk，用于支持异步action
import thunk from "redux-thunk";

//暴露store
// export default createStore(countReducer);

//如果要用异步action，必须采用
export default createStore(countReducer,applyMiddleware(thunk));