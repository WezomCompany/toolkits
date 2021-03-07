/**
 * Returns new array without duplicates
 * @immutable
 * @example
 *  arrayFilterUnique(['🚗','🛸','🚐','🚁','🚁','🚐','🚐','🛵','🚁','🛵','🛸','🚗']) // => ['🚗','🛸','🚐','🚁','🛵']
 *  arrayFilterUnique([
 *      {icon: '🚗'},
 *      {icon: '🚐'},
 *      {icon: '🚐'},
 *      {icon: '🚗'},
 *      {icon: '🚁'},
 *      {icon: '🛵'},
 *      {icon: '🚁'},
 *      {icon: '🚁'},
 *      {icon: '🛸'},
 *      {icon: '🛵'},
 *      {icon: '🛵'},
 *      {icon: '🛵'},
 *      {icon: '🚁'}
 *  ]) // => [{icon: '🚗'},{icon: '🚐'},{icon: '🚁'},{icon: '🛵'},{icon: '🛸'}]
 */
export default function <T = any>(
	array: T[],
	predicate = (item: T, i: number, array: T[]): boolean => array.indexOf(item) === i
): T[] {
	return array.filter(predicate);
}
