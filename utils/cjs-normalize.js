const fs = require('fs');
const glob = require('glob');

const regExp = /'@wezom\/toolkit-(array|css-in-js|math|promise)'/g;

function normalizeImports(name) {
	console.log(`Normalize @wezom/toolkit-${name}-cjs`);
	glob.sync(`packages/${name}-cjs/dist/**/*{.d.ts,.js}`).forEach((file) => {
		const content = fs.readFileSync(file).toString();
		if (regExp.test(content)) {
			fs.writeFileSync(
				file,
				content.replace(regExp, (str, name) => `'@wezom\/toolkit-${name}-cjs'`)
			);
		}
	});
}

normalizeImports('array');
normalizeImports('css-in-js');
normalizeImports('math');
normalizeImports('promise');
