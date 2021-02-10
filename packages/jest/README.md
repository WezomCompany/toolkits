# @wezom/toolkit-jest

> _Useful tools for working with Jest_

| Statements                                                                  | Branches                                                                  | Functions                                                                  | Lines                                                                  |
| --------------------------------------------------------------------------- | ------------------------------------------------------------------------- | -------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| ![Statements](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg) | ![Branches](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg) | ![Functions](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg) | ![Lines](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg) |

---

## Tools

1. [`jestFunctionSignatureTest()`](#jestfunctionsignaturetest)

---

### jestFunctionSignatureTest()

[comment]: <> (AUTODOC-TOOL-START::function-signature-test#default)

Function signature test with set of custom cases

_Parameters:_

| Name   | Data type | Argument | Default value | Description |
| ------ | --------- | -------- | ------------- | ----------- |
| method | `T`       |          |               |
| cases  |           |          |               |

_Returns:_ `void`

_Examples:_

```ts
// x.ts
export const x = (y: boolean, z: number, w: number): number | null => (y ? z + w : null);

// x.spec.ts
import x from 'x.ts';
import { jestFunctionSignatureTest } from '@wezom/toolkit-jest';

describe('Function signature should match specification', () => {
	jestFunctionSignatureTest(x, [
		{
			parameters: [true, 4, 5],
			expected: 9
		},
		{
			parameters: [false, 4, 5],
			expected: null
		}
	]);
});
```

[comment]: <> (AUTODOC-TOOL-END)

---
