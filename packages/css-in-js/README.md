# @wezom/toolkit-css-in-js

> _Useful tools for working with CSS-in-JS_

| Statements                                                                  | Branches                                                                  | Functions                                                                  | Lines                                                                  |
| --------------------------------------------------------------------------- | ------------------------------------------------------------------------- | -------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| ![Statements](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg) | ![Branches](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg) | ![Functions](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg) | ![Lines](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg) |

---

## Tools

1. [jssClamp](#jssclamp)
1. [jssClampHack](#jssclamphack)
1. [jssEm](#jssem)
1. [jssFontFaceSrc](#jssfontfacesrc)
1. [jssMax](#jssmax)
1. [jssMin](#jssmin)
1. [jssPercentage](#jsspercentage)
1. [jssRem](#jssrem)

---

### jssClamp()

[comment]: <> (AUTODOC-TOOL-START::min-max-clamp#jssClamp)

Generate css math function `clap(min, val, max)`

_Parameters:_

| Name | Data type | Argument   | Default value | Description |
| ---- | --------- | ---------- | ------------- | ----------- |
| min  | `Operand` | _required_ |               |
| val  | `Operand` | _required_ |               |
| max  | `Operand` | _required_ |               |

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

Generate css math function-hack `max(min, min(val, max))` instead `clamp`

_Parameters:_

| Name | Data type | Argument   | Default value | Description |
| ---- | --------- | ---------- | ------------- | ----------- |
| min  | `Operand` | _required_ |               |
| val  | `Operand` | _required_ |               |
| max  | `Operand` | _required_ |               |

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
| remSize | `number`       | _required_ |               |
| pixels  | `PixelValue[]` | _required_ |               |
| joiner  | `Joiner`       | _required_ | `' '`         |

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

| Name  | Data type | Argument   | Default value | Description |
| ----- | --------- | ---------- | ------------- | ----------- |
| woff2 | `string`  | _required_ |               |
| woff  | `string`  | _required_ |               |

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

| Name | Data type | Argument   | Default value | Description |
| ---- | --------- | ---------- | ------------- | ----------- |
| a    | `Operand` | _required_ |               |
| b    | `Operand` | _required_ |               |

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

| Name | Data type | Argument   | Default value | Description |
| ---- | --------- | ---------- | ------------- | ----------- |
| a    | `Operand` | _required_ |               |
| b    | `Operand` | _required_ |               |

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
| part           | `number`  | _required_ |               |
| full           | `number`  | _required_ |               |
| returnAsNumber | `boolean` | _required_ | `false`       |
| fractionDigits | `number`  | _required_ | `5`           |

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
| remSize | `number`       | _required_ |               |
| pixels  | `PixelValue[]` | _required_ |               |
| joiner  | `Joiner`       | _required_ | `' '`         |

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
