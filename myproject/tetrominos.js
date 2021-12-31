import * as THREE from 'three'

export function createOPiece() {
  
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

    return group;
  }
  
export function createTPiece() {
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
  
    return group;
  }
  
export function createIPiece() {
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

    return group
  }
  
export function createLPiece() {
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
  
    return group;
  }
  
export function createJPiece() {
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
  
    return group;
  }
  
  
export function createSPiece() {
    const material = new THREE.MeshBasicMaterial({color: 0x04d91a });
    const group = new THREE.Group()
    const geometry = new THREE.BoxGeometry(10, 10, 10)
  
    const cubeA = new THREE.Mesh(geometry, material)
    cubeA.position.set(10, 10, 0);
    group.add(cubeA)
  
    const cubeB = new THREE.Mesh(geometry, material)
    cubeB.position.set(10, 20.15, 0);
    group.add(cubeB)
  
    const cubeC = new THREE.Mesh(geometry, material)
    cubeC.position.set(10, 20.15, 10);
    group.add(cubeC)
  
    const cubeD = new THREE.Mesh(geometry, material)
    cubeD.position.set(10, 10, -10);
    group.add(cubeD)
  
    return group
  }
  
export function createZPiece() {
    const material = new THREE.MeshBasicMaterial({color: 0xde0000 });
    const group = new THREE.Group()
    const geometry = new THREE.BoxGeometry(10, 10, 10)
  
    const cubeA = new THREE.Mesh(geometry, material)
    cubeA.position.set(10, 10, 0);
    group.add(cubeA)
  
    const cubeB = new THREE.Mesh(geometry, material)
    cubeB.position.set(10, 20.15, 0);
    group.add(cubeB)
  
    const cubeC = new THREE.Mesh(geometry, material)
    cubeC.position.set(10, 10, 10);
    group.add(cubeC)
  
    const cubeD = new THREE.Mesh(geometry, material)
    cubeD.position.set(10, 20.15, -10);
    group.add(cubeD)
  
    return group;
  }