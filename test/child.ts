import { TestRunner } from '../src/interface';
import { Test } from '../src';

export default new Test('scope', async (runner: TestRunner) => {
    runner.describe('this is a test', () => {
        console.log(`test`);
    });
});
