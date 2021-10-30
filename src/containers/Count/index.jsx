import React, { Component } from 'react'
//引入connect用于连接UI组件和redux
import {connect} from "react-redux";
//引入action
import {
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction
} from '../../redux/actions/count'

//定义UI组件
class Count extends Component {
    //加法
    increment = ()=>{
        const {value} = this.selectNumber
        this.props.jia(value*1)
    }
    //减法
    decrement = ()=>{
        const {value} = this.selectNumber
        this.props.jian(value*1)
    }
    //奇数再加
    incrementIfOdd = ()=>{
        const {value} = this.selectNumber
        if(this.props.count % 2 !== 0){
            this.props.jia(value*1)
        }
    }
    //异步加
    incrementAsync = ()=>{
        const {value} = this.selectNumber
        this.props.jiaAsync(value*1,500)
    }

    render() {
        return (
            <div>
                <h2>我是Count组件,下方组件总人数为:{this.props.personSum}</h2>
                <h1>当前求和为：{this.props.countSum}</h1>
                <select ref={c => this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
                <button onClick={this.incrementAsync}>异步加</button>&nbsp;
            </div>
        )
    }
}

//使用connect()()创建并暴露一个Count的容器组件
export default connect(
    //映射状态
    state => ({
        countSum:state.counts,
        personSum:state.persons.length
    }),

    //映射操作状态的方法
    //mapDispatchToProps的简写   react-redux内部的API自动进行了action的dispatch分发
    {
        jia:createIncrementAction, //这个对象的属性createIncrementAction也是一个函数 同样有参数number
        jian:createDecrementAction,
        jiaAsync:createIncrementAsyncAction,
    }
)(Count)