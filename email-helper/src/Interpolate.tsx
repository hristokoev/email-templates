export const interpolate = (str: string, values: { [x: string]: string; }) => {
	return str.replace(/{([^{}]*)}/g,
		(a, b) => {
			const r = values[b];
			return typeof r === 'string' || typeof r === 'number' ? r : a;
		}
	);
};