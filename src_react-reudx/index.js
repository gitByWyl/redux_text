import React from "react";
import App from "./App";
import ReactDOM from 'react-dom';
import store from "./redux/store";

ReactDOM.render(<App/>,document.getElementById('root'))

//监测redux中状态的改变。如果redux状态发生改变，则重新渲染App组件
store.subscribe(()=>{
    ReactDOM.render(<App/>,document.getElementById('root'))
})

