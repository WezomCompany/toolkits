import { promiseSleep } from '../index';

describe('Should sleep', () => {
	test('Should resolve correctly. Case #1', () => {
		let result = false;
		return promiseSleep(100)
			.then(() => (result = true))
			.catch(() => (result = false))
			.finally(() => {
				expect(result).toBeTruthy();
			});
	});
});
