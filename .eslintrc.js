module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        //an object indicating which additional language features you’d like to use
        "ecmaFeatures": {
            //是否支持实验性的新语言特性
            "experimentalObjectRestSpread": true,
            //是否支持jsx语法
            "jsx": true
        },
        //set to "script" (default) or "module" if your code is in ECMAScript modules
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            "error",
            4
        ],
        //换行标准
        "linebreak-style": [0],
        //单双引号
        "quotes": [
            "error",
            "single"
        ],
        //分号
        "semi": [
            "error",
            "always"
        ],
        "no-console": 0
    }
};