import { functionSignatureTest } from '../index';

const x = (y: boolean, z: number, w: number): number | null => (y ? z + w : null);

describe('Function signature must match specification', () => {
	functionSignatureTest(x, [
		{
			parameters: [true, 4, 5],
			expected: 9
		},
		{
			parameters: [false, 4, 5],
			expected: null
		}
	]);
});
