# @wezom/toolkit-promise

> _Useful tools for working with Promises_

| Statements                                                                  | Branches                                                                  | Functions                                                                  | Lines                                                                  |
| --------------------------------------------------------------------------- | ------------------------------------------------------------------------- | -------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| ![Statements](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg) | ![Branches](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg) | ![Functions](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg) | ![Lines](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg) |

## Table of Content:

1. [Tools](#usage)
    1. [`promiseSleep()`](#promisesleep)
1. [Contributing](#contributing)
1. [License](#licence)

---

## Tools

### promiseSleep()

[comment]: <> (AUTODOC-TOOL-START::sleep#default)

Sleep some milliseconds and resolve promise

_Parameters:_

| Name | Data type | Argument | Default value | Description |
| ---- | --------- | -------- | ------------- | ----------- |
| ms   | `number`  |          |               |

_Returns:_ `Promise<void>`

_Examples:_

```ts
promiseSleep(500).then(() => tryAgainSomeMethod());
// or
async function fakeSubmit() {
	await promiseSleep(300);
	return true;
}
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
