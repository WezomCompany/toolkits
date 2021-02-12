# @wezom/toolkit-array

> _Useful tools for working with Arrays_

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
    1. [`arrayAddUnique()`](#arrayaddunique)
    1. [`arrayClone()`](#arrayclone)
    1. [`arrayRemoveItems()`](#arrayremoveitems)
    1. [`arraySimpleRandomFn()`](#arraysimplerandomfn)
1. [Contributing](#contributing)
1. [License](#licence)

---

## Usage

### Install npm package

```bash
npm i @wezom/toolkit-array
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
import /* ... */ '@wezom/toolkit-array/dist/index.cjs.js';
```

---

[▲ Go Top](#) | [▲ Table of Content](#table-of-content)

---

## Tools

### arrayAddUnique()

[comment]: <> (AUTODOC-TOOL-START::add-unique#default)

Clones an array and puts only unique elements there

_Parameters:_

| Name      | Data type | Argument   | Default value | Description |
| --------- | --------- | ---------- | ------------- | ----------- |
| array     | `T[]`     |            |               |
| items     | `T[]`     |            |               |
| predicate |           | _optional_ | `...`         |

_Returns:_ `T[]`

[comment]: <> (AUTODOC-TOOL-END)

### arrayClone()

[comment]: <> (AUTODOC-TOOL-START::clone#default)

Clones array for immutable tasks

_Parameters:_

| Name  | Data type | Argument | Default value | Description |
| ----- | --------- | -------- | ------------- | ----------- |
| array | `T[]`     |          |               |

_Returns:_ `T[]`

[comment]: <> (AUTODOC-TOOL-END)

### arrayRemoveItems()

[comment]: <> (AUTODOC-TOOL-START::remove-items#default)

Clones an array and removes items

_Parameters:_

| Name      | Data type | Argument   | Default value | Description |
| --------- | --------- | ---------- | ------------- | ----------- |
| array     | `T[]`     |            |               |
| items     | `T[]`     |            |               |
| predicate |           | _optional_ | `...`         |

_Returns:_ `T[]`

[comment]: <> (AUTODOC-TOOL-END)

### arraySimpleRandomFn()

[comment]: <> (AUTODOC-TOOL-START::simple-random-fn#default)

Function for simple sorting of array elements in random order

_Returns:_ `number`

[comment]: <> (AUTODOC-TOOL-END)

---

[▲ Go Top](#) | [▲ Table of Content](#table-of-content)

---

## Contributing

Please fill free to create [issues](https://github.com/WezomCompany/toolkits/issues) or send [PR](https://github.com/WezomCompany/toolkits/pulls)

## Licence

[BSD-3-Clause License](https://github.com/WezomCompany/toolkits/blob/master/LICENSE)

---
