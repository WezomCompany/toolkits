/**
 * Returns string font-face src value
 * @example
 *  const src = jssFontFaceSrc('fonts/my.woff2', 'fonts/my.woff');
 *  // => "url('/fonts/my.woff2') format('woff2'), url('/fonts/my.woff') format('woff')"
 */
export default function (woff2: string, woff: string): string {
	return `url('${woff2}') format('woff2'), url('${woff}') format('woff')`;
}
