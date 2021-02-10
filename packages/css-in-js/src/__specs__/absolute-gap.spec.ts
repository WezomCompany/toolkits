// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import { jssAbsoluteGap } from '../index';
import { jestFunctionSignatureTest } from '@wezom/toolkit-jest';

// -----------------------------------------------------------------------------
// Tests
// -----------------------------------------------------------------------------

describe('Function signature should match specification', () => {
	jestFunctionSignatureTest(jssAbsoluteGap, [
		{
			parameters: ['10px'],
			expected: {
				width: 'auto',
				height: 'auto',
				top: '10px',
				right: '10px',
				bottom: '10px',
				left: '10px'
			}
		},
		{
			parameters: ['10px', '2em'],
			expected: {
				width: 'auto',
				height: 'auto',
				top: '10px',
				right: '2em',
				bottom: '10px',
				left: '2em'
			}
		}
	]);
});
