import './style.css'
import * as THREE from 'three'
import { PointLightHelper } from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector("#bg")
})

renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)
camera.position.setZ(30)

renderer.render(scene, camera)

//
function createOPiece() {
  const material = new THREE.MeshBasicMaterial({color: 0xCCB511 });

  const group = new THREE.Group()
  const geometry = new THREE.BoxGeometry(10, 10, 10)

  const cubeA = new THREE.Mesh(geometry, material)
  cubeA.position.set(10, 10, 0);

  const cubeB = new THREE.Mesh(geometry, material)
  cubeB.position.set(10, 20.15, 0)

  const cubeC = new THREE.Mesh(geometry, material)
  cubeC.position.set(20.15, 10, 0)

  const cubeD = new THREE.Mesh(geometry, material)
  cubeD.position.set(20.15, 20.15, 0)

  group.add(cubeA)
  group.add(cubeB)
  group.add(cubeC)
  group.add(cubeD)

  group.rotation.y = 90
  group.position.x = 60
  return group;
}
scene.add(createOPiece())

function createTPiece() {
  const material = new THREE.MeshBasicMaterial({color: 0x7734eb });
  const group = new THREE.Group()
  const geometry = new THREE.BoxGeometry(10, 10, 10)

  const cubeA = new THREE.Mesh(geometry, material)
  cubeA.position.set(10, 10, 0);
  group.add(cubeA)

  const cubeB = new THREE.Mesh(geometry, material)
  cubeB.position.set(10, 20.15, 0)
  group.add(cubeB)

  const cubeC = new THREE.Mesh(geometry, material)
  cubeC.position.set(10, 20.15, 10)
  group.add(cubeC)

  const cubeD = new THREE.Mesh(geometry, material)
  cubeD.position.set(10, 20.15, -10)
  group.add(cubeD)

  group.position.x = 70
  group.position.y = 30

  return group;
}
scene.add(createTPiece())

function createIPiece() {
  const material = new THREE.MeshBasicMaterial({color: 0x21cceb });
  const group = new THREE.Group()
  const geometry = new THREE.BoxGeometry(10, 10, 10)

  const cubeA = new THREE.Mesh(geometry, material)
  cubeA.position.set(10, 10, 0);
  group.add(cubeA)

  const cubeB = new THREE.Mesh(geometry, material)
  cubeB.position.set(10, 20.15, 0);
  group.add(cubeB)

  const cubeC = new THREE.Mesh(geometry, material)
  cubeC.position.set(10, 30.3, 0);
  group.add(cubeC)

  const cubeD = new THREE.Mesh(geometry, material)
  cubeD.position.set(10, 40.45, 0);
  group.add(cubeD)

  group.position.x = 45
  group.position.y = 45

  return group
}
scene.add(createIPiece())

function createLPiece() {
  const material = new THREE.MeshBasicMaterial({color: 0xdb7b14 });
  const group = new THREE.Group()
  const geometry = new THREE.BoxGeometry(10, 10, 10)

  const cubeA = new THREE.Mesh(geometry, material)
  cubeA.position.set(10, 10, 0);
  group.add(cubeA)

  const cubeB = new THREE.Mesh(geometry, material)
  cubeB.position.set(10, 20.15, 0);
  group.add(cubeB)

  const cubeC = new THREE.Mesh(geometry, material)
  cubeC.position.set(10, 30.3, 0);
  group.add(cubeC)

  const cubeD = new THREE.Mesh(geometry, material)
  cubeD.position.set(10, 10, 10);
  group.add(cubeD)

  group.position.x = 55
  group.position.y = 30

  return group;
}
scene.add(createLPiece())

function createJPiece() {
  const material = new THREE.MeshBasicMaterial({color: 0x0335fc });
  const group = new THREE.Group()
  const geometry = new THREE.BoxGeometry(10, 10, 10)

  const cubeA = new THREE.Mesh(geometry, material)
  cubeA.position.set(10, 10, 0);
  group.add(cubeA)

  const cubeB = new THREE.Mesh(geometry, material)
  cubeB.position.set(10, 20.15, 0);
  group.add(cubeB)

  const cubeC = new THREE.Mesh(geometry, material)
  cubeC.position.set(10, 30.3, 0);
  group.add(cubeC)

  const cubeD = new THREE.Mesh(geometry, material)
  cubeD.position.set(10, 10, -10);
  group.add(cubeD)

  group.position.z = 50

  return group;
}
scene.add(createJPiece())

//

const controls = new OrbitControls(camera, renderer.domElement)

const ambientLight = new THREE.AmbientLight(0xffffff)
const gridHelper = new THREE.GridHelper(500, 100)
scene.add(ambientLight, gridHelper)

const animate = () => {
  requestAnimationFrame(animate);
  controls.update()
  renderer.render(scene, camera)
}

animate()