# @wezom/toolkit-math

> _Useful math tools_

| Statements                                                                  | Branches                                                                  | Functions                                                                  | Lines                                                                  |
| --------------------------------------------------------------------------- | ------------------------------------------------------------------------- | -------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| ![Statements](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg) | ![Branches](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg) | ![Functions](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg) | ![Lines](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg) |

## Table of Content:

1. [Usage](#usage)
    - [ESNext distribution version](#esnext-distribution-version)
    - [CommonJS distribution version](#commonjs-distribution-version)
    - [Install the chosen npm package](#install-the-chosen-npm-package)
1. [Tools](#usage)
    1. [`mathRound()`](#mathround)
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

You can install [`@wezom/toolkit-math-cjs`](https://github.com/WezomCompany/toolkits/blob/main/packages/math-cjs/README.md#readme) instead of the current package.

### Install the chosen npm package

```bash
# esnext version
npm i @wezom/toolkit-math
# or commonjs
npm i @wezom/toolkit-math-cjs
```

---

[▲ Go Top](#) | [▲ Table of Content](#table-of-content)

---

## Tools

### mathRound()

[comment]: <> (AUTODOC-TOOL-START::round#default)

Correction of rounding of decimal fractions.

_Parameters:_

| Name  | Data type | Argument   | Default value | Description |
| ----- | --------- | ---------- | ------------- | ----------- |
| value | `number`  |            |               | some value  |
| exp   | `number`  | _optional_ |               |

_Returns:_ `number`

[comment]: <> (AUTODOC-TOOL-END)

---

### mathSum()

[comment]: <> (AUTODOC-TOOL-START::sum#default)

Calculates the sum of all arguments

_Parameters:_

| Name    | Data type     | Argument | Default value | Description |
| ------- | ------------- | -------- | ------------- | ----------- |
| numbers | `...number[]` |          |               |

_Returns:_ `number`

_Examples:_

```ts
mathSum(1, 3, 5); // => 9
mathSum(1.01, 1.02); // => 2.03
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
