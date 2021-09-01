/**
 * Getting first not nullable item from given array data
 * @immutable
 * @example
 *  arrayGetFirstNotNullableItem([1, null, 2, undefined, 3, false, 0]); // => 1
 *  arrayGetFirstNotNullableItem([null, null, undefined, 3, false, 0]); // => 3
 *  // strictZeroIndex example
 *  arrayGetFirstNotNullableItem([1, null, 2, undefined, 3, false, 0], true); // => 1
 *  arrayGetFirstNotNullableItem([null, null, undefined, 3, false, 0], true); // => undefined
 *  // nullable data example
 *  arrayGetFirstNotNullableItem(null); // => undefined
 *  arrayGetFirstNotNullableItem([null, undefined, null]); // => undefined
 */
export default function <T>(
	data?: (T | null)[] | null,
	strictZeroIndex?: boolean
): T | undefined {
	if (data == null) {
		return undefined;
	}
	if (Array.isArray(data)) {
		const item = strictZeroIndex ? data[0] : data.find((item) => item != null);
		return item ?? undefined;
	}
	return undefined;
}
