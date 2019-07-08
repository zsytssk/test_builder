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
    test.addChild(child1, child2);
    const builder = new TestBuilder(test, {
        is_on: false,
    });
    builder.init();
    globalThis.builder = builder;
    builder.runTest('child1.child1Child1');
}
main();
