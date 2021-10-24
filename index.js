
function callerPath(options) {
  options = options || {};

  const shift = options.shift > 0 ? options.shift : 0;
  const excludeFileName = createExcludeFilter(options.excludeFileNames, true);
  const excludeFunctionName = createExcludeFilter(options.excludeFunctionNames, false);

  // https://v8.dev/docs/stack-trace-api
  const prepareStackTrace = Error.prepareStackTrace;
  Error.prepareStackTrace = (_, stack) => stack;
  const stack = new Error().stack;
  Error.prepareStackTrace = prepareStackTrace;

  if (options.debug) {
    console.log('\x1b[33m%s\x1b[0m\n%s\n', `[@lunjs/caller-path]:`, stack.map(it => `${it.getFunctionName()}\t${it.getFileName()}`).join('\n'));
  }

  for (let i = 1 + shift; i < stack.length; i++) {
    const callSite = stack[i];
    const filename = callSite.getFileName();

    if (filename.startsWith('internal/')) {
      continue;
    }
    if (excludeFileName(filename)) {
      continue;
    }
    if (excludeFunctionName(callSite.getFunctionName())) {
      continue;
    }

    return filename;
  }
}

function createExcludeFilter(excludes, endsWith) {
  if (!excludes || !excludes.length) {
    return () => false;
  }
  return name => excludes.some((rule) => {
    if (!rule) {
      return false;
    }
    if (typeof rule === 'string') {
      return endsWith ? name.endsWith(rule) : (rule === name);
    }
    if (rule instanceof RegExp) {
      return rule.test(name);
    }
    return false;
  });
}

module.exports = {
  callerPath
};
