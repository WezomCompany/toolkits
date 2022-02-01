/**
 * Filter `null` and `undefined` array items
 * @immutable
 * @example
 *  arrayFilterNullable([1, null, 2, undefined, 3, false, 0]); // => [1, 2, 3, false, 0]
 *  arrayFilterNullable(null); // => []
 *  arrayFilterNullable(); // => []
 *
 *  // Custom predicate. Use case example #1
 *  interface A { x: string };
 *  interface B { x: string; y: string };
 *  const data: (A | B | null)[] | null = [{ x: '1' }, { x: '2' }, null, { x: '3', y: '4' }];
 * 	const result = arrayFilterNullable(
 * 		data,
 * 		(item): item is B => item != null && 'y' in item
 * 	);
 *
 *  // Custom predicate. Use case example #3
 *  interface D { x: number; y: string };
 *  type E = Partial<D>;
 *  const data: (C | D | null)[] | null = [{ y: 1, x: '2' }, null, { x: '2' }, { y: 4 }];
 * 	const result = arrayFilterNullable(
 * 		data,
 * 		(item): item is D => item != null && item.y != null && item.x !== null
 * 	);
 */
export default function <T, R extends T = T>(
	data?: (T | null | undefined)[] | null,
	predicate: (
		value: T | null | undefined,
		index: number,
		array: (T | null | undefined)[]
	) => value is R = (item): item is R => item != null
): R[] {
	if (data == null || !Array.isArray(data)) {
		return [];
	} else {
		return data.filter(predicate);
	}
}
