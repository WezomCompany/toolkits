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
    1. [`arrayGetFirstNotNullableItem()`](#arraygetfirstnotnullableitem)
    1. [`arrayRemoveByIndex()`](#arrayremovebyindex)
    1. [`arrayRemoveItems()`](#arrayremoveitems)
    1. [`arraySimpleRandomFn()`](#arraysimplerandomfn)
    1. [`arrayToggleItem()`](#arraytoggleitem)
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

| Name | Data type             | Argument   | Default value | Description |
| ---- | --------------------- | ---------- | ------------- | ----------- |
| data | `(T │ null)[] │ null` | _optional_ |               |

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

[▲ Go Top](#) | [▲ Table of Content](#table-of-content)

---

### arrayGetFirstNotNullableItem()

[comment]: <> (AUTODOC-TOOL-START::get-first-not-nullable-item#default)

Getting first not nullable item from given array data

_Parameters:_

| Name            | Data type             | Argument   | Default value | Description |
| --------------- | --------------------- | ---------- | ------------- | ----------- |
| data            | `(T │ null)[] │ null` | _optional_ |               |
| strictZeroIndex | `boolean`             | _optional_ |               |

_Returns:_ `T │ undefined`

_Examples:_

```ts
arrayGetFirstNotNullableItem([1, null, 2, undefined, 3, false, 0]); // => 1
arrayGetFirstNotNullableItem([null, null, undefined, 3, false, 0]); // => 3
// strictZeroIndex example
arrayGetFirstNotNullableItem([1, null, 2, undefined, 3, false, 0], true); // => 1
arrayGetFirstNotNullableItem([null, null, undefined, 3, false, 0], true); // => undefined
// nullable data example
arrayGetFirstNotNullableItem(null); // => undefined
arrayGetFirstNotNullableItem([null, undefined, null]); // => undefined
```

[comment]: <> (AUTODOC-TOOL-END)

---

[▲ Go Top](#) | [▲ Table of Content](#table-of-content)

---

### arrayRemoveByIndex()

[comment]: <> (AUTODOC-TOOL-START::remove-by-index#default)

Clones an array and removes items by index

_Parameters:_

| Name        | Data type | Argument   | Default value | Description |
| ----------- | --------- | ---------- | ------------- | ----------- |
| array       | `T[]`     |            |               |
| index       | `number`  |            |               |
| deleteCount | `number`  | _optional_ | `1`           |

_Returns:_ `T[]`

_Examples:_

```ts
arrayRemoveByIndex(['A', 'B', 'C'], 1); // >>> ['A', 'C'];
arrayRemoveByIndex(['A', 'B', 'C', 'D', 'E'], 1, 3); // >>> ['A', 'E'];
```

[comment]: <> (AUTODOC-TOOL-END)

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

[▲ Go Top](#) | [▲ Table of Content](#table-of-content)

---

### arrayToggleItem()

[comment]: <> (AUTODOC-TOOL-START::toggle-item#default)

Adds an element to an array or removes if the array already has such an element

_Parameters:_

| Name      | Data type | Argument   | Default value | Description |
| --------- | --------- | ---------- | ------------- | ----------- |
| array     | `T[]`     |            |               |
| item      | `T`       |            |               |
| predicate | ``        | _optional_ | `...`         |

_Returns:_ `T[]`

_Examples:_

```ts
arrayToggleItem([1, 2, 3], 9); // => [1, 2, 3, 9]
arrayToggleItem([1, 2, 3, 9], 2); // => [1, 3, 9]
arrayToggleItem([{ x: 1 }, { x: 2 }, { x: 3 }], { x: 2 }, (array, item) =>
	array.findIndex((el) => el.x === item.x)
); // => [{ x: 1 }, { x: 3 }]
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
