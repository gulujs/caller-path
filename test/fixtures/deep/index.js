import { pathToTheExampleFileOfFooSync, pathToTheExampleFileOfFooAsync } from './path/index.js';

export function deepPathToTheExampleFileOfFooSync() {
  return pathToTheExampleFileOfFooSync();
}

export async function deepPathToTheExampleFileOfFooAsync() {
  return await pathToTheExampleFileOfFooAsync();
}
