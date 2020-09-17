/*eslint-disable*/
import React from 'react'
import {Switch,Route,Redirect} from 'react-router-dom';
import Css from '../../../assets/css/home/main/index.css';
import asyncComponent from '../../../components/async/AsyncComponent.js';
const IndexPage=asyncComponent(()=>import("../index"));
const CartPage=asyncComponent(()=>import("../cart"));
const MyPage=asyncComponent(()=>import("../../user/my"));
export default class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            homeActive:true,
            cartActive:false,
            myActive:false
        }
    }
    replacePage(url){
        this.props.history.replace(url);
    }
    componentDidMount(){
        this.changeButtomNavStyle(this.props);
    }
    componentWillReceiveProps(props){
        this.changeButtomNavStyle(props);
    }
    changeButtomNavStyle(props){
        switch(props.location.pathname){
            case base.config.path+"home/index":
                this.setState({homeActive:true,cartActive:false,myActive:false});
                break;
            case base.config.path+"home/cart":
                this.setState({homeActive:false,cartActive:true,myActive:false});
                break;
            case base.config.path+"home/my":
                this.setState({homeActive:false,cartActive:false,myActive:true});
                break;
            default:
                this.setState({homeActive:true,cartActive:false,myActive:false});
                break;
        }
    }
    render() {
        return (
            <div>
                <React.Fragment>
                    <Switch>
                        <Route path={base.config.path+"home/index"} component={IndexPage}></Route>
                        <Route path={base.config.path+"home/cart"} component={CartPage}></Route>
                        <Route path={base.config.path+"home/my"} component={MyPage}></Route>
                        <Redirect to={base.config.path+"home/index"}></Redirect>
                    </Switch>
                </React.Fragment>
                <div className={Css["bottom-nav"]}>
                    <ul className={this.state.homeActive?Css["active"]:""} onClick={this.replacePage.bind(this,base.config.path+'home/index')}>
                        <li className={Css["home"]}></li>
                        <li>首页</li>
                    </ul>
                    <ul className={this.state.cartActive?Css["active"]:""} onClick={this.replacePage.bind(this,base.config.path+'home/cart')}>
                        <li className={Css["cart"]}></li>
                        <li>购物车</li>
                        <li className={Css['spot']+" hide"}></li>
                    </ul>
                    <ul className={this.state.myActive?Css["active"]:""} onClick={this.replacePage.bind(this,base.config.path+'home/my')}>
                        <li className={Css["my"]}></li>
                        <li>我的</li>
                    </ul>
                </div>
            </div>
        )
    }
}
