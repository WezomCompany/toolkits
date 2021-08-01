/**
 * Set CSS function `var` body
 * @example
 *  jssVar('--top') // 'var(--top)'
 *  jssVar('top') // 'var(--top)'
 *  jssVar('--color', 'red') // 'var(--color, red)'
 *
 *  const myVarsDict = {
 *    propA: 'myPropA',
 *    propB: 'myPropB'
 *  };
 *
 *  jssVar(myVarsDict.propA, 10) // 'var(--myPropA, 10)'
 */
export function jssVar(varName: string, fallback?: string | number): string {
	const name = varName.startsWith('--') ? varName : `--${varName}`;
	const args = fallback == null ? [name] : [name, fallback];
	return `var(${args.join(', ')})`;
}
