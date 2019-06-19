- 将接口抛出来, 让人知道到底是做什么的...
- 依赖统一的 interface 而不是 他的实现
  - 这样保证架构的独立性...

## TestBuilder

- 给外面的接口, 提供运行 test 的方法...

- 所有的 test 默认不运行, 都是在其中运行..

## TestRunner

- 将 test 中的信息抽离出来放到 entity 中
