export type TestConfig = {
    is_on: boolean;
};

/** 创建Test环境 */
export interface TestBuilder {
    findTest(scope: string): TestScope;
    runTest(scope: string);
    enableTest(scope: string);
    disableTest(scope: string);
}

/** 组织所有的test  */
export interface TestScope {
    name: string;
    status: TestScopeStatus;
    config: TestConfig;
    children?: TestScope[];
    init(config: TestConfig): void;
    run(): void;
}

export type TestScopeStatus = 'normal' | 'running' | 'complete';

export enum TestResult {
    Fail = 'fail',
    Success = 'success',
}

export type TestScopeFun = (runner: TestUtil) => void | Promise<void>;

/** 运行Test函数的运行器 */
export interface TestUtil {
    describe(msg: string, test_fun: Function);
    it(msg: string, test_fun: Function);
    afterAll(fun: TestFun);
    beforeAll(fun: TestFun);
    afterEach(fun: TestFun);
    beforeEach(fun: TestFun);
}

export type TestFun = () => void | Promise<void>;
export type TestItem = {
    msg: string;
    fun: TestFun;
};
export interface TestEntity {
    msg: string;
    children: TestEntity[];
    afterAll: TestFun[];
    beforeAll: TestFun[];
    afterEach: TestFun[];
    beforeEach: TestFun[];
    itemList: TestItem[];
}
