# @wezom/toolkit-css-in-js tools

[🔙 Back to the README](README.md)

Table of Contents

1. [jssEm](#jssem)
1. [jssRem](#jssrem)
1. [jssFontFaceSrc](#jssfontfacesrc)

---

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

## jssEm()

[comment]: <> (AUTODOC-TOOL-START::em-rem#jssEm)

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

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

## jssRem()

[comment]: <> (AUTODOC-TOOL-START::em-rem#jssRem)

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

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---

## jssFontFaceSrc()

[comment]: <> (AUTODOC-TOOL-START::font-face-src#default)

Returns string font-face src value

_Examples:_

```ts
const src = jssFontFaceSrc('fonts/my.woff2', 'fonts/my.woff');
// => "url('/fonts/my.woff2') format('woff2'), url('/fonts/my.woff') format('woff')"
```

[comment]: <> (AUTODOC-TOOL-END)

---

[🔙 Back to the README](README.md) | [🔝 Top](#readme)

---
