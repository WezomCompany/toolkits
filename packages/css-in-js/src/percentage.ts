import { mathRound } from '@wezom/toolkit-math';

/**
 * Calculate percentage value
 * @example
 *  jssPercentage(720, 1280)       // => '56.25%'
 *  jssPercentage(9, 16)           // => '56.25%'
 *  jssPercentage(9, 16, true)    // => 56.25
 *  jssPercentage(9, 16, true, 1) // => 56.2
 */
export default function (
	part: number,
	full: number,
	returnAsNumber = false,
	fractionDigits = 5
): string | number {
	const value = mathRound((part / full) * 100, fractionDigits * -1);
	return returnAsNumber ? value : `${value.toString()}%`;
}
