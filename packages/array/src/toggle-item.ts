import arrayClone from './clone';

/**
 * Adds an element to an array or removes if the array already has such an element
 * @immutable
 * @example
 *  arrayToggleItem([1, 2, 3], 9); // => [1, 2, 3, 9]
 *  arrayToggleItem([1, 2, 3, 9], 2); // => [1, 3, 9]
 *  arrayToggleItem(
 *      [{ x: 1 }, { x: 2 }, { x: 3 }],
 *      { x: 2 },
 *      (array, item) => array.findIndex((el) => el.x === item.x),
 *  ); // => [{ x: 1 }, { x: 3 }]
 */
export default function <T = any>(
	array: T[],
	item: T,
	predicate = (array: T[], item: T): number => array.indexOf(item)
): T[] {
	const clone = arrayClone(array);
	const index = predicate(clone, item);
	if (index >= 0) {
		clone.splice(index, 1);
	} else {
		clone.push(item);
	}
	return clone;
}
