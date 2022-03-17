import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
//import {PointerLockControls} from 'three/examples/jsm/controls/PointerLockControls.js'; <- Optional

const aspectRatio /*bozo*/ = window.innerWidth / window.innerHeight;

//init CANNON
const timeStep = 1 / 60;
const world = new CANNON.World({gravity: new CANNON.Vec3(0, -9.81, 0)});

//init THREE
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, aspectRatio);
camera.setPosition(0, 10, 30)
camera.lookAt(0, 0, 0)

const renderer = new THREE.WebGL1Renderer({antialias:true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);

animate();
//end

function animate() {
    requestAnimationFrame(animate);
    renderer.setSize(window.innerWidth, window.innerHeight);
    updatePhysics();
}

function updatePhysics() {
    world.step(timeStep);
}

//unfinished
