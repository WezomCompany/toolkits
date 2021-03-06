# @wezom/toolkit-promise

> _Useful tools for working with Promises_

| Statements                                                                  | Branches                                                                  | Functions                                                                  | Lines                                                                  |
| --------------------------------------------------------------------------- | ------------------------------------------------------------------------- | -------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| ![Statements](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg) | ![Branches](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg) | ![Functions](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg) | ![Lines](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg) |

## Table of Content:

1. [Usage](#usage)
    - [ESNext distribution version](#esnext-distribution-version)
    - [CommonJS distribution version](#commonjs-distribution-version)
    - [Install the chosen npm package](#install-the-chosen-npm-package)
1. [Tools](#usage)
    1. [`promiseSleep()`](#promisesleep)
1. [Contributing](#contributing)
1. [License](#licence)

---

## Usage

### ESNext distribution version

We use TypeScript as main development language and distribute our lib in the maximum compliance with modern JavaScript specifications.

Your project bundler (webpack or something else) should not exclude this installed package from `node_modules` folder for the transpilation process.

_The package [`babel-loader-exclude-node-modules-except`](https://www.npmjs.com/package/babel-loader-exclude-node-modules-except) can help you with this_

### CommonJS distribution version

If you cannot change your bundler config or if you do not want to include _ESNext_ code version into your project - for this we have compiled CommonJS distribution version.

You can install [`@wezom/toolkit-promise-cjs`](https://github.com/WezomCompany/toolkits/blob/main/packages/promise-cjs/README.md#readme) instead of the current package.

### Install the chosen npm package

```bash
# esnext version
npm i @wezom/toolkit-promise
# or commonjs
npm i @wezom/toolkit-promise-cjs
```

---

[▲ Go Top](#) | [▲ Table of Content](#table-of-content)

---

## Tools

### promiseSleep()

[comment]: <> (AUTODOC-TOOL-START::sleep#default)

Sleep some milliseconds and resolve promise

_Parameters:_

| Name | Data type | Argument | Default value | Description |
| ---- | --------- | -------- | ------------- | ----------- |
| ms   | `number`  |          |               |

_Returns:_ `Promise<void>`

_Examples:_

```ts
promiseSleep(500).then(() => tryAgainSomeMethod());
// or
async function fakeSubmit() {
	await promiseSleep(300);
	return true;
}
```

[comment]: <> (AUTODOC-TOOL-END)

---

[▲ Go Top](#) | [▲ Table of Content](#table-of-content)

---

## Contributing

Please fill free to create [issues](https://github.com/WezomCompany/toolkits/issues) or send [PR](https://github.com/WezomCompany/toolkits/pulls)

## Licence

[BSD-3-Clause License](https://github.com/WezomCompany/toolkits/blob/master/LICENSE)

---
