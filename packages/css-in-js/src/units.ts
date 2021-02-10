const unitRegExp = /px|rem|em|%|vw|vh|ms|s$/;

/**
 * Get CSS unit `px|rem|em|%|vw|vh|ms|s` from value
 * @example
 *  jssUnitExtract(100) // ''
 *  jssUnitExtract('3rem') // 'rem'
 *  jssUnitExtract(jssEm(16, [64])) // 'em'
 *  jssUnitExtract('-20px') // 'px'
 *  jssUnitExtract('56.25%') // '%'
 */
export function jssUnitExtract(value: string | number): string {
	if (typeof value === 'string') {
		const match = unitRegExp.exec(value);
		if (match !== null) {
			return match[0];
		}
	}
	return '';
}

/**
 * Remove CSS unit `px|rem|em|%|vw|vh|ms|s` and receive number value
 * @example
 *  jssUnitLess('3rem') // 4
 *  jssUnitLess(jssEm(16, [64])) // 4
 *  jssUnitLess('-20px') // -20
 *  jssUnitLess('56.25%') // 56.25
 */
export function jssUnitLess(value: string | number): number {
	if (typeof value === 'string') {
		return Number(value.replace(unitRegExp, ''));
	}
	return value;
}
