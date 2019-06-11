import { TestEntity, TestFun, TestItem } from './interface';

export class TestEntityCtor implements TestEntity {
    public msg: string;
    public children: TestEntityCtor[] = [];
    public itemList: TestItem[] = [];
    public afterAll: TestFun[] = [];
    public beforeAll: TestFun[] = [];
    public afterEach: TestFun[] = [];
    public beforeEach: TestFun[] = [];
    constructor(msg: string) {}
}
