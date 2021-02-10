const fs = require('fs');
const fromCWD = require('from-cwd');
const typedoc = require('typedoc');

const toolsFilePath = fromCWD('README.md');
const toolsTypeDocPath = fromCWD('.cache/typedoc.normalized.json');
const toolsFileContent = fs.readFileSync(toolsFilePath).toString();
const toolsTypeDoc = JSON.parse(fs.readFileSync(toolsTypeDocPath).toString());

const _code = (value) => (value === undefined ? '' : `\`${value}\``);
const _trimCode = (value) => (value.length >= 3 ? value.slice(1, -1) : '');
const _parseType = (docType) => {
	switch (docType.type) {
		case 'intrinsic':
		case 'reference':
			return _code(docType.name);
		case 'array':
			switch (docType.elementType.type) {
				case 'reference':
					return _code(docType.elementType.name + '[]');
			}
			break;
		case 'intersection':
			return _code(docType.types.map(_parseType).map(_trimCode).join(' & '));
		case 'union':
			return _code(docType.types.map(_parseType).map(_trimCode).join(' / '));
		default:
			return '';
	}
};

const regExp = /(\[comment]: <> \(AUTODOC-TOOL-START::(.+)\))((?!\[comment]: <> \(AUTODOC-TOOL-END\)).|\n)*(\[comment]: <> \(AUTODOC-TOOL-END\))/gm;
const newToolsFileContent = toolsFileContent.replace(regExp, (str, g1, g2, g3, g4) => {
	const blocks = [''];
	const doc = toolsTypeDoc[g2];
	if (!!doc) {
		doc.signatures.map((signature) => {
			const {
				comment: { shortText = '', tags = [] } = {},
				parameters = [],
				type: rType = {}
			} = signature;

			const parametersTable = [];
			if (parameters.length > 0) {
				parametersTable.push('_Parameters:_\n');
				parametersTable.push(
					'| Name | Data type | Argument | Default value  | Description '
				);
				parametersTable.push(
					'| ---- | --------- | -------- | -------------  | ----------- '
				);
				parametersTable.push(
					...parameters
						.map((parameter) => {
							const { flags = {}, comment = {}, type = {} } = parameter;
							const dataType = _parseType(type);
							return (
								'| ' +
								[
									parameter.name,
									dataType,
									flags.isOptional || parameter.defaultValue
										? '_optional_'
										: '',
									_code(parameter.defaultValue),
									comment.text || ''
								].join(' | ')
							);
						})
						.filter(Boolean)
				);
			}

			let returnType = _parseType(rType);
			if (returnType) {
				returnType = '_Returns:_ ' + returnType;
			}

			blocks.push(
				shortText,
				parametersTable.join('\n'),
				returnType,
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
