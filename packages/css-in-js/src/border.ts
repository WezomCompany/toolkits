/**
 * Setting border values a little more declarative
 * @example
 *  jssBorder(2); // => '2px solid'
 *  jssBorder('0.25rem'); // => '0.25rem solid'
 *  jssBorder(3, 'double'); // => '3px double'
 *  // instead of concat `1px solid ${myColorVar}`
 *  jssBorder(1, 'solid', myColorVar); // => '1px solid #f00'
 */
export function jssBorder(
	width: string | number,
	style:
		| 'none'
		| 'hidden'
		| 'dotted'
		| 'dashed'
		| 'solid'
		| 'double'
		| 'groove'
		| 'ridge'
		| 'inset'
		| 'outset' = 'solid',
	color?: string
): string {
	const w = typeof width === 'number' ? `${width}px` : width;
	const c = typeof color === 'string' && color.length > 0 ? ` ${color}` : '';
	return `${w} ${style + c}`;
}
