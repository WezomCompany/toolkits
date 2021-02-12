// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import { jssClamp, jssClampHack, jssMax, jssMin, jssRem } from '../index';
import { jestFunctionSignatureTest } from '@wezom/toolkit-jest';

// -----------------------------------------------------------------------------
// Tests
// -----------------------------------------------------------------------------

describe('jssClamp', () => {
	describe('Function signature should match specification', () => {
		jestFunctionSignatureTest(jssClamp, [
			{
				parameters: ['10px', '5vw', '50px'],
				expected: 'clamp(10px, 5vw, 50px)'
			},
			{
				parameters: [jssRem(16, [24]), '10%', jssRem(16, [64])],
				expected: 'clamp(1.5rem, 10%, 4rem)'
			}
		]);
	});
});

describe('jssClampHack', () => {
	describe('Function signature should match specification', () => {
		jestFunctionSignatureTest(jssClampHack, [
			{
				parameters: ['10px', '5vw', '50px'],
				expected: 'max(10px, min(5vw, 50px))'
			},
			{
				parameters: [jssRem(16, [24]), '10%', jssRem(16, [64])],
				expected: 'max(1.5rem, min(10%, 4rem))'
			}
		]);
	});
});

describe('jssMax', () => {
	describe('Function signature should match specification', () => {
		jestFunctionSignatureTest(jssMax, [
			{
				parameters: ['5vw', '50px'],
				expected: 'max(5vw, 50px)'
			},
			{
				parameters: ['5vw', jssRem(16, [64])],
				expected: 'max(5vw, 4rem)'
			}
		]);
	});
});

describe('jssMin', () => {
	describe('Function signature should match specification', () => {
		jestFunctionSignatureTest(jssMin, [
			{
				parameters: ['5vw', '50px'],
				expected: 'min(5vw, 50px)'
			},
			{
				parameters: ['5vw', jssRem(16, [64])],
				expected: 'min(5vw, 4rem)'
			}
		]);
	});
});
