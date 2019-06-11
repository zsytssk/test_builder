import { TestRunner, TestFun, TestItem, TestEntity } from './interface';
import { TestEntityCtor } from './testEntity';
import { logErr, asyncRunTestFun, asyncRunTestFunArr } from './utils';

export class TestRunnerCtor implements TestRunner {
    private cur_entity: TestEntity;
    private entity_list: TestEntity[] = [];
    public describe(msg: string, fun: TestFun) {
        const pre_entity = this.cur_entity;
        const entity = new TestEntityCtor(msg);
        if (pre_entity) {
            pre_entity.children.push(entity);
        } else {
            this.entity_list.push(entity);
        }
        this.cur_entity = entity;
        fun();
        this.cur_entity = pre_entity;

        setImmediate(() => {
            this.runTestEntity(entity);
        });
    }
    public it(msg: string, fun: TestFun): TestItem {
        const { cur_entity } = this;
        if (!cur_entity) {
            logErr('cant find cur test entity');
            return;
        }
        cur_entity.itemList.push({
            msg,
            fun,
        });
    }
    public afterAll(fun: TestFun) {
        const { cur_entity } = this;
        if (!cur_entity) {
            logErr('cant find cur test entity');
            return;
        }
        cur_entity.afterAll.push(fun);
    }
    public beforeAll(fun: TestFun) {
        const { cur_entity } = this;
        if (!cur_entity) {
            logErr('cant find cur test entity');
            return;
        }
        cur_entity.beforeAll.push(fun);
    }
    public afterEach(fun: TestFun) {
        const { cur_entity } = this;
        if (!cur_entity) {
            logErr('cant find cur test entity');
            return;
        }
        cur_entity.afterEach.push(fun);
    }
    public beforeEach(fun: TestFun) {
        const { cur_entity } = this;
        if (!cur_entity) {
            logErr('cant find cur test entity');
            return;
        }
        cur_entity.beforeEach.push(fun);
    }
    private async runTestEntity(entity: TestEntity) {
        const { afterAll, afterEach, beforeAll, beforeEach, itemList } = entity;

        await asyncRunTestFunArr(beforeAll, 'concurrent');
        for (const item of itemList) {
            await asyncRunTestFunArr(beforeEach, 'concurrent');
            await asyncRunTestFun(item.fun);
            await asyncRunTestFunArr(afterEach, 'concurrent');
        }
        await asyncRunTestFunArr(afterAll, 'concurrent');
    }
}
