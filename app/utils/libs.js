export function cls(...classes) {
	return classes.filter((c) => {
		return typeof c === 'string'
	}).join(" ")
}