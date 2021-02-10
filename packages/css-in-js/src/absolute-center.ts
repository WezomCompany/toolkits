import { jssUnitExtract, jssUnitLess } from './units';

/**
 * Generate CSS properties for absolute centering
 * @example
 *  jssAbsoluteCenter('3rem');
 *  // returns
 *  {
 *      top: '50%',
 *      left: '50%',
 *      width: '3rem',
 *      height: '3rem',
 *      margin: '-1.5rem 0 0 -1.5rem'
 *  }
 *
 *  jssAbsoluteCenter('4rem', '60px');
 *  // returns
 *  {
 *      top: '50%',
 *      left: '50%',
 *      width: '4rem',
 *      height: '60px',
 *      margin: '-30px 0 0 -2rem'
 *  }
 */
export default function (
	width: string,
	height = width
): { top: string; left: string; width: string; height: string; margin: string } {
	const mt = jssUnitLess(height) / 2 + jssUnitExtract(height);
	const ml = jssUnitLess(width) / 2 + jssUnitExtract(width);
	return {
		top: '50%',
		left: '50%',
		width,
		height,
		margin: `-${mt} 0 0 -${ml}`
	};
}
