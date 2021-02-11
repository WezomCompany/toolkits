/**
 * Sleep some milliseconds and resolve promise
 * @example
 *  promiseSleep(500).then(() => tryAgainSomeMethod());
 *  // or
 *  async function fakeSubmit () {
 *      await promiseSleep(300);
 *      return true;
 *  }
 */
export default function (ms: number): Promise<void> {
	return new Promise((resolve) => setTimeout(resolve, ms));
}
