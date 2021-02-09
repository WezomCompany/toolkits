// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import { fontFaceSrc } from '../index';
import { functionSignatureTest } from '@wezom/toolkit-jest';

// -----------------------------------------------------------------------------
// Tests
// -----------------------------------------------------------------------------

describe('Should return correct value', () => {
	functionSignatureTest(fontFaceSrc, [
		{
			parameters: ['/fonts/my.woff2', '/fonts/my.woff'],
			expected:
				"url('/fonts/my.woff2') format('woff2'), url('/fonts/my.woff') format('woff')"
		}
	]);
});
