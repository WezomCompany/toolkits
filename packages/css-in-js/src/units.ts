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

/**
 * Invert value sign
 * @example
 *  jssUnitRevertSign(-20) // 20
 *  jssUnitRevertSign('3rem') // '-3rem'
 *  jssUnitRevertSign('56.25%') // '-56.25%'
 *  jssUnitRevertSign('-4px 4px') // '4px -4px'
 *  jssUnitRevertSign(jssEm(16, 64, -64)) // '-4em 4em'
 *  jssUnitRevertSign('-4px, 4px') // '4px, -4px'
 *  jssUnitRevertSign('-4px, 4px 4px, -5px, -6 -7 -8, 99.9%') // '4px, -4px -4px, 5px, 6 7 8, -99.9%'
 */
export function jssUnitRevertSign(value: string | number): string | number {
	if (typeof value === 'number') {
		return value * -1;
	} else {
		return value
			.split(', ')
			.map((val) =>
				val
					.split(' ')
					.map((v) => {
						const unit = jssUnitExtract(v);
						const number = jssUnitLess(v);
						return number * -1 + unit;
					})
					.join(' ')
			)
			.join(', ');
	}
}
