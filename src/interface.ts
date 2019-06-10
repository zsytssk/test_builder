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
    run(runner: TestRunner): void;
}

export type TestScopeStatus = 'normal' | 'running' | 'complete';

export enum TestResult {
    Fail = 'fail',
    Success = 'success',
}

export type TestFun = (runner: TestRunner) => void | Promise<void>;

/** 运行Test函数的运行器 */
export interface TestRunner {
    describe(msg: string, test_fun: Function);
    it(msg: string, test_fun: Function);
}
