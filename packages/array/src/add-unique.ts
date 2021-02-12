import arrayClone from './clone';

/**
 * Clones an array and puts only unique elements there
 * @immutable
 */
export default function <T = any>(
	array: T[],
	items: T[],
	predicate = (clone: T[], item: T): boolean => clone.indexOf(item) === -1
): T[] {
	const clone = arrayClone(array);
	items.forEach((item) => {
		if (predicate(clone, item)) {
			clone.push(item);
		}
	});
	return clone;
}
