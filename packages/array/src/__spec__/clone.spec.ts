import { arrayClone } from '../index';

describe('Should clone arrays correctly', () => {
	const sample = [1, 2, 3];

	test('Cloned array should be the same', () => {
		const cloned = arrayClone(sample);
		expect(cloned).toEqual(sample);
	});

	test('Cloned array should NOT be the same ref', () => {
		const cloned = arrayClone(sample);
		expect(cloned === sample).toBeFalsy();
	});
});
