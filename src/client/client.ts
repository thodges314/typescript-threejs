import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const scene = new THREE.Scene();

scene.background = new THREE.Color(0x000000);

const camera1 = new THREE.PerspectiveCamera(75, 1, 0.1, 10);
const camera2 = new THREE.OrthographicCamera(-2, 2, 2, -2);
camera1.position.z = 2;
camera2.position.z = 2;

const canvas1 = document.getElementById("c1") as HTMLCanvasElement;
const canvas2 = document.getElementById("c2") as HTMLCanvasElement;
const canvas3 = document.getElementById("c3") as HTMLCanvasElement;
const canvas4 = document.getElementById("c4") as HTMLCanvasElement;

const renderer1 = new THREE.WebGLRenderer({ canvas: canvas1 });
renderer1.setSize(200, 200);
const renderer2 = new THREE.WebGLRenderer({ canvas: canvas2 });
renderer2.setSize(200, 200);
const renderer3 = new THREE.WebGLRenderer({ canvas: canvas3 });
renderer2.setSize(200, 200);
const renderer4 = new THREE.WebGLRenderer({ canvas: canvas4 });
renderer2.setSize(200, 200);

new OrbitControls(camera1, renderer1.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({
  color: 0x00ff00,
  wireframe: true,
});

const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

console.dir(scene);

// window.addEventListener("resize", onWindowResize, false);
// function onWindowResize() {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer2.setSize(window.innerWidth, window.innerHeight);
//   render();
// }

function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  render();
}

function render() {
  renderer1.render(scene, camera1);
  renderer2.render(scene, camera2);
  renderer3.render(scene, camera1);
  renderer4.render(scene, camera1);
}

animate();
