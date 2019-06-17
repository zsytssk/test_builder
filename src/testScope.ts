import {
    TestConfig,
    TestScopeFun,
    TestUtil,
    TestScope,
    TestScopeStatus,
    TestEntity,
} from './interface';
import { openTest } from './state';

export type ScopeConfig = {
    enable: boolean;
};
export class TestScopeCtor implements TestScope {
    public name: string;
    public status: TestScopeStatus = 'normal';
    public children: TestScope[] = [];
    private raw_fun: TestScopeFun;
    public config: TestConfig;
    private entity_list: TestEntity[] = [];
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
    public run() {
        const { raw_fun, children, config } = this;
        this.status = 'running';
        if (raw_fun) {
            this.entity_list = openTest(raw_fun);
        }
        for (const item of children) {
            if (config.is_on) {
                item.run();
            }
        }
    }
}
