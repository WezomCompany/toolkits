type Operand = string | number;

/**
 * Generate css math function `min(a, b)`
 * @example
 *  jssMin('5vw', '50px') // 'min(5vw, 50px)'
 *  jssMin('5vw', jssRem(64)) // 'min(5vw, 4rem)'
 */
export const jssMin = (a: Operand, b: Operand): string => `min(${a}, ${b})`;

/**
 * Generate css math function `max(a, b)`
 * @example
 *  jssMax('5vw', '50px') // 'max(5vw, 50px)'
 *  jssMax('5vw', jssRem(64)) // 'max(5vw, 4rem)'
 */
export const jssMax = (a: Operand, b: Operand): string => `max(${a}, ${b})`;

/**
 * Generate css math function `clap(min, val, max)`
 * @example
 *  jssClamp('10px', '5vw', '50px') // 'clamp(10px, 5vw, 50px)'
 *  jssClamp(jssRem(24), '10%', jssRem(64)) // 'clamp(1.5rem, 10%, 4rem)'
 */
export const jssClamp = (min: Operand, val: Operand, max: Operand): string =>
	`clamp(${min}, ${val}, ${max})`;

/**
 * Generate css math function-hack `max(min, min(val, max))` instead `clamp`
 * @example
 *  jssClamp('10px', '5vw', '50px') // 'max(10px, min(5vw, 50px))'
 *  jssClamp(jssRem(24), '10%', jssRem(64)) // 'max(1.5rem, min(10%, 4rem))'
 */
export const jssClampHack = (min: Operand, val: Operand, max: Operand): string =>
	`max(${min}, min(${val}, ${max}))`;
