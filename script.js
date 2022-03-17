import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
//import {PointerLockControls} from 'three/examples/jsm/controls/PointerLockControls.js'; <- Optional

let scene, renderer, camera, world;
const timeStep = 1 / 60;
const aspectRatio /*bozo*/ = window.innerWidth / window.innerHeight;


function main() {
    initCannon();
    initThree();
    const material = new THREE.MeshNormalMaterial();

    const boxGeo = new THREE.BoxGeometry(7, 7, 7);
    const boxMsh = new THREE.Mesh(boxGeo, material);
    scene.add(boxMsh);

    const light = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(light);
}

function initThree() {
    scene = new THREE.Scene();

    renderer = new THREE.WebGL1Renderer({antialias:true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    camera = new THREE.PerspectiveCamera(75, aspectRatio);
    camera.position.set(0, 10, 30);
    camera.lookAt(0, 0, 0);

    const controls = new OrbitControls(camera, renderer.domElement);

    animate();

    window.addEventListener('resize', onWindowResize, false);
}

function initCannon() {
    world = new CANNON.World({
        gravity: new CANNON.Vec3(0, -9.81, 0)
    });
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    world.step(timeStep);
}

function onWindowResize() {
    camera.aspect = aspectRatio;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
}

main();
