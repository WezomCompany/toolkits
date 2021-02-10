const fs = require('fs');
const fromCWD = require('from-cwd');
const typedoc = require('typedoc');

const toolsFilePath = fromCWD('README.md');
const toolsTypeDocPath = fromCWD('.cache/typedoc.normalized.json');
const toolsFileContent = fs.readFileSync(toolsFilePath).toString();
const toolsTypeDoc = JSON.parse(fs.readFileSync(toolsTypeDocPath).toString());

const regExp = /(\[comment]: <> \(AUTODOC-TOOL-START::(.+)\))((?!\[comment]: <> \(AUTODOC-TOOL-END\)).|\n)*(\[comment]: <> \(AUTODOC-TOOL-END\))/gm;
const newToolsFileContent = toolsFileContent.replace(regExp, (str, g1, g2, g3, g4) => {
	const blocks = [''];
	const doc = toolsTypeDoc[g2];
	if (!!doc) {
		doc.signatures.map((signature) => {
			const { shortText = '', tags = [] } = signature.comment;
			blocks.push(
				shortText,
				...tags
					.map(({ tag, text }) => {
						if (tag === 'example') {
							return `_Examples:_\n\n\`\`\`ts${text}\n\`\`\``;
						}
					})
					.filter(Boolean)
			);
		});
	}
	return [g1, ...blocks, g4].join('\n\n');
});

if (newToolsFileContent !== toolsFileContent) {
	fs.writeFileSync(toolsFilePath, newToolsFileContent);
}
