
var path = require('path');
var APP_PATH = path.resolve(path.resolve(__dirname), 'app');
var webpack = require('webpack');

module.exports = {
    entry : './app/index.js',
    output : {
        filename : 'bundle.js',
        path : path.resolve(__dirname, 'dist')
    },
    module : {
        rules : [
            {
                test : /\.(jsx|js)$/,
                use : [
                    {
                        loader : 'eslint-loader',
                        options : {esnext : true}
                    }
                ],
                enforce : 'pre',
                include : APP_PATH,
                exclude : /(node_modules)/
            }
        ]
    },

    plugins : [

        new webpack.LoaderOptionsPlugin({
            test : /\.(jsx|js)$/,
            options : {
                camelcase : true,
                emitErrors : false,
                failOnHint : false,

                reporter : function(errors) {
                    console.log('00000000'+errors);
                }
            }

        })

    ]
};