import arrayClone from './clone';

/**
 * Clones an array and removes items by index
 * @immutable
 * @example
 * arrayRemoveByIndex(['A', 'B', 'C'], 1) // >>> ['A', 'C'];
 * arrayRemoveByIndex(['A', 'B', 'C', 'D', 'E'], 1, 3) // >>> ['A', 'E'];
 */
export default function <T = any>(
	array: T[],
	index: number,
	deleteCount = 1
): T[] {
	const clone = arrayClone(array);
	clone.splice(index, deleteCount);
	return clone;
}
