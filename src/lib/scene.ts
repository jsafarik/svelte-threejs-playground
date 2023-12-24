import * as THREE from 'three';

export class Scene {
	scene;
	camera;
	renderer;
	aspectRatio;
	setup;
	draw;

	constructor(canvas: HTMLElement, setup: (scene: Scene) => void, draw: () => void) {
		this.aspectRatio = window.innerWidth / window.innerHeight;
		this.scene = new THREE.Scene();

		this.camera = new THREE.PerspectiveCamera(50, this.aspectRatio, 0.1, 1000);
		this.camera.updateProjectionMatrix();

		this.renderer = new THREE.WebGLRenderer({ antialias: true, canvas: canvas });
		this.renderer.setSize(window.innerWidth, window.innerHeight);

		this.setup = setup;
		this.draw = draw;
	}

	add3dObject(object: THREE.Object3D) {
		this.scene.add(object);
	}

	run() {
		this.setup(this);
		this.animate();
	}

	animate() {
		this.draw();
		this.renderer.render(this.scene, this.camera);
		requestAnimationFrame(() => this.animate());
	}
}