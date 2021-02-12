import { arrayClone, arraySimpleRandomFn } from '../index';

describe('Should clone arrays correctly', () => {
	const sample = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

	for (let i = 0; i < 50; i++) {
		test('Randomize array. Case #' + (i + 1), () => {
			const randomized = arrayClone(sample).sort(arraySimpleRandomFn);
			expect(randomized).not.toEqual(sample);
		});
	}
});
