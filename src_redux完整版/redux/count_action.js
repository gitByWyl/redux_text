/*
	该文件专门为Count组件生成action对象
*/
import {INCREMENT,DECREMENT} from './constant'

export const createIncrementAction=data=>({type:INCREMENT,data})
export const createDecrementAction=data=>({type:DECREMENT,data})

//异步加
export const createIncrementAsyncAction=(data,time)=>{
    return(dispath)=>{
        setTimeout(()=>{
            dispath(createIncrementAction(data))
        },time)
    }
}
