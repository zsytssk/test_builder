import {
    TestEntity,
    TestFun,
    TestScopeFun,
    TestUtil,
    TestItem,
} from './interface';
import { TestEntityCtor } from './testEntity';
import { asyncRunTestFun, asyncRunTestFunArr } from './utils';

export let entity_list: TestEntity[] = [];
export let test_util: TestUtil;
export let cur_test_entity: TestEntity;

export function initState() {
    test_util = {
        describe,
        it,
        afterAll,
        beforeAll,
        afterEach,
        beforeEach,
    };
}

/** 打开Test */
export function openTest(run_fun: TestScopeFun) {
    entity_list = [];
    run_fun(test_util);
    return entity_list;
}

function describe(msg: string, fun: TestFun) {
    const entity = new TestEntityCtor(msg, fun);
    entity_list.push(entity);
}
function it(msg: string, fun: TestFun) {
    cur_test_entity.itemList.push({
        msg,
        fun,
    });
}
function afterAll(fun: TestFun) {
    cur_test_entity.afterAll.push(fun);
}
function beforeAll(fun: TestFun) {
    cur_test_entity.beforeAll.push(fun);
}
function afterEach(fun: TestFun) {
    cur_test_entity.afterEach.push(fun);
}
function beforeEach(fun: TestFun) {
    cur_test_entity.beforeEach.push(fun);
}

export async function parseTestEntity(entity: TestEntity) {
    const { fun } = entity;
    cur_test_entity = entity;
    fun();
    cur_test_entity = undefined;
}
export async function runTestEntity(entity: TestEntity) {
    const { afterAll, afterEach, beforeAll, beforeEach, itemList } = entity;
    console.group(entity.msg);
    await asyncRunTestFunArr(beforeAll, 'concurrent');
    for (const item of itemList) {
        await asyncRunTestFunArr(beforeEach, 'concurrent');
        await asyncRunTestFun(item.fun)
            .then(() => {
                console.log('success:>', item.msg, 'success');
            })
            .catch(err => {
                console.error('fail:>', item.msg, 'fail');
                console.log(err);
            });
        await asyncRunTestFunArr(afterEach, 'concurrent');
    }
    await asyncRunTestFunArr(afterAll, 'concurrent');
    console.groupEnd();
}
