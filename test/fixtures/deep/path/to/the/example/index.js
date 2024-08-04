import { fileOfFooSync, fileOfFooAsync } from './file/index.js';

export function exampleFileOfFooSync() {
  return fileOfFooSync();
}

export async function exampleFileOfFooAsync() {
  return await fileOfFooAsync();
}