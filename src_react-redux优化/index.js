import React from "react";
import App from "./App";
import ReactDOM from 'react-dom';
import store from "./redux/store";
import {Provider} from "react-redux";

//不需要再进行监测 connect自动进行监测
ReactDOM.render(
    //不需要在App.js中给容器组件传递store 在Provider一次传入
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)

