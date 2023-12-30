<script lang="ts">
	import { Scene, type Draw, type Setup } from '$lib/scene';
	import { onDestroy, onMount } from 'svelte';

	export let setup: Setup;
	export let draw: Draw = undefined;

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
