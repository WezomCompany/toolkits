import { jssUnitLess } from './units';

/**
 * @example
 *  jssAbsoluteSquare(54);
 *  // returns
 *  {
 *      top: '23%',
 *      left: '23%',
 *      width: '54%',
 *      height: '54%'
 *  }
 *
 *  jssAbsoluteSquare(100);
 *  // returns
 *  {
 *      top: '0%',
 *      left: '0%',
 *      width: '100%',
 *      height: '100%'
 *  }
 *
 *  jssAbsoluteSquare('120%');
 *  // returns
 *  {
 *      top: '-10%',
 *      left: '-10%',
 *      width: '120%',
 *      height: '120%'
 *  }
 */
export default function (
	percent: string | number
): {
	top: string;
	left: string;
	width: string;
	height: string;
} {
	const value = jssUnitLess(percent);
	const diff = (100 - value) / 2;
	return {
		top: diff + '%',
		left: diff + '%',
		width: value + '%',
		height: value + '%'
	};
}
