/**
 * Getting first not nullable item from given array data
 * @immutable
 * @example
 *  arrayGetFirstNotNullableItem([1, null, 2, undefined, 3, false, 0]); // => 1
 *  arrayGetFirstNotNullableItem([null, null, undefined, 3, false, 0]); // => 3
 *
 *  // StrictZeroIndex example
 *  arrayGetFirstNotNullableItem([1, null, 2, undefined, 3, false, 0], true); // => 1
 *  arrayGetFirstNotNullableItem([null, null, undefined, 3, false, 0], true); // => undefined
 *
 *  // Nullable data example
 *  arrayGetFirstNotNullableItem(null); // => undefined
 *  arrayGetFirstNotNullableItem([null, undefined, null]); // => undefined
 *
 *  // -------------------
 *
 *  // Custom predicate
 *  interface A {x: string;y: string; }
 *  type B = Partial<A>
 *
 *  // must find on 2 index                ✕     ✕           ✔︎                   ✕
 * 	const data: (A | B | null)[] | null = [null, { x: '1' }, { x: '3', y: '4' }, { y: '2' }];
 * 	const result = arrayGetFirstNotNullableItem(
 * 		data,
 * 		false,
 * 		(item): item is A => item != null && 'y' in item
 * 	);
 *
 * 	// strict: check only 0 index          ✕           ✕      ✔︎                   ✕
 * 	const data: (A | B | null)[] | null = [{ x: '1' }, null, { x: '3', y: '4' }, { y: '2' }];
 * 	const result = arrayGetFirstNotNullableItem(
 * 		data,
 * 		true,
 * 		(item): item is A => item != null && 'y' in item
 * 	);
 */
export default function <T, R extends T = T>(
	data?: (T | null)[] | null,
	strictZeroIndex?: boolean,
	predicate: (
		this: void,
		value: T | null | undefined,
		index: number,
		array: (T | null | undefined)[]
	) => value is R = (value): value is R => value != null
): R | undefined {
	if (data == null) {
		return undefined;
	}
	if (Array.isArray(data)) {
		if (strictZeroIndex) {
			const first = data[0];
			return predicate(first, 0, data) ? first : undefined;
		} else {
			return data.find(predicate);
		}
	}
	return undefined;
}
