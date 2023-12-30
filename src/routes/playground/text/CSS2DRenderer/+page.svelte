<script lang="ts">
	import * as THREE from 'three';
	import { Scene } from '$lib/scene';
	import Renderer from '$lib/Renderer.svelte';
	import { CSS2DObject, CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer.js';

	let cube: THREE.Mesh;
	let css2dTextWrapper: HTMLElement;
	let css2dContent: HTMLElement;
	let css2dRenderer: CSS2DRenderer;

	const setup = (scene: Scene) => {
		const geometry = new THREE.BoxGeometry();
		const material = new THREE.MeshBasicMaterial({ color: 0xff5012 });
		cube = new THREE.Mesh(geometry, material);
		scene.addObject(cube);
		scene.camera.position.z = 4;

		const css2dContentObject = new CSS2DObject(css2dContent);
		css2dContentObject.position.set(0, 1, 0);
		cube.add(css2dContentObject);

		css2dRenderer = new CSS2DRenderer({ element: css2dTextWrapper });
		css2dRenderer.setSize(window.innerWidth, window.innerHeight);
	};

	const draw = (scene: Scene) => {
		cube.rotation.x += 0.01;
		cube.rotation.y += 0.01;

		css2dRenderer.render(scene.scene, scene.camera);
	};
</script>

<span bind:this={css2dTextWrapper}>
	<div bind:this={css2dContent}>CSS2DRenderer<br />(could also be created dynamically)</div>
</span>
<Renderer {setup} {draw} />

<style>
	span {
		position: absolute;
		top: 0px;
		color: #ffffff;
		font-family: sans-serif;
		text-align: center;
	}
</style>
