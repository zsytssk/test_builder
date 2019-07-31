import { cp } from './ls/main';

const dist = 'Z:\\test\\testBuilder';
const dist2 = 'D:\\zsytssk\\github\\HonorLite\\test\\testBuilder';
const src = 'D:\\zsytssk\\github\\test_builder\\src';

const type = process.argv.slice(2)[0];
async function main() {
    const actions = {
        release,
        syncBack,
        release2,
        syncBack2,
    };
    if (actions[type]) {
        await actions[type]();
    }
}
main();

async function release() {
    cp(src, dist);
}
async function release2() {
    cp(src, dist2);
}

async function syncBack() {
    cp(dist, src);
}
async function syncBack2() {
    cp(dist2, src);
}
