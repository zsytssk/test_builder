import { expect } from 'chai';
import { Test } from '../src';
import { TestUtil } from '../src/interface';
import { child1Child1 } from './testChild1Child1';

const child1 = new Test(
    'child1',
    async (runner: TestUtil) => {
        runner.describe('test1', () => {
            runner.it('test1', () => {
                expect(1).equal('1');
            });
        });
    },
    {
        is_on: false,
    },
);

child1.addChild(child1Child1);

export default child1;
