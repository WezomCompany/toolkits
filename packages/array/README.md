# @wezom/toolkit-array

> _Useful tools for working with Arrays_

| Statements                                                                  | Branches                                                                  | Functions                                                                  | Lines                                                                  |
| --------------------------------------------------------------------------- | ------------------------------------------------------------------------- | -------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| ![Statements](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg) | ![Branches](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg) | ![Functions](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg) | ![Lines](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg) |

## Table of Content:

1. [Usage](#usage)
    - [ESNext distribution version](#esnext-distribution-version)
    - [CommonJS distribution version](#commonjs-distribution-version)
    - [Install the chosen npm package](#install-the-chosen-npm-package)
1. [Tools](#usage)
    1. [`arrayAddUnique()`](#arrayaddunique)
    1. [`arrayClone()`](#arrayclone)
    1. [`arrayFilterNullable()`](#arrayfilternullable)
    1. [`arrayFilterUnique()`](#arrayfilterunique)
    1. [`arrayRemoveItems()`](#arrayremoveitems)
    1. [`arraySimpleRandomFn()`](#arraysimplerandomfn)
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

You can install [`@wezom/toolkit-array-cjs`](https://github.com/WezomCompany/toolkits/blob/main/packages/array-cjs/README.md#readme) instead of the current package.

### Install the chosen npm package

```bash
# esnext version
npm i @wezom/toolkit-array
# or commonjs
npm i @wezom/toolkit-array-cjs
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
| predicate | ``        | _optional_ | `...`         |

_Returns:_ `T[]`

[comment]: <> (AUTODOC-TOOL-END)

---

[▲ Go Top](#) | [▲ Table of Content](#table-of-content)

---

### arrayClone()

[comment]: <> (AUTODOC-TOOL-START::clone#default)

Clones array for immutable tasks

_Parameters:_

| Name  | Data type | Argument | Default value | Description |
| ----- | --------- | -------- | ------------- | ----------- |
| array | `T[]`     |          |               |

_Returns:_ `T[]`

[comment]: <> (AUTODOC-TOOL-END)

---

[▲ Go Top](#) | [▲ Table of Content](#table-of-content)

---

### arrayFilterNullable()

[comment]: <> (AUTODOC-TOOL-START::filter-nullable#default)

Filter `null` and `undefined` array items

_Parameters:_

| Name | Data type           | Argument   | Default value | Description |
| ---- | ------------------- | ---------- | ------------- | ----------- |
| data | `T │ null[] │ null` | _optional_ |               |

_Returns:_ `T[]`

_Examples:_

```ts
arrayFilterNullable([1, null, 2, undefined, 3, false, 0]); // => [1, 2, 3, false, 0]
arrayFilterNullable(null); // => []
arrayFilterNullable(); // => []
```

[comment]: <> (AUTODOC-TOOL-END)

---

[▲ Go Top](#) | [▲ Table of Content](#table-of-content)

---

### arrayFilterUnique()

[comment]: <> (AUTODOC-TOOL-START::filter-unique#default)

Returns new array without duplicates

_Parameters:_

| Name      | Data type | Argument   | Default value | Description |
| --------- | --------- | ---------- | ------------- | ----------- |
| array     | `T[]`     |            |               |
| predicate | ``        | _optional_ | `...`         |

_Returns:_ `T[]`

_Examples:_

```ts
arrayFilterUnique([
	'🚗',
	'🛸',
	'🚐',
	'🚁',
	'🚁',
	'🚐',
	'🚐',
	'🛵',
	'🚁',
	'🛵',
	'🛸',
	'🚗'
]); // => ['🚗','🛸','🚐','🚁','🛵']
arrayFilterUnique([
	{ icon: '🚗' },
	{ icon: '🚐' },
	{ icon: '🚐' },
	{ icon: '🚗' },
	{ icon: '🚁' },
	{ icon: '🛵' },
	{ icon: '🚁' },
	{ icon: '🚁' },
	{ icon: '🛸' },
	{ icon: '🛵' },
	{ icon: '🛵' },
	{ icon: '🛵' },
	{ icon: '🚁' }
]); // => [{icon: '🚗'},{icon: '🚐'},{icon: '🚁'},{icon: '🛵'},{icon: '🛸'}]
```

[comment]: <> (AUTODOC-TOOL-END)

---

---

[▲ Go Top](#) | [▲ Table of Content](#table-of-content)

---

### arrayRemoveItems()

[comment]: <> (AUTODOC-TOOL-START::remove-items#default)

Clones an array and removes items

_Parameters:_

| Name      | Data type | Argument   | Default value | Description |
| --------- | --------- | ---------- | ------------- | ----------- |
| array     | `T[]`     |            |               |
| items     | `T[]`     |            |               |
| predicate | ``        | _optional_ | `...`         |

_Returns:_ `T[]`

[comment]: <> (AUTODOC-TOOL-END)

[▲ Go Top](#) | [▲ Table of Content](#table-of-content)

---

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
