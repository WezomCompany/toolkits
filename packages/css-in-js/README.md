# @wezom/toolkit-css-in-js

> _Useful tools for working with CSS-in-JS_

| Statements                                                                  | Branches                                                                  | Functions                                                                    | Lines                                                                  |
| --------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| ![Statements](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg) | ![Branches](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg) | ![Functions](https://img.shields.io/badge/Coverage-95.12%25-brightgreen.svg) | ![Lines](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg) |

## Table of Content:

1. [Usage](#usage)
    - [ESNext distribution version](#esnext-distribution-version)
    - [CommonJS distribution version](#commonjs-distribution-version)
    - [Install the chosen npm package](#install-the-chosen-npm-package)
1. [Tools](#usage)
    - [Absolute position](#absolute-position)
        - [`jssAbsoluteCenter()`](#jssabsolutecenter)
        - [`jssAbsoluteGap()`](#jssabsolutecenter)
        - [`jssAbsoluteSquare()`](#jssabsolutecenter)
    - [Dividers](#dividers)
        - [`jssSplitAndChangeJoiner()`](#jsssplitandchangejoiner)
        - [`jssChangeJoiner()`](#jsschangejoiner)
    - [CSS min-max](#css-min-max)
        - [`jssClamp()`](#jssclamp)
        - [`jssClampHack()`](#jssclamphack)
        - [`jssMax()`](#jssmax)
        - [`jssMin()`](#jssmin)
    - [CSS units](#css-units)
        - [`jssConvertPixels()`](#jssconvertpixels)
        - [`jssEm()`](#jssem)
        - [`jssRem()`](#jssrem)
        - [`jssRemWithSize()`](#jssremwithsize)
        - [`jssSetPreDefinedRemSize()`](#jsssetpredefinedremsize)
        - [`jssPercentage()`](#jsspercentage)
        - [`jssUnitExtract()`](#jssunitextract)
        - [`jssUnitLess()`](#jssunitless)
        - [`jssUnitRevertSign()`](#jssunitrevertsign)
    - [Fonts](#fonts)
        - [`jssFontFaceSrc()`](#jssfontfacesrc)
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

You can install [`@wezom/toolkit-css-in-js-cjs`](https://github.com/WezomCompany/toolkits/blob/main/packages/css-in-js-cjs/README.md#readme) instead of the current package.

### Install the chosen npm package

```bash
# esnext version
npm i @wezom/toolkit-css-in-js
# or commonjs
npm i @wezom/toolkit-css-in-js-cjs
```

---

[▲ Go Top](#) | [▲ Table of Content](#table-of-content)

---

## Tools

### Absolute position

#### `jssAbsoluteCenter()`

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

#### `jssAbsoluteGap()`

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

#### `jssAbsoluteSquare()`

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

### Dividers

#### `jssSplitAndChangeJoiner()`

[comment]: <> (AUTODOC-TOOL-START::dividers#jssSplitAndChangeJoiner)

Low level method

_Parameters:_

| Name    | Data type | Argument | Default value | Description |
| ------- | --------- | -------- | ------------- | ----------- |
| string  | `string`  |          |               |
| splitBy | `string`  |          |               |
| joiner  | `string`  |          |               |

_Returns:_ `string`

_Examples:_

```ts
jssChangeJoiner('0 4px auto', ' ', ', '); // => '0, 4px, auto'
jssChangeJoiner('0 4px auto', ' ', '~*~'); // => '0~*~4px~*~auto' ;)
```

[comment]: <> (AUTODOC-TOOL-END)

---

#### `jssChangeJoiner()`

[comment]: <> (AUTODOC-TOOL-START::dividers#jssChangeJoiner)

High level joiner from `' '` to new value

_Parameters:_

| Name   | Data type | Argument   | Default value | Description |
| ------ | --------- | ---------- | ------------- | ----------- |
| string | `string`  |            |               |
| joiner | `string`  | _optional_ | `', '`        |

_Returns:_ `string`

_Examples:_

```ts
jssChangeJoiner('0 4px auto'); // => '0, 4px, auto'
jssChangeJoiner('0 4px auto', '~*~'); // => '0~*~4px~*~auto' ;)
```

[comment]: <> (AUTODOC-TOOL-END)

---

### CSS min-max

---

#### `jssClamp()`

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

#### `jssClampHack()`

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

#### `jssMax()`

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

#### `jssMin()`

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

### CSS units

#### `jssConvertPixels()`

[comment]: <> (AUTODOC-TOOL-START::em-rem#jssConvertPixels)

Low level converter

_Parameters:_

| Name   | Data type      | Argument | Default value | Description |
| ------ | -------------- | -------- | ------------- | ----------- |
| size   | `number`       |          |               |
| pixels | `PixelValue[]` |          |               |
| unit   | `Units`        |          |               |
| joiner | `Joiner`       |          |               |

_Returns:_ `string`

[comment]: <> (AUTODOC-TOOL-END)

---

#### `jssEm()`

[comment]: <> (AUTODOC-TOOL-START::em-rem#jssEm)

High level converter from px to em

_Parameters:_

| Name   | Data type         | Argument | Default value | Description |
| ------ | ----------------- | -------- | ------------- | ----------- |
| emSize | `number`          |          |               |
| pixels | `...PixelValue[]` |          |               |

_Returns:_ `string`

_Examples:_

```ts
jssEm(16, 16); // => '1em'
jssEm(16, 16, 'auto'); // => '1em auto'
jssEm(16, -8, 0); // => '-0.5em 0'
jssEm(16, 24, 32, 48); // => '1.5em 2em 3em'
jssEm(20, 30, 10, 45); // => '1.5em 0.5em 2.25em'
```

[comment]: <> (AUTODOC-TOOL-END)

---

#### `jssRem()`

[comment]: <> (AUTODOC-TOOL-START::em-rem#jssRem)

High level converter from px to rem with pre-defined rem size
By default rem size used as 16px;

_Parameters:_

| Name   | Data type         | Argument | Default value | Description |
| ------ | ----------------- | -------- | ------------- | ----------- |
| pixels | `...PixelValue[]` |          |               |

_Returns:_ `string`

_Examples:_

```ts
jssRem(16); // => '1rem'
jssRem(16, 'auto'); // => '1rem auto'
jssRem(-8, 0); // => '-0.5rem 0'
jssRem(24, 32, 48); // => '1.5rem 2rem 3rem'
jssRem(30, 10, 45); // => '1.5rem 0.5rem 2.25rem'
```

[comment]: <> (AUTODOC-TOOL-END)

---

#### `jssRemWithSize()`

[comment]: <> (AUTODOC-TOOL-START::em-rem#jssRemWithSize)

High level converter from px to rem, with custom rem size

_Parameters:_

| Name    | Data type         | Argument | Default value | Description |
| ------- | ----------------- | -------- | ------------- | ----------- |
| remSize | `number`          |          |               |
| pixels  | `...PixelValue[]` |          |               |

_Returns:_ `string`

_Examples:_

```ts
jssRemWithSize(16, 16); // => '1rem'
jssRemWithSize(16, 16, 'auto'); // => '1rem auto'
jssRemWithSize(16, -8, 0); // => '-0.5rem 0'
jssRemWithSize(16, 24, 32, 48); // => '1.5rem 2rem 3rem'
jssRemWithSize(20, 30, 10, 45); // => '1.5rem 0.5rem 2.25rem'
```

[comment]: <> (AUTODOC-TOOL-END)

---

#### `jssSetPreDefinedRemSize()`

[comment]: <> (AUTODOC-TOOL-START::em-rem#jssSetPreDefinedRemSize)

Change pre-defined rem size.

_Parameters:_

| Name | Data type | Argument | Default value | Description |
| ---- | --------- | -------- | ------------- | ----------- |
| size | `number`  |          |               |

_Returns:_ `void`

_Examples:_

```ts
jssRemDefined(20); // => '1.25rem'
jssSetPreDefinedRemSize(20);
jssRemDefined(20); // => '1rem'
```

[comment]: <> (AUTODOC-TOOL-END)

---

### `jssPercentage()`

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

#### `jssUnitExtract()`

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

#### `jssUnitLess()`

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

#### `jssUnitRevertSign()`

[comment]: <> (AUTODOC-TOOL-START::units#jssUnitRevertSign)

Invert value sign

_Parameters:_

| Name  | Data type         | Argument | Default value | Description |
| ----- | ----------------- | -------- | ------------- | ----------- |
| value | `string / number` |          |               |

_Returns:_ `string / number`

_Examples:_

```ts
jssUnitRevertSign(-20); // 20
jssUnitRevertSign('3rem'); // '-3rem'
jssUnitRevertSign('56.25%'); // '-56.25%'
jssUnitRevertSign('-4px 4px'); // '4px -4px'
jssUnitRevertSign(jssEm(16, 64, -64)); // '-4em 4em'
jssUnitRevertSign('-4px, 4px'); // '4px, -4px'
jssUnitRevertSign('-4px, 4px 4px, -5px, -6 -7 -8, 99.9%'); // '4px, -4px -4px, 5px, 6 7 8, -99.9%'
```

[comment]: <> (AUTODOC-TOOL-END)

---

### Fonts

#### `jssFontFaceSrc()`

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

[▲ Go Top](#) | [▲ Table of Content](#table-of-content)

---

## Contributing

Please fill free to create [issues](https://github.com/WezomCompany/toolkits/issues) or send [PR](https://github.com/WezomCompany/toolkits/pulls)

## Licence

[BSD-3-Clause License](https://github.com/WezomCompany/toolkits/blob/master/LICENSE)

---
