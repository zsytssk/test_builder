import { Test, TestBuilder } from '../src';
import child1 from './testChild1';
import child2 from './testChild2';

declare global {
    interface Window {
        builder: TestBuilder;
    }
}

function main() {
    const test = new Test('top');
    test.add(child1, child2);
    const builder = new TestBuilder(test, {
        is_on: true,
    });
    globalThis.builder = builder;
    builder.runTest('scope1');
}
main();
