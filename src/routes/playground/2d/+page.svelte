<script lang="ts">
	import * as THREE from 'three';
	import { Scene } from '$lib/scene';
	import Renderer from '$lib/Renderer.svelte';

	const setup = (scene: Scene) => {
		scene.camera.position.set(0, 0, 50);
		scene.camera.lookAt(0, 0, 0);

		// According to https://threejs.org/docs/index.html#api/en/materials/LineBasicMaterial
		// linewidth might be always 1 on some platforms
		// linejoin & linecap are both ignored by WebGL renderer
		const material = new THREE.LineBasicMaterial({
			color: 0xff5012,
			linewidth: 15
		});

		const points = [];
		points.push(
			new THREE.Vector3(10, -10, 0),
			new THREE.Vector3(-10, -10, 0),
			new THREE.Vector3(-10, 0, 0),
			new THREE.Vector3(10, 0, 0),
			new THREE.Vector3(0, 10, 0),
			new THREE.Vector3(-10, 0, 0),
			new THREE.Vector3(10, -10, 0),
			new THREE.Vector3(10, 0, 0),
			new THREE.Vector3(-10, -10, 0)
		);

		const geometry = new THREE.BufferGeometry().setFromPoints(points);
		const line = new THREE.Line(geometry, material);
		scene.addObject(line);
	};
</script>

<Renderer {setup} />
