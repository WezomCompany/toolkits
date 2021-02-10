import { mathRound } from '@wezom/toolkit-math';

type PixelValue = number | 'auto' | 'inherit' | 'initial' | 'revert' | 'unset';
type Units = 'em' | 'rem';
type Joiner = ', ' | ' ';

function _convert(
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
 * @example
 *  jssEm(16, [16]); // => '1em'
 *  jssEm(16, [16, 'auto']); // => '1em auto'
 *  jssEm(16, [-8, 0]); // => '-0.5em 0'
 *  jssEm(16, [24, 32, 48]); // => '1.5em 2em 3em'
 *  jssEm(20, [30, 10, 45]); // => '1.5em 0.5em 2.25em'
 *  jssEm(20, [30, 10, 45], ', '); // => '1.5em, 0.5em, 2.25em'
 */
export function jssEm(
	remSize: number,
	pixels: PixelValue[],
	joiner: Joiner = ' '
): string {
	return _convert(remSize, pixels, 'em', joiner);
}

/**
 * @example
 *  jssRem(16, [16]); // => '1rem'
 *  jssRem(16, [16, 'auto']); // => '1rem auto'
 *  jssRem(16, [-8, 0]); // => '-0.5rem 0'
 *  jssRem(16, [24, 32, 48]); // => '1.5rem 2rem 3rem'
 *  jssRem(20, [30, 10, 45]); // => '1.5rem 0.5rem 2.25rem'
 *  jssRem(20, [30, 10, 45], ', '); // => '1.5rem, 0.5rem, 2.25rem'
 */
export function jssRem(
	remSize: number,
	pixels: PixelValue[],
	joiner: Joiner = ' '
): string {
	return _convert(remSize, pixels, 'rem', joiner);
}
