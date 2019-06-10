import { TestBuilderCtor } from '../src/testBuilder';
import { TestRunner, TestBuilder } from '../src/interface';
import { Test } from '../src';
import child from './child';

declare global {
    interface Window {
        builder: TestBuilder;
    }
}

function main() {
    const test = new Test('scope');
    test.add(child);
    const builder = new TestBuilderCtor(test, {
        is_on: true,
    });
    globalThis.builder = builder;
    builder.run();
}
main();
