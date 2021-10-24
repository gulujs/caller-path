export interface CallerPathOptions {
  shift?: number;
  excludeFileNames?: Array<string|RegExp>;
  excludeFunctionNames?: Array<string|RegExp>;
  debug?: boolean;
}

export function callerPath(options?: CallerPathOptions): string | undefined;
