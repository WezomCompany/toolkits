import { jestFunctionSignatureTest } from '@wezom/toolkit-jest';
import { arrayFilterUnique } from '../index';

describe('Function signature should match specification', () => {
	jestFunctionSignatureTest(arrayFilterUnique, [
		{
			parameters: [
				['🚗', '🛸', '🚐', '🚁', '🚁', '🚐', '🚐', '🛵', '🚁', '🛵', '🛸', '🚗']
			],
			expected: ['🚗', '🛸', '🚐', '🚁', '🛵']
		},
		{
			parameters: [
				[
					{ icon: '🚗' },
					{ icon: '🚐' },
					{ icon: '🚐' },
					{ icon: '🚗' },
					{ icon: '🚁' },
					{ icon: '🛵' },
					{ icon: '🚁' },
					{ icon: '🚁' },
					{ icon: '🛸' },
					{ icon: '🛵' },
					{ icon: '🛵' },
					{ icon: '🛵' },
					{ icon: '🚁' }
				],
				(item: any, i, array): boolean =>
					// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
					array.findIndex((_item: any) => _item.icon === item.icon) === i
			],
			expected: [
				{ icon: '🚗' },
				{ icon: '🚐' },
				{ icon: '🚁' },
				{ icon: '🛵' },
				{ icon: '🛸' }
			]
		}
	]);
});
