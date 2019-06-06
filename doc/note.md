-   @ques 我以前写的 test 能不能借用...

-   @ques 如果要支持 node, 我需要做什么...

-   @ques async fun ...

-   @ques chai 的结果如何处理

-   runner.result('') 异步函数的结果..

-   我现在的 test 功能比较好, 到底缺少哪些功能

    -   默认开启关闭, url 通过 scope 找到 test
    -   scope 配置
    -   ...
    -   必须方便的组织
    -   `export default new Test(name, fun, config)`
    -   `add(1, 2, 3)`

-   @ques 能不能支持现在所有的 test 方法, 直接包裹就可以了

## test builder

-   结果失败报错...
-   assert 这些最好是用 node 模块
    -   最好每一个文件都是独立 没有依赖的

### 设计

这只是一个 test 的运行器, 至于 test 的具体功能 这里不实现 eg: mock assert ..

支持 node + browser
支持 it

describe + it + expect + toBe + notToBe + equal asset

先按照自己的需求完成自己的结果..

mock
