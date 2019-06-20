import { cp } from './ls/main';

const dist = 'D:\\zsytssk\\job\\legend\\legend_demo\\test\\testBuilder';
const src = 'D:\\zsytssk\\job\\legend\\TestBuilder\\src';

async function main() {
    cp(src, dist);
}
main();
