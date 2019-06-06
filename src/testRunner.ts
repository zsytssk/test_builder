import { TestRunner } from './interface';

export class TestRunnerCtor implements TestRunner {
    public describe(msg: string, test_fun: (runner: TestRunnerCtor) => void) {}
}
