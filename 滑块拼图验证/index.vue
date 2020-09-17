<template>
    <!--/*滑块拼图验证插件---main.js */
import SlideVerify from 'vue-monoplasty-slide-verify'

Vue.use(SlideVerify)-->
    <div>
        <slide-verify
                ref="slideblock"
                @again="onAgain"
                @fulfilled="onFulfilled"
                @success="onSuccess"
                @fail="onFail"
                @refresh="onRefresh"
                :accuracy="accuracy"
                :slider-text="text"
        />
        <button @click="handleClick">在父组件可以点我刷新哦</button>
    </div>

</template>

<script>
    export default {
        name: 'dragVerify',
        data(){
            return {
                msg: '',
                text: 'Slide filled right',
                // 精确度小，可允许的误差范围小；为1时，则表示滑块要与凹槽完全重叠，才能验证成功。默认值为5
                accuracy: 3,
            }
        },
        methods: {
            onSuccess(){
                this.$message({
                    message: '验证通过',
                    type: 'success'
                })
            },
            onFail(){
                this.$message({
                    message: '验证未通过',
                    type: 'error'
                })
            },
            onRefresh(){
                // console.log('点击了刷新小图标');
                // alert(1)
            },
            onFulfilled() {
                // console.log('刷新成功啦！');
            },
            onAgain() {
                // console.log('检测到非人为操作的哦！');
                // 刷新
                this.$refs.slideblock.reset();
            },
            handleClick() {
                // 父组件直接可以调用刷新方法
                this.$refs.slideblock.reset();
            },
        },
        created(){
            this.onRefresh()
        }
    }
</script>