import { ofFooSync, ofFooAsync } from './of/index.js';

export function fileOfFooSync() {
  return ofFooSync();
}

export async function fileOfFooAsync() {
  return await ofFooAsync();
}
