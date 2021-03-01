const fs = require('fs');
const glob = require('glob');
const fromCWD = require('from-cwd');
const crypto = require('crypto');
const argv = require('yargs').argv;

/**
 * @param {string} pattern
 * @param {string} hashFile
 * @returns {void}
 */
function updateBuildHash(pattern, hashFile) {
	const shasum = crypto.createHash('md5');
	const code = glob
		.sync(pattern)
		.filter((file) => fs.statSync(file).isFile())
		.map((file) => fs.readFileSync(file).toString())
		.join('\n==========================\n');
	shasum.update(code);
	fs.writeFileSync(hashFile, shasum.digest('hex'));
}

if (typeof argv.i !== 'string' || typeof argv.o !== 'string') {
	throw new Error('Specify -i and -o values!');
} else {
	updateBuildHash(fromCWD(argv.i), fromCWD(argv.o));
}
