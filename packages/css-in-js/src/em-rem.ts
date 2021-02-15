import { mathRound } from '@wezom/toolkit-math';

type PixelValue = number | 'auto' | 'inherit' | 'initial' | 'revert' | 'unset';
type Units = 'em' | 'rem';
type Joiner = ', ' | ' ';

/**
 * Low level converter
 * @param size
 * @param pixels
 * @param unit
 * @param joiner
 */
export function jssConvertPixels(
	size: number,
	pixels: PixelValue[],
	unit: Units,
	joiner: Joiner
): string {
	return pixels
		.map((px) => {
			if (typeof px === 'string') {
				return px;
			} else if (px === 0) {
				return '0';
			}
			return mathRound(px / size, -5) + unit;
		})
		.join(joiner);
}

/**
 * High level converter from px to em
 * @see jssConvertPixels
 * @example
 *  jssEm(16, 16); // => '1em'
 *  jssEm(16, 16, 'auto'); // => '1em auto'
 *  jssEm(16, -8, 0); // => '-0.5em 0'
 *  jssEm(16, 24, 32, 48); // => '1.5em 2em 3em'
 *  jssEm(20, 30, 10, 45); // => '1.5em 0.5em 2.25em'
 */
export function jssEm(emSize: number, ...pixels: PixelValue[]): string {
	return jssConvertPixels(emSize, pixels, 'em', ' ');
}

let _remSize = 16;

/**
 * High level converter from px to rem with pre-defined rem size
 * By default rem size used as 16px;
 * @see jssConvertPixels()
 * @see jssSetPreDefinedRemSize()
 * @example
 *  jssRem(16); // => '1rem'
 *  jssRem(16, 'auto'); // => '1rem auto'
 *  jssRem(-8, 0); // => '-0.5rem 0'
 *  jssRem(24, 32, 48); // => '1.5rem 2rem 3rem'
 *  jssRem(30, 10, 45); // => '1.5rem 0.5rem 2.25rem'
 */
export function jssRem(...pixels: PixelValue[]): string {
	return jssConvertPixels(_remSize, pixels, 'rem', ' ');
}

/**
 * High level converter from px to rem, with custom rem size
 * @see jssConvertPixels()
 * @example
 *  jssRemWithSize(16, 16); // => '1rem'
 *  jssRemWithSize(16, 16, 'auto'); // => '1rem auto'
 *  jssRemWithSize(16, -8, 0); // => '-0.5rem 0'
 *  jssRemWithSize(16, 24, 32, 48); // => '1.5rem 2rem 3rem'
 *  jssRemWithSize(20, 30, 10, 45); // => '1.5rem 0.5rem 2.25rem'
 */
export function jssRemWithSize(remSize: number, ...pixels: PixelValue[]): string {
	return jssConvertPixels(remSize, pixels, 'rem', ' ');
}

/**
 * Change pre-defined rem size.
 * @see jssRemDefined()
 * @example
 *  jssRemDefined(20); // => '1.25rem'
 *  jssSetPreDefinedRemSize(20);
 *  jssRemDefined(20); // => '1rem'
 */
export function jssSetPreDefinedRemSize(size: number): void {
	_remSize = size;
}
