import {
    TestConfig,
    TestScopeFun,
    TestRunner,
    TestScope,
    TestScopeStatus,
} from './interface';
import { runTest } from './utils';

export type ScopeConfig = {
    enable: boolean;
};
export class TestScopeCtor implements TestScope {
    public name: string;
    public status: TestScopeStatus = 'normal';
    public children: TestScope[] = [];
    private raw_fun: TestScopeFun;
    public config: TestConfig;
    constructor(name: string, fun?: TestScopeFun, config?: TestConfig) {
        this.name = name;
        this.raw_fun = fun;

        this.config = config;
    }
    public init(config: TestConfig) {
        const { children } = this;
        this.config = {
            ...config,
            ...this.config,
        };
        for (const item of children) {
            item.init(config);
        }
    }
    public add(...children: TestScope[]) {
        this.children.push(...children);
    }
    public run(runner: TestRunner) {
        const { raw_fun, children, config } = this;
        this.status = 'running';
        if (raw_fun) {
            runTest(this, runner, raw_fun);
        }
        for (const item of children) {
            if (config.is_on) {
                item.run(runner);
            }
        }
    }
}
