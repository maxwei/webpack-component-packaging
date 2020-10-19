const TerserPlugin =require('terser-webpack-plugin');

module.exports={
    entry:{
        'large-number':'./src/index.js',
        'large-number.min':'./src/index.js',
    },
    output:{
        filename:'[name].js',
        //打包出库的名字
        library:'largeNumber',
        //引入方式
        //我们使用umd方式，这样便可以用任何一种引入方式，即支持cmd，amd，及全局
        libraryTarget:'umd',
        //如果不设置libaryExport为default的话，引用时需要使用largeNumber.default来进行引用
        libraryExport:'default'
    },
    //全部不压缩
    mode:'none',
    //匹配压缩
    optimization:{
        minimize:true,
        minimizer:[
            //TeserPlugin相比于unglyfiy插件在遇到源代码中有es6语法时不会报错
            //mode为production时默认使用的是TeserPlugin插件
            new TerserPlugin({
                include:/\.min\.js/,
            })
        ]
    }
}

