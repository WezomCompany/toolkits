# @wezom/toolkit-math

> _Useful math tools_

| Statements                                                                  | Branches                                                                  | Functions                                                                  | Lines                                                                  |
| --------------------------------------------------------------------------- | ------------------------------------------------------------------------- | -------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| ![Statements](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg) | ![Branches](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg) | ![Functions](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg) | ![Lines](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg) |

## Table of Content:

1. [Tools](#usage)
    1. [`mathRound()`](#mathround)
1. [Contributing](#contributing)
1. [License](#licence)

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
