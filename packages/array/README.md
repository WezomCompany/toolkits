# @wezom/toolkit-array

> _Useful tools for working with Arrays_

| Statements                                                                    | Branches                                                                    | Functions                                                                  | Lines                                                                    |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| ![Statements](https://img.shields.io/badge/Coverage-98.72%25-brightgreen.svg) | ![Branches](https://img.shields.io/badge/Coverage-96.88%25-brightgreen.svg) | ![Functions](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg) | ![Lines](https://img.shields.io/badge/Coverage-98.44%25-brightgreen.svg) |

## Table of Content:

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

| Name      | Data type                         | Argument   | Default value | Description |
| --------- | --------------------------------- | ---------- | ------------- | ----------- |
| data      | `(T │ null │ undefined)[] │ null` | _optional_ |               |
| predicate | ``                                | _optional_ | `...`         |

_Returns:_ `R[]`

_Examples:_

```ts
arrayFilterNullable([1, null, 2, undefined, 3, false, 0]); // => [1, 2, 3, false, 0]
arrayFilterNullable(null); // => []
arrayFilterNullable(); // => []

// Custom predicate. Use case example #1
interface A {
	x: string;
}
interface B {
	x: string;
	y: string;
}
const data: (A | B | null)[] | null = [{ x: '1' }, { x: '2' }, null, { x: '3', y: '4' }];
const result = arrayFilterNullable(
	data,
	(item): item is B => item != null && 'y' in item
);

// Custom predicate. Use case example #3
interface D {
	x: number;
	y: string;
}
type E = Partial<D>;
const data: (C | D | null)[] | null = [{ y: 1, x: '2' }, null, { x: '2' }, { y: 4 }];
const result = arrayFilterNullable(
	data,
	(item): item is D => item != null && item.y != null && item.x !== null
);
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
| predicate       | ``                    | _optional_ | `...`         |

_Returns:_ `R │ undefined`

_Examples:_

```ts
arrayGetFirstNotNullableItem([1, null, 2, undefined, 3, false, 0]); // => 1
arrayGetFirstNotNullableItem([null, null, undefined, 3, false, 0]); // => 3

// StrictZeroIndex example
arrayGetFirstNotNullableItem([1, null, 2, undefined, 3, false, 0], true); // => 1
arrayGetFirstNotNullableItem([null, null, undefined, 3, false, 0], true); // => undefined

// Nullable data example
arrayGetFirstNotNullableItem(null); // => undefined
arrayGetFirstNotNullableItem([null, undefined, null]); // => undefined

// -------------------

// Custom predicate
interface A {
	x: string;
	y: string;
}
type B = Partial<A>;

// must find on 2 index                ✕     ✕           ✔︎                   ✕
const data: (A | B | null)[] | null = [null, { x: '1' }, { x: '3', y: '4' }, { y: '2' }];
const result = arrayGetFirstNotNullableItem(
	data,
	false,
	(item): item is A => item != null && 'y' in item
);

// strict: check only 0 index          ✕           ✕      ✔︎                   ✕
const data: (A | B | null)[] | null = [{ x: '1' }, null, { x: '3', y: '4' }, { y: '2' }];
const result = arrayGetFirstNotNullableItem(
	data,
	true,
	(item): item is A => item != null && 'y' in item
);
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
