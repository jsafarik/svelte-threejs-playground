import * as THREE from 'three';

export type Setup = (scene: Scene) => void;
export type Draw = ((scene: Scene) => void) | undefined;

export class Scene {
	scene;
	camera;
	renderer;
	aspectRatio;
	setup;
	draw;
	currentAnimationFrame = 0;

	constructor(canvas: HTMLElement, setup: Setup, draw: Draw) {
		this.aspectRatio = window.innerWidth / window.innerHeight;
		this.scene = new THREE.Scene();

		this.camera = new THREE.PerspectiveCamera(50, this.aspectRatio, 0.1, 1000);
		this.camera.updateProjectionMatrix();

		this.renderer = new THREE.WebGLRenderer({ antialias: true, canvas: canvas });
		this.renderer.setSize(window.innerWidth, window.innerHeight);

		this.setup = setup;
		this.draw = draw;
	}

	addObject(object: THREE.Object3D) {
		this.scene.add(object);
	}

	run() {
		this.setup(this);
		this.renderer.render(this.scene, this.camera);
		if (this.draw) {
			this.animate();
		}
	}

	animate() {
		this.draw!(this);
		this.renderer.render(this.scene, this.camera);
		this.currentAnimationFrame = requestAnimationFrame(() => this.animate());
	}

	stop() {
		if (this.draw) {
			cancelAnimationFrame(this.currentAnimationFrame);
		}
	}
}
