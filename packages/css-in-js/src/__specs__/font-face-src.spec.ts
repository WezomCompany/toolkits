// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import { jssFontFaceSrc } from '../index';
import { jestFunctionSignatureTest } from '@wezom/toolkit-jest';

// -----------------------------------------------------------------------------
// Tests
// -----------------------------------------------------------------------------

describe('Function signature should match specification', () => {
	jestFunctionSignatureTest(jssFontFaceSrc, [
		{
			parameters: ['/fonts/my.woff2', '/fonts/my.woff'],
			expected:
				"url('/fonts/my.woff2') format('woff2'), url('/fonts/my.woff') format('woff')"
		}
	]);
});
