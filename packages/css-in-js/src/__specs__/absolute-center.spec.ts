// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import { jssAbsoluteCenter } from '../index';
import { jestFunctionSignatureTest } from '@wezom/toolkit-jest-cjs';

// -----------------------------------------------------------------------------
// Tests
// -----------------------------------------------------------------------------

describe('Function signature should match specification', () => {
	jestFunctionSignatureTest(jssAbsoluteCenter, [
		{
			parameters: ['3rem'],
			expected: {
				top: '50%',
				left: '50%',
				width: '3rem',
				height: '3rem',
				margin: '-1.5rem 0 0 -1.5rem'
			}
		},
		{
			parameters: ['4rem', '60px'],
			expected: {
				top: '50%',
				left: '50%',
				width: '4rem',
				height: '60px',
				margin: '-30px 0 0 -2rem'
			}
		}
	]);
});
