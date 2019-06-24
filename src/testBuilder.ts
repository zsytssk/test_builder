import { TestBuilder, TestConfig, TestUtil, TestScope } from './interface';
import { findTest, mapTest } from './utils';
import { initState } from './state';
import { test } from 'map/map.spec';

export class TestBuilderCtor implements TestBuilder {
    private config: TestConfig;
    private top_scope: TestScope;
    constructor(top_scope: TestScope, default_config?: TestConfig) {
        this.top_scope = top_scope;
        initState();
        if (default_config) {
            this.config = default_config;
        }
    }
    public init() {
        const { config, top_scope } = this;
        top_scope.init(config);

        top_scope.parseTest();
    }
    public findTest(scope: string) {
        const { top_scope } = this;
        const path_arr = scope.split('.');
        return findTest(top_scope, path_arr);
    }
    public runTest(scope: string, msg?: string) {
        const test_scope = this.findTest(scope);
        if (!test_scope) {
            console.error(`TestBuilder:>`, `cant find test for ${scope}`);
            return;
        }
        test_scope.runTest(msg);
    }
    public enableTest(scope: string) {
        const test_scope = this.findTest(scope);
        test_scope.open(true);
    }
    public disableTest(scope: string) {
        const test_scope = this.findTest(scope);
        test_scope.close(true);
    }
    public get mapTest() {
        const { top_scope } = this;
        return mapTest(top_scope);
    }
}
