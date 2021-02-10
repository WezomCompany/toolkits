/**
 * @example
 *  jssAbsoluteGap('10px');
 *  // returns
 *  {
 *      width: 'auto',
 *      height: 'auto',
 *      top: '10px',
 *      right: '10px',
 *      bottom: '10px',
 *      left: '10px'
 *  }
 *
 *  jssAbsoluteGap('10px', '2em');
 *  // returns
 *  {
 *      width: 'auto',
 *      height: 'auto',
 *      top: '10px',
 *      right: '2em',
 *      bottom: '10px',
 *      left: '2em'
 *  }
 */
export default function (
	x: string,
	y = x
): {
	width: 'auto';
	height: 'auto';
	top: string;
	right: string;
	bottom: string;
	left: string;
} {
	return {
		width: 'auto',
		height: 'auto',
		top: x,
		right: y,
		bottom: x,
		left: y
	};
}
