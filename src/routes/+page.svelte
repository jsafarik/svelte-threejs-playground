<script lang="ts">
	import Menu from '$lib/Menu.svelte';
	import WebGL from 'three/addons/capabilities/WebGL.js';

	export let data;
</script>

{#if WebGL.isWebGLAvailable()}
<div>
	<Menu input={data} />
</div>
{:else}
	<span>WebGL is not supported</span>
{/if}

<style>
	div {
		display: flex;
		width: 100%;
		min-height: 100vh;
		overflow: hidden;
		background-color: #202020;
		color: #ddd;
	}
</style>
