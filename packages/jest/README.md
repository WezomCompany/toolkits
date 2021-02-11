# @wezom/toolkit-jest

> _Useful tools for working with Jest_

| Statements                                                                  | Branches                                                                  | Functions                                                                  | Lines                                                                  |
| --------------------------------------------------------------------------- | ------------------------------------------------------------------------- | -------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| ![Statements](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg) | ![Branches](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg) | ![Functions](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg) | ![Lines](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg) |



## Table of Content:

1. [Usage](#usage)
    1. [Install npm package](#install-npm-package)
    1. [Import to your codebase](#import-to-your-codebase)
        - [ESNext](#esnext)
        - [CommonJS Version](#commonjs-version)
1. [Tools](#usage)
    1. [`jestFunctionSignatureTest()`](#jestfunctionsignaturetest)
1. [Contributing](#contributing)
1. [License](#licence)

---

## Usage

### Install npm package

```bash
npm i @wezom/toolkit-promise
```

### Import to your codebase

#### ESNext

We use TypeScript as main development language and distribute our lib in the maximum compliance with modern JavaScript specifications.
You project bundler (webpack or something else) must not exclude this installed package from `node_modules` folder.

_The package [`babel-loader-exclude-node-modules-except`](https://www.npmjs.com/package/babel-loader-exclude-node-modules-except) can help you with this_

#### CommonJS Version

If you cannot change your bundler config or if you don not want to include _esnext_ code version into your project - for this we have compiled CommonJS version of each library file and **you can import `*.cjs.js` files**. They ready to use without excluding `node_modules` and else. These files may have redundant code that is necessary for them to work "out of the box". And they will also be deprived of all the features of the _ESNext_ specifications.

```js
// no ES6 features but ready for use as is, without transpiling
import { /* ... */ } from '@wezom/toolkit-jest/dist/index.cjs.js';
```

---

[▲ Go Top](#) | [▲ Table of Content](#table-of-content)

---

## Tools


### jestFunctionSignatureTest()

[comment]: <> (AUTODOC-TOOL-START::function-signature-test#default)

Function signature test with set of custom cases

_Parameters:_

| Name   | Data type | Argument | Default value | Description |
| ------ | --------- | -------- | ------------- | ----------- |
| method | `T`       |          |               |
| cases  |           |          |               |

_Returns:_ `void`

_Examples:_

```ts
// x.ts
export const x = (y: boolean, z: number, w: number): number | null => (y ? z + w : null);

// x.spec.ts
import x from 'x.ts';
import { jestFunctionSignatureTest } from '@wezom/toolkit-jest';

describe('Function signature should match specification', () => {
	jestFunctionSignatureTest(x, [
		{
			parameters: [true, 4, 5],
			expected: 9
		},
		{
			parameters: [false, 4, 5],
			expected: null
		}
	]);
});
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
