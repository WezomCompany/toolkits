const fs = require('fs');
const glob = require('glob');
const fromCWD = require('from-cwd');
const crypto = require('crypto');
const argv = require('yargs').argv;

/**
 * @param {string} str
 * @return {number}
 */
function hashCode (str) {
	var hash = 0, i, chr;
	if (str.length === 0) return hash;
	for (i = 0; i < str.length; i++) {
		chr   = str.charCodeAt(i);
		hash  = ((hash << 5) - hash) + chr;
		hash |= 0; // Convert to 32bit integer
	}
	return hash;
}

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
	shasum.update(code)
	fs.writeFileSync(hashFile, shasum.digest('hex'));
}

if (typeof argv.i !== 'string' || typeof argv.o !== 'string') {
	throw new Error('Specify -i and -o values!');
} else {
	updateBuildHash(fromCWD(argv.i), fromCWD(argv.o));
}
