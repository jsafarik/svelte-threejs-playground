<script lang="ts">
	import WebGL from 'three/addons/capabilities/WebGL.js';

	export let data;
</script>

{#if WebGL.isWebGLAvailable()}
	<ul>
		{#each data.keys as key}
			<li><a href="/playground/{key}">{key}</a></li>
		{/each}
	</ul>
{:else}
	<span>WebGL is not supported</span>
{/if}
