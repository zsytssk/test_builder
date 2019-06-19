import { Test } from '../src';
import { TestUtil } from '../src/interface';
import { log } from '../src/utils';
import { expect } from 'chai';
import { sleep } from './testUtils';

export default new Test('scope1', async (runner: TestUtil) => {
    runner.describe('test1', () => {
        let status = '';
        runner.beforeAll(async () => {
            status = 'beforeAll';
            log(status);
        });
        runner.afterAll(() => {
            status = 'afterAll';
            log(status);
        });
        runner.beforeEach(async () => {
            status = 'beforeEach';
            log(status);
        });
        runner.afterEach(async () => {
            status = 'afterEach';
            log(status);
        });
        runner.it('test1', () => {
            expect(1).equal('1');
        });
        runner.it('test item 1', () => {
            expect(1).equal(1);
        });
    });

    runner.describe('test2', () => {
        let status = '';
        runner.beforeAll(async () => {
            await sleep(3);
            status = 'beforeAll';
            log(status);
        });
        runner.afterAll(() => {
            status = 'afterAll';
            log(status);
        });
        runner.beforeEach(async () => {
            await sleep(3);
            status = 'beforeEach';
            log(status);
        });
        runner.afterEach(async () => {
            await sleep(3);
            status = 'afterEach';
            log(status);
        });
        runner.it('test1', () => {
            expect(1).equal('1');
        });
        runner.it('test item 1', () => {
            expect(1).equal(1);
        });
    });
});
