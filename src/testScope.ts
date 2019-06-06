import {
    TestFun,
    TestScope,
    TestScopeStatus,
    TestConfig,
    TestScopeRunStatus,
} from './interface';

export type ScopeConfig = {
    enable: boolean;
};

export class TestScopeCtor implements TestScope {
    public name: string;
    public status: TestScopeStatus;
    public run_status: TestScopeRunStatus = 'normal';
    public children: TestScope[] = [];
    private raw_fun: TestFun;
    constructor(name: string, fun: TestFun, config?: TestConfig) {
        this.name = name;
        this.raw_fun = fun;

        if (config) {
            this.init(config);
        }
    }
    private init(config: TestConfig) {
        const { raw_fun } = this;
        const status = config.status;
        this.status = status;

        if (status === 'on') {
            this.run_status = 'running';
            const result = raw_fun();
            if (result instanceof Promise) {
                result.then(() => {
                    this.run_status = 'complete';
                });
            } else {
                this.run_status = 'complete';
            }
        }
    }
}
