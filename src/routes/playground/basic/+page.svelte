<script lang="ts">
	import * as THREE from 'three';
	import { Scene } from '$lib/scene';
	import Renderer from '$lib/Renderer.svelte';

	let cube: THREE.Mesh;

	const setup = (scene: Scene) => {
		const geometry = new THREE.BoxGeometry();
		const material = new THREE.MeshBasicMaterial({ color: 0xff5012 });
		cube = new THREE.Mesh(geometry, material);
		scene.addObject(cube);
		scene.camera.position.z = 4;
	};

	const draw = () => {
		cube.rotation.x += 0.01;
		cube.rotation.y += 0.01;
	};
</script>

<Renderer {setup} {draw} />
