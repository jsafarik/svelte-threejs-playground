<script lang="ts">
	import * as THREE from 'three';
	import { Scene } from '$lib/scene';
	import { onMount } from 'svelte';

	let canvas: HTMLElement;

	let cube: THREE.Mesh;

	const setup = (scene: Scene) => {
		const geometry = new THREE.BoxGeometry();
		const material = new THREE.MeshBasicMaterial({ color: 0xff5012 });
		cube = new THREE.Mesh(geometry, material);
		scene.add3dObject(cube);
		scene.camera.position.z = 4;
	};

	const draw = () => {
		cube.rotation.x += 0.01;
		cube.rotation.y += 0.01;
	};

	onMount(() => {
		const scene = new Scene(canvas, setup, draw);
		scene.run();
	});
</script>

<canvas bind:this={canvas} />
