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
