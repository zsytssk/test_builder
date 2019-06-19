import { expect } from 'chai';
import { Test } from '../src';
import { TestUtil } from '../src/interface';

export const child1Child1 = new Test(
    'child1Child1',
    async (runner: TestUtil) => {
        runner.describe('test1', () => {
            runner.it('test1', () => {
                expect(1).equal('1');
            });
        });
    },
    {
        is_on: true,
    },
);
