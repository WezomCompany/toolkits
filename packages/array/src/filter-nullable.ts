/**
 * Filter `null` and `undefined` array items
 * @immutable
 * @example
 *  arrayFilterNullable([1, null, 2, undefined, 3, false, 0]); // => [1, 2, 3, false, 0]
 *  arrayFilterNullable(null); // => []
 *  arrayFilterNullable(); // => []
 */
export default function <T>(data?: (T | null)[] | null): T[] {
	if (data == null || !Array.isArray(data)) {
		return [];
	}
	return data.filter((item): item is T => item != null);
}
