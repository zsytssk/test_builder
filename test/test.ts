import { TestBuilderCtor } from '../src/testBuilder';
import { TestRunner } from '../src/interface';
import { Test } from '../src';

function main() {
    const builder = new TestBuilderCtor({
        status: 'off',
    });
    new Test('scope', async (runner: TestRunner) => {});
}
main();
