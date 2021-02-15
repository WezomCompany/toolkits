/**
 * Low level method
 * @example
 *  jssChangeJoiner('0 4px auto', ' ', ', '); // => '0, 4px, auto'
 *  jssChangeJoiner('0 4px auto', ' ', '~*~'); // => '0~*~4px~*~auto' ;)
 */
export function jssSplitAndChangeJoiner(
	string: string,
	splitBy: string,
	joiner: string
): string {
	return string.split(splitBy).join(joiner);
}

/**
 * High level joiner from `' '` to new value
 * @see jssSplitAndChangeJoiner
 * @example
 *  jssChangeJoiner('0 4px auto'); // => '0, 4px, auto'
 *  jssChangeJoiner('0 4px auto', '~*~'); // => '0~*~4px~*~auto' ;)
 */
export function jssChangeJoiner(string: string, joiner = ', '): string {
	return jssSplitAndChangeJoiner(string, ' ', joiner);
}
