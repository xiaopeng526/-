/*router.js 页面里的代码
HashRouter:有#号
BrowserRouter:没有#号
Switch:只要匹配到一个地址不往下匹配，相当于for循环里面的break
Link:跳转页面，相当于vue里面的router-link
exact :完全匹配路由
Redirect:路由重定向
*/
/*eslint-disable*/
import React from 'react'
import  {BrowserRouter as Router,Route,Switch,Redirect}  from 'react-router-dom';
import {AuthRoute} from './routes/private';
import asyncComponent from './components/async/AsyncComponent';
const MainPage=asyncComponent(()=>import("./pages/home/main/index"))
const GoodsPage=asyncComponent(()=>import("./pages/home/goods/index"))

export default class RouterComponent extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Router>
                    <React.Fragment>
                        <Switch>
                            <Route path={base.config.path+"home"} component={MainPage}></Route>
                            <Route path={base.config.path+"goods"} component={GoodsPage}></Route>
                            <Redirect to={base.config.path+"home"}></Redirect>
                        </Switch>
                    </React.Fragment>
                </Router>
            </React.Fragment>
        )
    }
}
