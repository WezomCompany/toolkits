/**
 * Calculates the sum of all arguments
 * @example
 *  mathSum(1, 3, 5); // => 9
 *  mathSum(1.01, 1.02); // => 2.03
 */
export default function (...numbers: number[]): number {
	return numbers.reduce<number>((a, b) => (a * 100 + b * 100) / 100, 0);
}
