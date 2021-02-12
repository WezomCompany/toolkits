// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import { jssAbsoluteSquare } from '../index';
import { jestFunctionSignatureTest } from '@wezom/toolkit-jest-cjs';

// -----------------------------------------------------------------------------
// Tests
// -----------------------------------------------------------------------------

describe('Function signature should match specification', () => {
	jestFunctionSignatureTest(jssAbsoluteSquare, [
		{
			parameters: [54],
			expected: {
				top: '23%',
				left: '23%',
				width: '54%',
				height: '54%'
			}
		},
		{
			parameters: [100],
			expected: {
				top: '0%',
				left: '0%',
				width: '100%',
				height: '100%'
			}
		},
		{
			parameters: ['120%'],
			expected: {
				top: '-10%',
				left: '-10%',
				width: '120%',
				height: '120%'
			}
		}
	]);
});
