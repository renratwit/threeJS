import './style.css'
import * as THREE from 'three'
import { PointLightHelper } from 'three';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector("#bg")
})

renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)
camera.position.setZ(30)

renderer.render(scene, camera)

const geometry = new THREE.TorusGeometry(10, 3, 16, 100)
const material = new THREE.MeshStandardMaterial( {color: 0xFF6347});
const torus = new THREE.Mesh(geometry, material)

scene.add(torus)

const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(5, 5, 5)

const lightHelper = new THREE.PointLightHelper(pointLight)
scene.add(lightHelper)
scene.add(pointLight)

const animate = () => {
  requestAnimationFrame(animate);
  torus.rotation.x += 0.01
  torus.rotation.y += 0.001
  torus.rotation.z += 0.1

  renderer.render(scene, camera)
}

animate()