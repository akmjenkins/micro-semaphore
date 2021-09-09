# micro-semaphore

[![npm version](https://img.shields.io/npm/v/micro-semaphore)](https://npmjs.org/package/micro-semaphore)
[![Coverage Status](https://coveralls.io/repos/github/akmjenkins/micro-semaphore/badge.svg)](https://coveralls.io/github/akmjenkins/micro-semaphore)
![Build Status](https://github.com/akmjenkins/micro-semaphore/actions/workflows/main.yaml/badge.svg)
[![Bundle Phobia](https://badgen.net/bundlephobia/minzip/micro-semaphore)](https://bundlephobia.com/result?p=micro-semaphore)

## What is this

A barebones implementation of a semaphore

## API/Types

```ts
export default function createSemaphor(capacity?: number): {
  then: <R>(func?: () => R) => Promise<R>;
};
```

## License

[MIT](./LICENSE)
