const fs = require('fs');
const fromCWD = require('from-cwd');
const typedoc = require('typedoc');

const toolsFilePath = fromCWD('README.md');
const toolsTypeDocPath = fromCWD('.cache/typedoc.normalized.json');
const toolsFileContent = fs.readFileSync(toolsFilePath).toString();
const toolsTypeDoc = JSON.parse(fs.readFileSync(toolsTypeDocPath).toString());

const _code = (value, isRest) =>
	value === undefined ? '' : `\`${isRest ? '...' : ''}${value}\``;
const _trimCode = (value) => value.replace(/^`|`$/g, '');
const _parseTrimJoin = (arr, joiner) => arr.map(_parseType).map(_trimCode).join(joiner);
const _parseType = (docType, { isRest } = {}) => {
	switch (docType.type) {
		case 'intrinsic':
			return _code(docType.name, isRest);
		case 'reference':
			if (Array.isArray(docType.typeArguments)) {
				const tArgs = _parseTrimJoin(docType.typeArguments, ' / ');
				if (tArgs.length) {
					return _code(`${docType.name}<${tArgs}>`, isRest);
				}
			}
			return _code(docType.name, isRest);
		case 'array':
			const _type = _parseType(docType.elementType, { isRest });
			return _type ? _code(_trimCode(_type) + '[]') : _type;
		case 'intersection':
			return _code(_parseTrimJoin(docType.types, ' & '), isRest);
		case 'union':
			return _code(_parseTrimJoin(docType.types, ' │ '), isRest);
		case 'literal':
			return _code(docType.value, isRest);
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
							const dataType = _parseType(type, {
								isRest: flags.isRest
							});
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
