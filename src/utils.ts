import { TestFun, TestScope, RunTest } from './interface';

export function findTest(scope: TestScope, path: string[]): TestScope {
    const { children } = scope;
    if (!path.length) {
        return scope;
    }
    const cur_name = path.shift();
    for (const item of children) {
        if (item.name === cur_name) {
            return findTest(item, path);
        }
    }
}

type MapTestObj = {
    [key: string]: MapTestObj | RunTest;
};
export function mapTest(scope: TestScope) {
    const { children } = scope;
    const result = { run: scope.runTest.bind(scope) } as MapTestObj;
    for (const item of children) {
        const { name } = item;
        if (result[name]) {
            console.warn(
                `TestBuilder:>`,
                `${scope.name} has two children has same name:${name}`,
            );
        }

        result[name] = mapTest(item);
    }

    return result;
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
