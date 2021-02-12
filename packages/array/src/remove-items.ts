import arrayClone from './clone';

/**
 * Clones an array and removes items
 * @immutable
 */
export default function <T = any>(
	array: T[],
	items: T[],
	predicate = (clone: T[], item: T): number => clone.indexOf(item)
): T[] {
	const clone = arrayClone(array);
	items.forEach((item) => {
		const index = predicate(clone, item);
		if (index >= 0) {
			clone.splice(index, 1);
		}
	});
	return clone;
}
