import { cp } from './ls/main';

const dist = 'Z:\\test\\testBuilder';
const src = 'D:\\zsytssk\\github\\test_builder\\src';

const type = process.argv.slice(2)[0];
async function main() {
    const actions = {
        release,
        syncBack,
    };
    if (actions[type]) {
        await actions[type]();
    }
}
main();

async function release() {
    cp(src, dist);
}

async function syncBack() {
    cp(dist, src);
}
