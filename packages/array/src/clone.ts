/**
 * Clones array for immutable tasks
 * @immutable
 */
export default function <T = any>(array: T[]): T[] {
	return array.slice();
}
