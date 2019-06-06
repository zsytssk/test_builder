import { TestBuilder, TestFun, TestResult, TestConfig } from './interface';
import { TestScopeCtor } from './testScope';

export class TestBuilderCtor implements TestBuilder {
    private config: TestConfig;
    private top_test: TestScopeCtor;
    constructor(config?: TestConfig) {
        if (config) {
            this.config = config;
        }
    }
    public add(name: string, fun: TestFun, config?: TestConfig): TestScopeCtor {
        config = config || ({} as TestConfig);
        if (config) {
            config = {
                ...this.config,
                ...config,
            };
        }
        const top_test = new TestScopeCtor(name, fun, config);
        this.top_test = top_test;

        return top_test;
    }
    public findTest(scope: string): TestScopeCtor {
        const { top_test } = this;
        const scope_arr = scope.split('.');
        if (scope) {
            return;
        }
    }
    public runTest(scope: string) {}
    public enableTest(scope: string) {}
    public disableTest(scope: string) {}
}
