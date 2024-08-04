import { callerPath } from '../../../../../../../../../index.js';

export function foo() {
  return bar();
}

function bar() {
  return baz();
}

function baz() {
  return qux();
}

function qux() {
  return quux();
}

function quux() {
  return callerPath();
}