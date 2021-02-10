/**
 * Correction of rounding of decimal fractions.
 * @param {number} value - some value
 * @param exp
 */
export default function (value: number, exp?: number): number {
	if (exp === undefined || exp === 0) {
		return Math.round(value);
	}

	// Shift discharges
	let _value = value.toString().split('e');
	const _number = Math.round(+`${_value[0]}e${_value[1] ? +_value[1] - exp : -exp}`);

	// Reverse shift
	_value = _number.toString().split('e');
	return +`${_value[0]}e${_value[1] ? +_value[1] + exp : exp}`;
}
