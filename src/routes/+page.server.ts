export function load(): { keys: string[] } {
	const scripts = import.meta.glob('./playground/*/+page.svelte');
	const keys = Object.keys(scripts).map((key) => key.replace("./playground/", "").replace(/\/.*/, ""));

	return {
		keys
	};
}
