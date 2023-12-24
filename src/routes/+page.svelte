<script lang="ts">
	export let data
</script>

<ul>
	{#each data.keys as key}
		<li><a href="/playground/{key}">{key}</a></li>
	{/each}
</ul>
