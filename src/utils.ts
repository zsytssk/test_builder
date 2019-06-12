import { TestScope, TestRunner, TestScopeFun, TestFun } from './interface';
import { resolve } from 'url';

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
    run_fun: TestScopeFun,
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

export function asyncRunTestFun(fun: TestFun) {
    return new Promise((resolve, reject) => {
        try {
            const result = fun();
            if (result instanceof Promise) {
                result.then(() => {
                    resolve();
                });
            } else {
                resolve();
            }
        } catch (err) {
            reject(err);
        }
    });
}

type asyncRunTestFunType = 'schedule' | 'concurrent';
export async function asyncRunTestFunArr(
    fun: TestFun[],
    type?: asyncRunTestFunType,
) {
    if (type === 'concurrent') {
        const result: Promise<any>[] = [];
        for (const item of fun) {
            result.push(asyncRunTestFun(item));
        }
        await Promise.all(result);
        return;
    }

    for (const item of fun) {
        await asyncRunTestFun(item);
    }
}
export function logErr(msg: string) {
    throw new Error(msg);
}
export function log(...msg: (string | number)[]) {
    const time = Date.now();
    console.log(time, ...msg);
}
