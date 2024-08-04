import { expect, test } from 'vitest';
import { callerPath } from '../index.js';
import { deepPathToTheExampleFileOfFooSync, deepPathToTheExampleFileOfFooAsync } from './fixtures/deep/index.js';

test('simple', () => {
  expect(callerPath()).toMatch(/test\/caller-path\.spec\.js$/);
});

test('deep caller sync ', () => {
  expect(deepPathToTheExampleFileOfFooSync()).toMatch(/test\/fixtures\/deep\/path\/to\/the\/example\/file\/of\/foo\.js$/)
});

test('deep caller async ', async () => {
  expect(await deepPathToTheExampleFileOfFooAsync()).toMatch(/test\/fixtures\/deep\/path\/to\/the\/example\/file\/of\/foo\.js$/)
});
