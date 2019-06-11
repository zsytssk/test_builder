import { Test } from '../src';
import { TestRunner } from '../src/interface';

export default new Test('scope', async (runner: TestRunner) => {
    runner.describe('this is a test', () => {
        runner.it('test item 1', () => {
            console.log(1);
        });
    });
});
