/*eslint-disable*/
import React from 'react';
import {connect} from 'react-redux';
import actions from '../../../store/actions/index';
import Css from '../../../assets/css/home/index/index.css';
import {setScrollTop} from '../../../assets/js/utils';
import '../../../components/swiper/swiper.css';
import Swiper from '../../../components/swiper/swiper.js';
import {request} from '../../../assets/js/libs/request.js';

class IndexPage extends React.Component {
    constructor(){
        super();
        this.state={
            sliders:[],
            slides:[]
        };
        this.count=1;
        this.isScrollTop=true;
    }
    componentDidMount() {
        //console.log(base.config.baseApi)
        setScrollTop(base.pages.index.scrollTop);
        window.addEventListener("scroll", this.eventScroll.bind(this))

        // request(base.config.baseApi + "/home/index/slide?token="+base.config.token).then(res=>{
        //     //console.log(res);
        //     if(res.code===200){
        //         this.setState({sliders:res.data},()=>{
        //             //console.log(this.state.sliders);
        //             new Swiper(this.refs['swiper-container'], {
        //                 autoplay: true,//可选选项，自动滑动
        //             })
        //         });
        //
        //     }
        // })
        //使用redux获取数据
        this.props.dispatch((dispatch,getState)=>{
            dispatch(actions.home.swiper({
                callback:(data)=>{
                    this.setState({sliders:data});
                    new Swiper(this.refs['swiper-container'], {
                        autoplay: true,//可选选项，自动滑动
                    })
                }
            }))
        });

    }

    componentWillUnmount(){
        this.isScrollTop=false;
        window.removeEventListener("scroll",this.eventScroll.bind(this));
        //防止内存泄漏
        this.setState=(state,callback)=>{
            return;
        }
    }
    eventScroll(){
        if(this.isScrollTop) {
            base.pages.index.scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        }
    }
    //增加数量
    increase(){
        //1、选购商品
        //this.props.dispatch({type:"INC",data:{count:++this.count}});
        //this.props.dispatch(actions.counter.inc({count:++this.count}))
        this.props.dispatch((dispatch,getState)=>{
            console.log(getState());
            dispatch(actions.counter.inc({count:++this.count}));
        })
    }
    //减少数量
    decrease(){
        //1、选购商品
        //this.props.dispatch({type:"DEC",data:{count:this.count>1?--this.count:1}});
        //this.props.dispatch(actions.counter.dec({count:this.count>1?--this.count:1}))
        this.props.dispatch((dispatch,getState)=>{
            dispatch(actions.counter.dec({count:this.count>1?--this.count:1}));
        })
    }
    goPage(url){
        this.props.history.push(url)
    }
    //获取redux的异步数据
    getSildesData(){
        this.props.state.home.slides.then((data)=>{
            //console.log(JSON.stringify(data));
            this.setState({slides:data});
        })
    }
    boxMove(e){
        console.log(e.touches[0].pageX,e.touches[0].pageY);
    }
    render() {
        return (
            <div className={Css['page']}>
                <div ref="swiper-container" className={"swiper-container "+Css['banner']}>
                    <div className="swiper-wrapper">
                        {
                            this.state.sliders.map((item,index)=>{
                                return (
                                    <div key={index} className="swiper-slide"><img src={item.image} alt=""/></div>
                                )
                            })
                        }
                    </div>
                </div>
                <div>计数器：<button type="button" onClick={this.decrease.bind(this)}>-</button>{this.props.state.counter.count}<button type="button" onClick={this.increase.bind(this)}>+</button></div>
                <div className={Css['box']} onTouchMove={(e)=>{this.boxMove(e)}} onClick={this.goPage.bind(this,base.config.path+'goods')}>产品页面</div>
                <button type="button" onClick={this.getSildesData.bind(this)}>获取redux里面的异步数据</button>
                <br />渲染redux里面的数据:
                <ul>
                    {
                        this.state.slides.map((item,index)=>{
                            return (
                                <li key={index}>{item.title}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default connect((state)=>{
    //console.log(state);
    return {
        state
    }
})(IndexPage)
