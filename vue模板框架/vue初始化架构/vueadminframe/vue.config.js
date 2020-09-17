module.exports={
    publicPath:'/', //配置根目录
    outputDir:'dist', //构建输出目录
    assetsDir:"assets",//静态资源目录
    lintOnSave:false, //false不开启，有效值：true || false
    devServer:{
        open:false, //是否启动打开浏览器
        host:"0.0.0.0",//主机，0.0.0.0支持局域网地址，可以用真机测试
        port:"8080",
        //配置跨域代理
        proxy:{
            "/proxy":{
                target:"http://vueshop.glbuys.com/api",
                changeOrigin:true,//支持跨域
                pathRewrite:{
                    '^/proxy':""
                }
            }
        }

    }
};
