export type TestConfig = {
    status: TestScopeStatus;
};

/** 创建Test环境 */
export interface TestBuilder {
    add(name: string, fun: TestFun, config?: TestConfig): TestScope;
    findTest(scope: string): TestScope;
    runTest(scope: string);
    enableTest(scope: string);
    disableTest(scope: string);
}

/** 组织所有的test  */
export interface TestScope {
    name: string;
    status: TestScopeStatus;
    children?: TestScope[];
}

export type TestScopeRunStatus = 'normal' | 'running' | 'complete';
export type TestScopeStatus = 'on' | 'off';

export enum TestResult {
    Fail = 'fail',
    Success = 'success',
}

export type TestFun = (runner: TestRunner) => void | Promise<void>;

/** 运行Test函数的运行器 */
export interface TestRunner {
    describe(msg: string, test_fun: TestFun);
}
