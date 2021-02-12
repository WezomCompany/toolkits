# @wezom/toolkit-css-in-js

> _Useful tools for working with CSS-in-JS_

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
    1. [`jssAbsoluteCenter()`](#jssabsolutecenter)
    1. [`jssAbsoluteGap()`](#jssabsolutecenter)
    1. [`jssAbsoluteSquare()`](#jssabsolutecenter)
    1. [`jssClamp()`](#jssclamp)
    1. [`jssClampHack()`](#jssclamphack)
    1. [`jssEm()`](#jssem)
    1. [`jssFontFaceSrc()`](#jssfontfacesrc)
    1. [`jssMax()`](#jssmax)
    1. [`jssMin()`](#jssmin)
    1. [`jssPercentage()`](#jsspercentage)
    1. [`jssRem()`](#jssrem)
    1. [`jssUnitExtract()`](#jssunitextract)
    1. [`jssUnitLess()`](#jssunitless)
1. [Contributing](#contributing)
1. [License](#licence)

---

## Usage

### Install npm package

```bash
npm i @wezom/toolkit-css-in-js
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
import /* ... */ '@wezom/toolkit-css-in-js/dist/index.cjs.js';
```

---

[▲ Go Top](#) | [▲ Table of Content](#table-of-content)

---

## Tools

### jssAbsoluteCenter()

[comment]: <> (AUTODOC-TOOL-START::absolute-center#default)

Generate CSS properties for absolute centering

_Parameters:_

| Name   | Data type | Argument   | Default value | Description |
| ------ | --------- | ---------- | ------------- | ----------- |
| width  | `string`  |            |               |
| height | `string`  | _optional_ | `...`         |

_Examples:_

```ts
 jssAbsoluteCenter('3rem');
 // returns
 {
     top: '50%',
     left: '50%',
     width: '3rem',
     height: '3rem',
     margin: '-1.5rem 0 0 -1.5rem'
 }

 jssAbsoluteCenter('4rem', '60px');
 // returns
 {
     top: '50%',
     left: '50%',
     width: '4rem',
     height: '60px',
     margin: '-30px 0 0 -2rem'
 }

```

[comment]: <> (AUTODOC-TOOL-END)

---

### jssAbsoluteGap()

[comment]: <> (AUTODOC-TOOL-START::absolute-gap#default)

_Parameters:_

| Name | Data type | Argument   | Default value | Description |
| ---- | --------- | ---------- | ------------- | ----------- |
| x    | `string`  |            |               |
| y    | `string`  | _optional_ | `...`         |

_Examples:_

```ts
 jssAbsoluteGap('10px');
 // returns
 {
     width: 'auto',
     height: 'auto',
     top: '10px',
     right: '10px',
     bottom: '10px',
     left: '10px'
 }

 jssAbsoluteGap('10px', '2em');
 // returns
 {
     width: 'auto',
     height: 'auto',
     top: '10px',
     right: '2em',
     bottom: '10px',
     left: '2em'
 }

```

[comment]: <> (AUTODOC-TOOL-END)

---

### jssAbsoluteSquare()

[comment]: <> (AUTODOC-TOOL-START::absolute-square#default)

_Parameters:_

| Name    | Data type         | Argument | Default value | Description |
| ------- | ----------------- | -------- | ------------- | ----------- |
| percent | `string / number` |          |               |

_Examples:_

```ts
 jssAbsoluteSquare(54);
 // returns
 {
     top: '23%',
     left: '23%',
     width: '54%',
     height: '54%'
 }

 jssAbsoluteSquare(100);
 // returns
 {
     top: '0%',
     left: '0%',
     width: '100%',
     height: '100%'
 }

 jssAbsoluteSquare('120%');
 // returns
 {
     top: '-10%',
     left: '-10%',
     width: '120%',
     height: '120%'
 }

```

[comment]: <> (AUTODOC-TOOL-END)

---

### jssClamp()

[comment]: <> (AUTODOC-TOOL-START::min-max-clamp#jssClamp)

Generate css math function `clap(min, val, max)`

_Parameters:_

| Name | Data type | Argument | Default value | Description |
| ---- | --------- | -------- | ------------- | ----------- |
| min  | `Operand` |          |               |
| val  | `Operand` |          |               |
| max  | `Operand` |          |               |

_Returns:_ `string`

_Examples:_

```ts
jssClamp('10px', '5vw', '50px'); // 'clamp(10px, 5vw, 50px)'
jssClamp(jssRem(24), '10%', jssRem(64)); // 'clamp(1.5rem, 10%, 4rem)'
```

[comment]: <> (AUTODOC-TOOL-END)

---

### jssClampHack()

[comment]: <> (AUTODOC-TOOL-START::min-max-clamp#jssClampHack)

Generate css math function-hack `max(x, min(y, z))` instead `clamp(z, y, x)`

_Parameters:_

| Name | Data type | Argument | Default value | Description |
| ---- | --------- | -------- | ------------- | ----------- |
| min  | `Operand` |          |               |
| val  | `Operand` |          |               |
| max  | `Operand` |          |               |

_Returns:_ `string`

_Examples:_

```ts
jssClamp('10px', '5vw', '50px'); // 'max(10px, min(5vw, 50px))'
jssClamp(jssRem(24), '10%', jssRem(64)); // 'max(1.5rem, min(10%, 4rem))'
```

[comment]: <> (AUTODOC-TOOL-END)

---

### jssEm()

[comment]: <> (AUTODOC-TOOL-START::em-rem#jssEm)

_Parameters:_

| Name    | Data type      | Argument   | Default value | Description |
| ------- | -------------- | ---------- | ------------- | ----------- |
| remSize | `number`       |            |               |
| pixels  | `PixelValue[]` |            |               |
| joiner  | `Joiner`       | _optional_ | `' '`         |

_Returns:_ `string`

_Examples:_

```ts
jssEm(16, [16]); // => '1em'
jssEm(16, [16, 'auto']); // => '1em auto'
jssEm(16, [-8, 0]); // => '-0.5em 0'
jssEm(16, [24, 32, 48]); // => '1.5em 2em 3em'
jssEm(20, [30, 10, 45]); // => '1.5em 0.5em 2.25em'
jssEm(20, [30, 10, 45], ', '); // => '1.5em, 0.5em, 2.25em'
```

[comment]: <> (AUTODOC-TOOL-END)

---

### jssFontFaceSrc()

[comment]: <> (AUTODOC-TOOL-START::font-face-src#default)

Returns string font-face src value

_Parameters:_

| Name  | Data type | Argument | Default value | Description |
| ----- | --------- | -------- | ------------- | ----------- |
| woff2 | `string`  |          |               |
| woff  | `string`  |          |               |

_Returns:_ `string`

_Examples:_

```ts
const src = jssFontFaceSrc('fonts/my.woff2', 'fonts/my.woff');
// => "url('/fonts/my.woff2') format('woff2'), url('/fonts/my.woff') format('woff')"
```

[comment]: <> (AUTODOC-TOOL-END)

---

### jssMax()

[comment]: <> (AUTODOC-TOOL-START::min-max-clamp#jssMax)

Generate css math function `max(a, b)`

_Parameters:_

| Name | Data type | Argument | Default value | Description |
| ---- | --------- | -------- | ------------- | ----------- |
| a    | `Operand` |          |               |
| b    | `Operand` |          |               |

_Returns:_ `string`

_Examples:_

```ts
jssMax('5vw', '50px'); // 'max(5vw, 50px)'
jssMax('5vw', jssRem(64)); // 'max(5vw, 4rem)'
```

[comment]: <> (AUTODOC-TOOL-END)

---

### jssMin()

[comment]: <> (AUTODOC-TOOL-START::min-max-clamp#jssMin)

Generate css math function `min(a, b)`

_Parameters:_

| Name | Data type | Argument | Default value | Description |
| ---- | --------- | -------- | ------------- | ----------- |
| a    | `Operand` |          |               |
| b    | `Operand` |          |               |

_Returns:_ `string`

_Examples:_

```ts
jssMin('5vw', '50px'); // 'min(5vw, 50px)'
jssMin('5vw', jssRem(64)); // 'min(5vw, 4rem)'
```

[comment]: <> (AUTODOC-TOOL-END)

---

### jssPercentage()

[comment]: <> (AUTODOC-TOOL-START::percentage#default)

Calculate percentage value

_Parameters:_

| Name           | Data type | Argument   | Default value | Description |
| -------------- | --------- | ---------- | ------------- | ----------- |
| part           | `number`  |            |               |
| full           | `number`  |            |               |
| returnAsNumber | `boolean` | _optional_ | `false`       |
| fractionDigits | `number`  | _optional_ | `5`           |

_Returns:_ `string / number`

_Examples:_

```ts
jssPercentage(720, 1280); // => '56.25%'
jssPercentage(9, 16); // => '56.25%'
jssPercentage(9, 16, true); // => 56.25
jssPercentage(9, 16, true, 1); // => 56.2
```

[comment]: <> (AUTODOC-TOOL-END)

---

### jssRem()

[comment]: <> (AUTODOC-TOOL-START::em-rem#jssRem)

_Parameters:_

| Name    | Data type      | Argument   | Default value | Description |
| ------- | -------------- | ---------- | ------------- | ----------- |
| remSize | `number`       |            |               |
| pixels  | `PixelValue[]` |            |               |
| joiner  | `Joiner`       | _optional_ | `' '`         |

_Returns:_ `string`

_Examples:_

```ts
jssRem(16, [16]); // => '1rem'
jssRem(16, [16, 'auto']); // => '1rem auto'
jssRem(16, [-8, 0]); // => '-0.5rem 0'
jssRem(16, [24, 32, 48]); // => '1.5rem 2rem 3rem'
jssRem(20, [30, 10, 45]); // => '1.5rem 0.5rem 2.25rem'
jssRem(20, [30, 10, 45], ', '); // => '1.5rem, 0.5rem, 2.25rem'
```

[comment]: <> (AUTODOC-TOOL-END)

---

### jssUnitExtract()

[comment]: <> (AUTODOC-TOOL-START::units#jssUnitExtract)

Get CSS unit `px|rem|em|%|vw|vh|ms|s` from value

_Parameters:_

| Name  | Data type         | Argument | Default value | Description |
| ----- | ----------------- | -------- | ------------- | ----------- |
| value | `string / number` |          |               |

_Returns:_ `string`

_Examples:_

```ts
jssUnitExtract(100); // ''
jssUnitExtract('3rem'); // 'rem'
jssUnitExtract(jssEm(16, [64])); // 'em'
jssUnitExtract('-20px'); // 'px'
jssUnitExtract('56.25%'); // '%'
```

[comment]: <> (AUTODOC-TOOL-END)

---

### jssUnitLess()

[comment]: <> (AUTODOC-TOOL-START::units#jssUnitLess)

Remove CSS unit `px|rem|em|%|vw|vh|ms|s` and receive number value

_Parameters:_

| Name  | Data type         | Argument | Default value | Description |
| ----- | ----------------- | -------- | ------------- | ----------- |
| value | `string / number` |          |               |

_Returns:_ `number`

_Examples:_

```ts
jssUnitLess('3rem'); // 4
jssUnitLess(jssEm(16, [64])); // 4
jssUnitLess('-20px'); // -20
jssUnitLess('56.25%'); // 56.25
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
