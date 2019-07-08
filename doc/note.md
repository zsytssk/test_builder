## 2019-06-26 09:58:22

- @todo 更新代码...

* @todo TestBuilder:> mockFunc 记录函数调用的次数...

* @todo 改版所有的 test;

* @todo 所有 test 中的 console.log 添加 testBuilder
  - 统一 test

- @todo test_enable test_disable
  - 接下来就可以直接放到项目中了...

* @ques 怎么 testBuilder 打印 scope 在 test 运行之后才执行...

  - window.test = testBuilder.mapTest

- @todo testBuilder 项目 同步 legend syncBack

- 胡建新莅临指导

## 2019-06-24 10:11:36

- @todo test 放到项目中...

  - 可以做成 npm 包
  - 怎么在 console 中

- @ques 定位 test, 现在 test 定位十分的麻烦

  - test.xx.xx 这种方式...
  - 或者有一种方式可以将所有的 test 组织起来
  - testBuilder.allTest();

- @ques webpack source_map stack not right

## 2019-06-19 09:41:15

- @ques 父类 close(is_on:false) 子类 open(is_on:false) 怎么处理...

  - 每一个 test 其实都是独立的, testScope 只是为了组织代码而已
    - 虽然其实可以做层级的, 有必要吗

- @ques 每一个 test 是否要做成异步的 还是同步的处理

  - 可以在 testBuilder 上设置

- @todo testScope 的组织了

- Test 默认执行 describe 默认不执行

## 2019-06-15 18:09:11

- @ques test 里面的运行之后如何组织...
- 多层 describe it
- it 中的结果 如何获取...
- @ques 如果放在项目中如何组织

  - 如何方便的调用 Test

- @ques 如果直接运行 scope 是否他的子集也要运行...

  - 如何给子集添加子集

- 能不能在浏览器中运行

## 2019-06-18 09:58:18

- @ques 如果 test 父级关闭, 子集打开如何处理

  - 父级打开但是所有的子集都关闭

- 默认运行 test, describe 不运行...

- 提交代码...

- @test -> 先解析 在运行

## 2019-06-13 10:43:06

- 怎么 log trace
- 要不要统计整个的 log 信息
- 统计所有的结果 正确 + 错误的个数

- 异步 log 如何结束

  - done...

- 不同的 test 一起运行时, logGroup

  - done...

- @ques 我的需求是什么??
  - 必须要在应用中才能不断的 变清晰...

## 2019-06-12 09:42:14

- @ques 我怎么知道运行失败还是成功了...

  - 怎么获取 expect

- @ques 我怎么知道运行结束了

  - done

- @ques 在什么时候运行这些 testEntity

  - 在获取 TestEntity 数据之后马上执行

- @ques 如何让 describe 中的定义的变量赋值给一个参数..

  - 除了传递参数的方法...
  - 赋值给全局变量, 这样好吗...
  - 有没有更好的方法

- @todo testCore

  - afterAll
  - beforeAll
  - ...
  - 先将所有的对象全部保存, 然后再去运行
  - 保存在什么对象上面
  - 只要放在数组中 就可以了...
    - 无需层级关系, 因为 test 不存在依赖关系

## 2019-06-10 19:48:07

- @ques test 里面的运行之后如何组织...
- 多层 describe it
- it 中的结果 如何获取...

- @ques findTest 要不要支持 fuzzyFind

- @ques test 到底在什么时候运行...

- @ques 怎么用 js 运行文件...

  - `ts-node file`

- @ques 能不能用 Test 运行自己的 测试 Test

  - 完成自举

- testBuilder runTest 将原来 is_on=false,设置为 true 在去运行

  - 这要不要上上层的 Test 也运行呢...

## 2019-06-09 20:03:36

- @ques 我以前写的 test 能不能借用...

- @ques 如果要支持 node, 我需要做什么...

- @ques async fun ...

- @ques chai 的结果如何处理

- runner.result('') 异步函数的结果..

- 我现在的 test 功能比较好, 到底缺少哪些功能

  - 默认开启关闭, url 通过 scope 找到 test
  - scope 配置
  - ...
  - 必须方便的组织
  - `export default new Test(name, fun, config)`
  - `add(1, 2, 3)`

- @ques 能不能支持现在所有的 test 方法, 直接包裹就可以了

## test builder

- 结果失败报错...
- assert 这些最好是用 node 模块
  - 最好每一个文件都是独立 没有依赖的

### 设计

这只是一个 test 的运行器, 至于 test 的具体功能 这里不实现 eg: mock assert ..

支持 node + browser
支持 it

describe + it + expect + toBe + notToBe + equal asset

先按照自己的需求完成自己的结果..

mock
