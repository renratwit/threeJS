import './style.css'
import * as THREE from 'three'
import { PointLightHelper } from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import {createOPiece, createIPiece, createJPiece, createLPiece, createSPiece, createZPiece, createTPiece} from './tetrominos.js'

/**
 * This scripts controls the background on the webpage
 */

const scene = new THREE.Scene();
const spaceTexture = new THREE.TextureLoader().load('/res/space.jpg')
scene.background = spaceTexture;

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector("#bg")
})

renderer.setSize(window.innerWidth, window.innerHeight)

window.addEventListener('resize', () => {
  console.log('resizing')
  var width = window.innerWidth;
  var height = window.innerHeight;
  renderer.setSize(width, height)

  camera.aspect = width / height;
  camera.updateProjectionMatrix();
})

const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(5, 5, 5)
const gridHelper = new THREE.GridHelper(500, 100)
scene.add(pointLight)

// const controls = new OrbitControls(camera, renderer.domElement)

renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)
camera.position.setZ(0)
camera.position.setX(-3)
camera.position.setY(-3)

renderer.render(scene, camera)

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function randomizePiecePosition(p) {
  let num = 1000;
  p.position.x = getRandomArbitrary(-num, num)
  p.position.y = getRandomArbitrary(-num, num)
  p.position.z = getRandomArbitrary(-num, num)
  p.rotation.x = getRandomArbitrary(-num, num)
  p.rotation.y = getRandomArbitrary(-num, num)
  p.rotation.z = getRandomArbitrary(-num, num)
}

let pieces = []
/**
 * Create 26 of every piece, total of 182, Tetriminos in the background
 */
for (var  i = 0; i <= 25; i++) {
  var p = createOPiece()
  randomizePiecePosition(p)
  pieces.push(p)
  scene.add(p)

  p = createTPiece()
  randomizePiecePosition(p)
  pieces.push(p)
  scene.add(p)

  p = createLPiece()
  randomizePiecePosition(p)
  pieces.push(p)
  scene.add(p)

  p = createJPiece()
  randomizePiecePosition(p)
  pieces.push(p)
  scene.add(p)

  p = createSPiece()
  randomizePiecePosition(p)
  pieces.push(p)
  scene.add(p)

  p = createZPiece()
  randomizePiecePosition(p)
  pieces.push(p)
  scene.add(p)

  p = createIPiece()
  randomizePiecePosition(p)
  pieces.push(p)
  scene.add(p)
}

/**
 * moveCamera() dicttes the behavior executed upon camera scroll.
 */
function moveCamera() {
  let t = document.body.getBoundingClientRect().top
  // console.log(t)

  // band-aid solution
  //  Tetrimino placements at the top of client is not consistent with their position in the rest of the view.
  //  This only resets the value of 't' so it never fully reaches that bugged threshold.
  if (t === 8) t = -10

  // iterate through every piece and alter their position and rotation on queue with scroll action
  pieces.forEach(p => {
    // var y = window.scrollY;
    // console.log(y)
    
    p.rotation.x += 0.0007
    p.rotation.y += 0.004
    p.rotation.z += 0.0005
  })

  camera.position.z = t * -0.02;
  camera.position.x = t * -0.0004;
  camera.rotation.y = t * -0.0004;

  pointLight.position.set(camera.position.x, camera.position.y, camera.position.z)
}

document.body.onscroll = moveCamera
moveCamera();

//
let multiplier = 1;

const animate = () => {
  pieces.forEach(p => {
    p.rotation.x += 0.001
    p.rotation.y += 0.007
    p.rotation.z += 0.005

    let threshold = p.position.x + 500;
    if (p.position.x > threshold) multiplier = -1 * multiplier;
    if (p.position.x < p.position.x - threshold) multiplier = -1 * multiplier

    p.position.x += multiplier * 0.005

  })
  requestAnimationFrame(animate);
  // controls.update()
  renderer.render(scene, camera)
}

animate()