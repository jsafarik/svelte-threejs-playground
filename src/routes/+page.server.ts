import type { Node } from '$lib/node';

export function load(): Node {
	const scripts = import.meta.glob('./playground/**/+page.svelte');
	const keys = Object.keys(scripts)
		.map((key) => key.replace('./playground/', '').replace('/+page.svelte', ''))
		.reduce((acc: Node, cur) => {
			let accPointer = acc;
			cur.split('/').forEach((key, i) => {
				if (i == cur.split('/').length - 1) {
					accPointer[key] = cur;
				} else {
					accPointer[key] = accPointer[key] || {};
					accPointer = accPointer[key] as Node;
				}
			});
			return acc;
		}, {});
	return keys;
}
