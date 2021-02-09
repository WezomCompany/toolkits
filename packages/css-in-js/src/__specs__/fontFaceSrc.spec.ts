// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import { fontFaceSrc } from '../index';

// -----------------------------------------------------------------------------
// Tests
// -----------------------------------------------------------------------------

describe('Should return correct value', () => {
	const testCases: {
		parameters: Parameters<typeof fontFaceSrc>;
		expected: ReturnType<typeof fontFaceSrc>;
	}[] = [
		{
			parameters: ['/fonts/regular.woff2', '/fonts/regular.woff'],
			expected:
				"url('/fonts/regular.woff2') format('woff2'), url('/fonts/regular.woff') format('woff')"
		}
	];

	testCases.forEach(({ parameters, expected }, i) => {
		test(`Test case #${i + 1}`, () => {
			const result = fontFaceSrc(...parameters);
			expect(result).toStrictEqual(expected);
		});
	});
});
