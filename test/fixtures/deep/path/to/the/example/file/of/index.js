import { foo } from './foo.js';

export function ofFooSync() {
  return foo();
}

export async function ofFooAsync() {
  return await new Promise(resolve => {
    process.nextTick(() => resolve(foo()));
  });
}
