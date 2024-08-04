import { theExampleFileOfFooSync, theExampleFileOfFooAsync } from './the/index.js';

export function toTheExampleFileOfFooSync() {
  return theExampleFileOfFooSync();
}

export async function toTheExampleFileOfFooAsync() {
  return await theExampleFileOfFooAsync();
}
