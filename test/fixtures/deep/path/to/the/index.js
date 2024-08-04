import { exampleFileOfFooSync, exampleFileOfFooAsync } from './example/index.js';

export function theExampleFileOfFooSync() {
  return exampleFileOfFooSync();
}

export async function theExampleFileOfFooAsync() {
  return await exampleFileOfFooAsync();
}
