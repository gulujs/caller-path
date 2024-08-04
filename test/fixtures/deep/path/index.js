import { toTheExampleFileOfFooSync, toTheExampleFileOfFooAsync } from './to/index.js';

export function pathToTheExampleFileOfFooSync() {
  return toTheExampleFileOfFooSync();
}

export async function pathToTheExampleFileOfFooAsync() {
  return await toTheExampleFileOfFooAsync();
}
