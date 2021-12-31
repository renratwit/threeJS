import './style.css'
import * as THREE from 'three'
import { PointLightHelper } from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import {createOPiece, createIPiece, createJPiece, createLPiece, createSPiece, createZPiece, createTPiece} from './tetrominos.js'

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector("#bg")
})

const controls = new OrbitControls(camera, renderer.domElement)

renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)
camera.position.setZ(30)

renderer.render(scene, camera)

//
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

// scene.add(createSPiece())
// scene.add(createZPiece())
// scene.add(createJPiece())
// scene.add(createLPiece())
// scene.add(createIPiece())
// scene.add(createOPiece())
// scene.add(createTPiece())



let pieces = []

for (var  i = 0; i <= 15; i++) {
  var p = createOPiece()
  p.position.x = getRandomArbitrary(-500, 500)
  p.position.y = getRandomArbitrary(-500, 500)
  p.position.z = getRandomArbitrary(-500, 500)
  pieces.push(p)
  scene.add(p)

  p = createTPiece()
  p.position.x = getRandomArbitrary(-500, 500)
  p.position.y = getRandomArbitrary(-500, 500)
  p.position.z = getRandomArbitrary(-500, 500)
  pieces.push(p)
  scene.add(p)

}

function moveCamera() {
  const t = document.body.getBoundingClientRect().top
  pieces.forEach(p => {
    
  p.rotation.x += 0.05
  p.rotation.y += 0.05
  p.rotation.z += 0.05

  p.position.x += -0.05
  p.position.y += -0.05
  p.position.z += -0.5

  camera.position.z = t * -0.01
  camera.position.x = t * -0.0002
  camera.position.y = t * -0.0002
  })
}

document.body.onscroll = moveCamera

//


const ambientLight = new THREE.AmbientLight(0xffffff)
const gridHelper = new THREE.GridHelper(500, 100)
// scene.add(ambientLight, gridHelper)

const animate = () => {
  requestAnimationFrame(animate);
  controls.update()
  renderer.render(scene, camera)
}

animate()