import React,{Component} from "react";
import Count from "./containers/Count";
import store from './redux/store'

export default class App extends Component{
    render(){
        return(
            <div>
                {/*APP组件给容器组件通过props传递store*/}
                <Count store={store}/>
            </div>
        )
    }
}