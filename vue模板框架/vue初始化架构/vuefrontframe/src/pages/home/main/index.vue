<template>
    <div>
        <router-view></router-view>
        <div class="bottom-nav">
            <ul :class="{active:homeActive}" @click="goPage('/index')">
                <li class="home"></li>
                <li>首页</li>
            </ul>
            <ul :class="{active:cartActive}" @click="goPage('/cart')">
                <li class="cart"></li>
                <li>购物车</li>
            </ul>
            <ul :class="{active:myActive}" @click="goPage('/my')">
                <li class="my"></li>
                <li>我的</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                homeActive:false,
                cartActive:false,
                myActive:false
            }
        },
        methods:{
            goPage(url){
                this.$router.replace(url);
                this.changeNavStyle(url);
            },
            changeNavStyle(url){
                switch (url) {
                    case "/index":
                            this.homeActive=true;
                            this.cartActive=false;
                            this.myActive=false;
                        break;
                    case "/cart":
                            this.homeActive=false;
                            this.cartActive=true;
                            this.myActive=false;
                        break;
                    case "/my":
                            this.homeActive=false;
                            this.cartActive=false;
                            this.myActive=true;
                        break;
                    default:
                        this.homeActive=true;
                        this.cartActive=false;
                        this.myActive=false;
                }
            }
        },
        created(){
            this.changeNavStyle(this.$route.path);
        },
        //消除keep-alive数据缓存
        activated(){
            document.title=this.$route.meta.title
            this.changeNavStyle(this.$route.path);
        }
    }
</script>

<style scoped>
@import "../../../assets/css/home/main/index.css";
</style>
