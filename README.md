# @gulujs/caller-path

> Get the path of the caller function

## Installation

```sh
npm install @gulujs/caller-path
```

## Usage

- Example 1

```js
// main.js
const { callerPath } = require('@gulujs/cller-path');
function main() {
  console.log(callerPath());
}
main(); // => /full/path/to/main.js
```

- Example 2

```js
// foo.js
const { callerPath } = require('@gulujs/cller-path');
function foo() {
  console.log(callerPath({ shift: 1 }))
}
module.exports = {
  foo
};
```

```js
// bar.js
const { foo } = require('./foo');
foo(); // => /full/path/to/bar.js
```

## API

### callerPath(options?)

- shift
  - Type: number
  - Default: 0
- excludeFileNames
  - Type: Array<string|RegExp>
  - Default: undefined
- excludeFunctionNames
  - Type: Array<string|RegExp>
  - Default: undefined
- debug
  - Type: boolean
  - Default: false

## License

[MIT](LICENSE)
