<script lang="ts">
	import type { Node } from '$lib/node';

	export let input: Node;
	let open = false;
</script>

<ul>
	{#each Object.keys(input) as key}
		{#if input[key] instanceof Object}
			<li
				on:click={() => {
					open = !open;
				}}
				role="none"
				class="node"
			>
				{#if open}
					<span class="material-symbols-outlined"> keyboard_arrow_down </span>
				{:else}
					<span class="material-symbols-outlined"> keyboard_arrow_right </span>
				{/if}

				{key}
			</li>
			{#if open}
				<div class="spacer">
					<svelte:self input={input[key]} />
				</div>
			{/if}
		{:else}
			<a href={'playground/' + input[key].toString()}>
				<li>
					<span class="material-symbols-outlined"> description </span>
					{input[key].toString().split('/').length == 1
						? input[key]
						: input[key].toString().split('/').slice(-1)}
				</li>
			</a>
		{/if}
	{/each}
</ul>

<style>
	ul {
		margin: 0;
		padding: 0;
		width: 100%;
	}

	li {
		height: 50px;
		display: flex;
		align-items: center;
		padding-left: 10px;
		cursor: pointer;
	}

	li:hover {
		background-color: #292929;
	}

	.spacer {
		padding-left: 30px;
	}

	span {
		padding-right: 10px;
	}

	a,
	a:hover,
	a:visited,
	a:active {
		color: inherit;
		text-decoration: none;
	}
</style>
