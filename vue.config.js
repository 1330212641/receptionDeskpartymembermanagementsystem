const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

/* const CompressionPlugin = require("compression-webpack-plugin");
proxyObj['/ws'] = {
    ws: false,
    target: "ws://localhost:8081"
}; */


let proxyObj = {};
proxyObj['/'] = {//拦截http请求
    ws: false,
    target: 'http://localhost:8081',//转发到http://localhost:8081
    changeOrigin: true,//允许跨域
    pathRewrite: {
        '^/partymembermanagementsystem': ''//重写路径
    }
}
module.exports = {
    devServer: {
        host: 'localhost',
        port: 8080,
        proxy: proxyObj
    },
} 


/* ,
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            return {
                plugins: [
                    new CompressionPlugin({
                        test: /\.js$|\.html$|\.css/,
                        threshold: 1024,
                        deleteOriginalAssets: false
                    })
                ]
            }
        }
    } */
