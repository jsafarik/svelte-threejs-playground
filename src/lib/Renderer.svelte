<script lang="ts">
	import { Scene } from '$lib/scene';
	import { onDestroy, onMount } from 'svelte';

	export let setup: (scene: Scene) => void;
	export let draw: (() => void) | undefined = undefined;

	let canvas: HTMLElement;
	let scene: Scene | undefined;

	onMount(() => {
		scene = new Scene(canvas, setup, draw);
		scene.run();
	});

	onDestroy(() => {
		scene?.stop();
	});
</script>

<canvas bind:this={canvas} />
