import { TestBuilder, TestConfig, TestRunner, TestScope } from './interface';
import { TestRunnerCtor } from './testRunner';
import { findTest } from './utils';

export class TestBuilderCtor implements TestBuilder {
    private config: TestConfig;
    private runner: TestRunner;
    private top_scope: TestScope;
    constructor(top_scope: TestScope, default_config: TestConfig) {
        this.top_scope = top_scope;
        this.runner = new TestRunnerCtor();
        if (default_config) {
            this.config = default_config;
        }
        this.init();
    }
    private init() {
        const { config, top_scope } = this;
        top_scope.init(config);
    }
    public run() {
        const { top_scope, runner } = this;
        top_scope.run(runner);
    }
    public findTest(scope: string): TestScope {
        const { top_scope } = this;
        const path_arr = scope.split('.');
        return findTest(top_scope, path_arr);
    }
    public runTest(scope: string) {
        const test = this.findTest(scope);
        if (!test) {
        }
    }
    public enableTest(scope: string) {}
    public disableTest(scope: string) {}
}
