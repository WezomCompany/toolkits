export default function (woff2: string, woff: string): string {
	return `url('${woff2}') format('woff2'), url('${woff}') format('woff')`;
}
