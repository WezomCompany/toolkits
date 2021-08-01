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
 *
 *  jssAbsoluteCenter('100px', '100px', 'topRight);
 *  // returns
 *  {
 *      top: '50%',
 *      right: '50%',
 *      width: '100px',
 *      height: '100px',
 *      margin: '-50px -50px 0 0'
 *  }
 *
 *  jssAbsoluteCenter('100px', '100px', 'bottomRight);
 *  // returns
 *  {
 *      bottom: '50%',
 *      right: '50%',
 *      width: '100px',
 *      height: '100px',
 *      margin: '0 -50px -50px 0'
 *  }
 *
 *  jssAbsoluteCenter('100px', '100px', 'bottomLeft);
 *  // returns
 *  {
 *      bottom: '50%',
 *      right: '50%',
 *      width: '100px',
 *      height: '100px',
 *      margin: '0 0 -50px -50px'
 *  }
 */
export function jssAbsoluteCenter(
	width: string,
	height = width,
	corner: 'topLeft' | 'topRight' | 'bottomRight' | 'bottomLeft' = 'topLeft'
): {
	top?: string;
	bottom?: string;
	left?: string;
	right?: string;
	width: string;
	height: string;
	margin: string;
} {
	const mt = jssUnitLess(height) / 2 + jssUnitExtract(height);
	const ml = jssUnitLess(width) / 2 + jssUnitExtract(width);
	const x = corner === 'topLeft' || corner === 'topRight' ? 'top' : 'bottom';
	const y = corner === 'topLeft' || corner === 'bottomLeft' ? 'left' : 'right';
	const [t, b] = x === 'top' ? [`-${mt}`, '0'] : ['0', `-${mt}`];
	const [l, r] = y === 'left' ? [`-${ml}`, '0'] : ['0', `-${ml}`];
	return {
		[x]: '50%',
		[y]: '50%',
		width,
		height,
		margin: [t, r, b, l].join(' ')
	};
}
