import { Test } from '../src';
import { TestRunner } from '../src/interface';
import { log } from '../src/utils';
import { expect } from 'chai';
import { sleep } from './testUtils';

export default new Test('scope1', async (runner: TestRunner) => {
    runner.describe('this is a test', () => {
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
        runner.it('test item 1', () => {
            expect(1).equal('1');
        });
        runner.it('test item 1', () => {
            expect(1).equal(1);
        });
    });
});
