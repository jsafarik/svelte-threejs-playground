<script lang="ts">
	import * as THREE from 'three';
	import { Scene } from '$lib/scene';
	import Renderer from '$lib/Renderer.svelte';
	import { CSS3DObject, CSS3DRenderer } from 'three/examples/jsm/renderers/CSS3DRenderer.js';

	let cube: THREE.Mesh;
	let css3dTextWrapper: HTMLElement;
	let css3dContent: HTMLElement;
	let css3dRenderer: CSS3DRenderer;

	const setup = (scene: Scene) => {
		const geometry = new THREE.BoxGeometry();
		const material = new THREE.MeshBasicMaterial({ color: 0xff5012 });
		cube = new THREE.Mesh(geometry, material);
		scene.addObject(cube);
		scene.camera.position.z = 4;

		const css3dContentObject = new CSS3DObject(css3dContent);
		css3dContentObject.position.set(0, 1, 0);
		css3dContentObject.scale.set(0.1, 0.1, 0.1);
		cube.add(css3dContentObject);

		css3dRenderer = new CSS3DRenderer({ element: css3dTextWrapper });
		css3dRenderer.setSize(window.innerWidth, window.innerHeight);
	};

	const draw = (scene: Scene) => {
		cube.rotation.x += 0.01;
		cube.rotation.y += 0.01;

		css3dRenderer.render(scene.scene, scene.camera);
	};
</script>

<span bind:this={css3dTextWrapper}>
	<div bind:this={css3dContent}>CSS3DRenderer<br />(could also be created dynamically)</div>
</span>
<Renderer {setup} {draw} />

<style>
	span {
		position: absolute;
		top: 0px;
		color: #ffffff;
		font-family: sans-serif;
		text-align: center;
		font-size: 2pt;
	}
</style>
