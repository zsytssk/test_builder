import { TestBuilderCtor } from '../src/testBuilder';
import { TestRunner, TestBuilder } from '../src/interface';
import { Test } from '../src';

declare global {
    interface Window {
        builder: TestBuilder;
    }
}

function main() {
    const test = new Test('scope');
    test.add;
    const builder = new TestBuilderCtor(test, {
        is_on: false,
    });
    globalThis.builder = builder;
    console.log(globalThis);
}
main();
