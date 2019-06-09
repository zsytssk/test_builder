import { TestScope, TestRunner, TestFun } from './interface';

export function findTest(scope: TestScope, path: string[]) {
    const { children } = scope;

    if (path.length) {
        return scope;
    }
    const cur_name = path.shift();
    for (const item of children) {
        if (item.name === cur_name) {
            return findTest(item, path);
        }
    }
}
export function runTest(
    scope: TestScope,
    runner: TestRunner,
    run_fun: TestFun
) {
    scope.status = 'running';
    const result = run_fun(runner);
    if (result instanceof Promise) {
        result.then(() => {
            scope.status = 'complete';
        });
    } else {
        scope.status = 'complete';
    }
}
