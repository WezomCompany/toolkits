// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import { jssAbsoluteCenter } from '../index';
import { jestFunctionSignatureTest } from '@wezom/toolkit-jest';

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
		},
		{
			parameters: ['100px', '100px', 'topLeft'],
			expected: {
				top: '50%',
				left: '50%',
				width: '100px',
				height: '100px',
				margin: '-50px 0 0 -50px'
			}
		},
		{
			parameters: ['100px', undefined, 'topLeft'],
			expected: {
				top: '50%',
				left: '50%',
				width: '100px',
				height: '100px',
				margin: '-50px 0 0 -50px'
			}
		},
		{
			parameters: ['100px', '100px', 'topRight'],
			expected: {
				top: '50%',
				right: '50%',
				width: '100px',
				height: '100px',
				margin: '-50px -50px 0 0'
			}
		},
		{
			parameters: ['100px', undefined, 'topRight'],
			expected: {
				top: '50%',
				right: '50%',
				width: '100px',
				height: '100px',
				margin: '-50px -50px 0 0'
			}
		},
		{
			parameters: ['100px', '100px', 'bottomRight'],
			expected: {
				bottom: '50%',
				right: '50%',
				width: '100px',
				height: '100px',
				margin: '0 -50px -50px 0'
			}
		},
		{
			parameters: ['100px', undefined, 'bottomRight'],
			expected: {
				bottom: '50%',
				right: '50%',
				width: '100px',
				height: '100px',
				margin: '0 -50px -50px 0'
			}
		},
		{
			parameters: ['100px', '100px', 'bottomLeft'],
			expected: {
				bottom: '50%',
				left: '50%',
				width: '100px',
				height: '100px',
				margin: '0 0 -50px -50px'
			}
		},
		{
			parameters: ['100px', undefined, 'bottomLeft'],
			expected: {
				bottom: '50%',
				left: '50%',
				width: '100px',
				height: '100px',
				margin: '0 0 -50px -50px'
			}
		}
	]);
});
