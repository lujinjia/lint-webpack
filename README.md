
### jsLint配置详解

        /* jslint配置 */

        /**
         * jslint
         * brower : true, continue : true,
         * devel : true, indent : 2, maxerr : 50,
         * newcap : true, nomen : true, plusplus : true,
         * regexp : true, sloppy : true, vars : true,
         * white : true
         */

        /*global

        */

        /*property

        */

        /**
         * brower : true, 允许浏览器相关的关键字，如
             （Audio, clearInterval, clearTimeout, document, event,
             FileReader, FormData, history, Image, location, name,
             navigator, Option, screen, sessionStorage, setInterval,
             setTimeout, Storage, XMLHttpRequest）
         * continue : true, 允许continue语句
         * devel : true, 允许与开发相关的关键字，如
            （alert, confirm, console, prompt）
         * indent : 2, 缩进为2个空格
         * maxerr : 50, 超过50个错误后，终止jsLInt
         * newcap : true, 允许构造函数首字母为非大写
         * nomen : true, 允许在两边（前面或者后面）悬挂下划线符号_
         * plusplus : true, 允许出现++和--
         * regexp : true, 允许很有用但是有潜在危险的正则表达式结构
         * sloppy : true, 不需要use strict编译指令
         * vars : false, 每个函数作用域内，不允许有多个var语句
         * white : true, 禁用jsLint格式化检查
         * es6 : true, 允许使用es6的部分语法
             （ArrayBuffer, DataView, Float32Array, Float64Array, Int8Array, Int16Array,
             Int32Array, Intl, Map, Promise, Proxy, Reflect, Set, Symbol, System, Uint8Array,
             Uint8ClampedArray, Uint16Array, Uint32Array, WeakMap, WeakSet）
         * node : true, 在node执行环境下增加一些全局变量
             （Buffer, clearImmediate, clearInterval, clearTimeout, console, exports,
              global, module, process, querystring, require, setImmediate,
              setInterval, setTimeout, __dirname, __filename）
         * this : true, 允许使用this关键字
         */

##### 指令
jsLint有三种指令：

1. /\*global\*/
指定一些全局的变量，一般为函数
2. /\*jslint\*/
一些具体的检验设置
3. /\*property\*/
声明文件中所用到的属性标志符


##### 检验报告
检验之后会生成一个函数报告，
* 起始行号。
* 名称。如果是匿名函数，JSLint 会“猜”出这个名称。
* 参数。
* Closure：被声明的变量和参数之中，被子函数使用的部分。
* Variables：被声明并只在该函数中使用的变量。
* Exceptions：被 try 语句声明的变量。
* Unused：被声明但从未在该函数中使用的变量。这可能意味着一个错误。
* Outer：被其它函数声明且在该函数中使用的变量。
* Global：在该函数中使用的全局变量。把这个用量降到最少。
* Label：该函数中使用的语句标记。

JSLint 在 JavaScript 源代码、HTML 源代码、CSS 源代码或 JSON 文本中都可以运行。

#### 在项目中配置jsLint
现阶段，一些主流的IDE或者编辑器都已经支持jsLint了，在网上有很多教程。这里主要是
讲一下如何在Node.js的平台下进行配置。

1. 首先安装好npm以及Node.js环境，执行 `npm-install --save jslint`
2. 安装成功之后，可以直接在命令行执行 `jslint *文件路径*.js`
3. 编码时使用
    * 引入对应的库

         `var lintStream = require('jslint').LintStream;`
    * 进行配置

        `var option = {
            "edition" : "latest",
            "length" : 100
        };`

        `lint = new LintStream(options);`

    * 设置要检验的文件名和内容

        `var fileName, fileContents;`

        `lint.write({ file : fileName, body : fileContent });`

    * 获取数据并且检验

            lint.on('data',function(chunk, encoding, callback) {

                assert.deepEqual(chunk.file, fileName);
                callback();

            });


### ESLint配置详解


由于jsLint更加严格，而jsHint则因为无法支持自定义规则，也无法根据错误定位到对应的规则，所以
采用业内比较主流的ESLint工具来做代码检测：

ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code. In many ways, it is similar to JSLint and JSHint with a few exceptions:

* ESLint uses Espree for JavaScript parsing.
* ESLint uses an AST to evaluate patterns in code.
* ESLint is completely pluggable, every single rule is a plugin and you can add more at runtime.

前面是没有使用打包工具的，下面是集成到webpack的例子：

1. 首先安装webpack， npm install webpack eslint-loader--save -dev

2. 在项目根目录上新建webpack配置文件,webpack.config.js, 在配置文件中配置eslint-loader

3. 全局安装eslint并且配置相关的选项
` npm install eslint -g  `
` eslint --init `


#### 参考资料
[github-JSLint](https://github.com/douglascrockford/JSLint)

[jslint在线检测](http://www.jslint.com/)

[jsLint中文文档-非官方](http://jiongks.name/blog/jslint-docs-zh-cn/)

[使用 JSLint 保证 JavaScript 代码质量-IBM](https://www.ibm.com/developerworks/cn/web/1105_linlin_jslint/)

[node-jslint-Github](https://github.com/reid/node-jslint)

[webpack官网](http://webpack.github.io/)

[webpack入门-简书](http://www.jianshu.com/p/42e11515c10f)

[webpack2打包实战-segmentfault](https://segmentfault.com/a/1190000007914129)

[ESLint-GitHub](https://github.com/eslint/eslint)

[ESLint-官网](http://eslint.org/)

[Node.js安装及环境配置之Windows篇](http://www.cnblogs.com/yzadd/p/6547668.html)

[fixing-npm-permissions](https://docs.npmjs.com/getting-started/fixing-npm-permissions)

[ESLint配置详解](http://eslint.org/docs/user-guide/configuring)
