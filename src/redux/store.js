/*
	该文件专门用于暴露一个store对象，整个应用只有一个store对象
*/

// 引入creatStore 专门用于创建redux最核心的store对象
import {createStore} from "redux";
// 引入applyMiddleware 作为中间件来应用thunk
import {applyMiddleware} from "redux";
//引入combineReducers 汇总给所有的reducer
import {combineReducers} from "redux";
//引入为Count组件服务的reducer
import countReducer from './reducers/count'
//引入为Person组件服务的reducer
import personReducer from "./reducers/person";
//引入redeux-thunk，用于支持异步action
import thunk from "redux-thunk";

const allReducer=combineReducers({
    counts:countReducer,
    persons:personReducer
})

//暴露store
export default createStore(allReducer,applyMiddleware(thunk));