import { TestBuilderCtor } from '../src/testBuilder';
import { TestRunner, TestBuilder } from '../src/interface';
import { Test } from '../src';
import child1 from './testChild1';
import child2 from './testChild2';

declare global {
    interface Window {
        builder: TestBuilder;
    }
}

function main() {
    const test = new Test('scope');
    test.add(child1, child2);
    const builder = new TestBuilderCtor(test, {
        is_on: true,
    });
    globalThis.builder = builder;
    builder.run();
}
main();
