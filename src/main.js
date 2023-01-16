import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import gsap from 'gsap'

// loader
const gltfLoader = new GLTFLoader()

// loader2
const gltfLoader2 = new GLTFLoader()

// loader3
const gltfLoader3 = new GLTFLoader()

// loader4
const gltfLoader4 = new GLTFLoader()

// Canvas
const canvasshialian = document.querySelector('canvas.shilian')

// canvas 2
const canvasvaas = document.querySelector('canvas.vaas')

// canvas 3
const canvasvrouw = document.querySelector('canvas.vrouw')

// canvas 4
const canvasschilder = document.querySelector('canvas.schilder')

// Scene
const scene = new THREE.Scene()

// Scene 2
const scene2 = new THREE.Scene()

// Scene 3
const scene3 = new THREE.Scene()

// Scene 4
const scene4 = new THREE.Scene()

//timeline

let lt = gsap.timeline()

//obj group
const objectGroup = new THREE.Group();
scene.add(objectGroup);

//obj group2
const objectGroup2 = new THREE.Group();
scene2.add(objectGroup2);

//obj group3
const objectGroup3 = new THREE.Group();
scene3.add(objectGroup3);

//obj group4
const objectGroup4 = new THREE.Group();
scene4.add(objectGroup4);

// Shillian
gltfLoader.load('shlian2.gltf', (gltf) =>{
    gltf.scene.scale.set(3,3,3)
    objectGroup.add(gltf.scene)
})

// vaas
gltfLoader2.load('vaas7.gltf', (gltf2) =>{

    gltf2.scene.scale.set(5.5,5.5,5.5)
    objectGroup2.add(gltf2.scene)

})

// vrouw
gltfLoader3.load('frauw.gltf', (gltf3) =>{

    gltf3.scene.scale.set(4.5,4.5,4.5)
    objectGroup3.add(gltf3.scene)

})

// schilder
gltfLoader4.load('daandewit.gltf', (gltf4) =>{

    gltf4.scene.scale.set(4,4,4)
    objectGroup4.add(gltf4.scene)

})



// change color


// Lights

const pointLight = new THREE.SpotLight(0xffffff, 4 );
pointLight.castShadow = true;
pointLight.position.x = 2
pointLight.position.y = 3
pointLight.position.z = 4
scene.add(pointLight)

// Lights2

const pointLight2 = new THREE.SpotLight(0xffffff, 4 );
pointLight2.castShadow = true;
pointLight2.position.x = 2
pointLight2.position.y = 3
pointLight2.position.z = 4
scene2.add(pointLight2)

// Lights3

const pointLight3 = new THREE.SpotLight(0xffffff, 2 );
pointLight3.castShadow = true;
pointLight3.position.x = 2
pointLight3.position.y = 3
pointLight3.position.z = 4
scene3.add(pointLight3)

// Lights4

const pointLight4 = new THREE.SpotLight(0xffffff, 3 );
pointLight4.castShadow = true;
pointLight4.position.x = 2
pointLight4.position.y = 3
pointLight4.position.z = 4
scene4.add(pointLight4)


// Sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.outputEncoding = THREE.sRGBEncoding;

})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 0
camera.position.y = 0
camera.position.z = 2
scene.add(camera)

// Base camera 2
const camera2 = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera2.position.x = 0
camera2.position.y = 0
camera2.position.z = 2
scene2.add(camera2)

// Base camera 3
const camera3 = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera3.position.x = 0
camera3.position.y = 0
camera3.position.z = 2
scene3.add(camera3)

// Base camera 4
const camera4 = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera4.position.x = 0
camera4.position.y = 0
camera4.position.z = 2
scene4.add(camera4)

// Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true


 // Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvasshialian,
    alpha: true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

 // Renderer 2
const renderer2 = new THREE.WebGLRenderer({
    canvas: canvasvaas,
    alpha: true
})
renderer2.setSize(sizes.width, sizes.height)
renderer2.setPixelRatio(Math.min(window.devicePixelRatio, 2))

 // Renderer 3
 const renderer3 = new THREE.WebGLRenderer({
    canvas: canvasvrouw,
    alpha: true
})
renderer3.setSize(sizes.width, sizes.height)
renderer3.setPixelRatio(Math.min(window.devicePixelRatio, 2))

 // Renderer 4
 const renderer4 = new THREE.WebGLRenderer({
    canvas: canvasschilder,
    alpha: true
})
renderer4.setSize(sizes.width, sizes.height)
renderer4.setPixelRatio(Math.min(window.devicePixelRatio, 2))

 //Animate

const clock = new THREE.Clock()

const tick = () =>
{

    const elapsedTime = clock.getElapsedTime()

    // Update objects
    //sphere.rotation.y = .5 * elapsedTime

    // Update Orbital Controls
    // controls.update()



    // Render
    renderer.render(scene, camera)

    // Render2
    renderer2.render(scene2, camera2)

    // Render3
    renderer3.render(scene3, camera3)

    // Render4
    renderer4.render(scene4, camera4)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)

}

tick()

function animate() {
    requestAnimationFrame( animate );

    objectGroup.rotation.x += 0.01;
    objectGroup.rotation.y += 0.01;

    objectGroup2.rotation.x += 0.01;
    objectGroup2.rotation.y += 0.01;

    objectGroup3.rotation.x += 0.01;
    objectGroup3.rotation.y += 0.01;

    objectGroup4.rotation.x += 0.01;
    objectGroup4.rotation.y += 0.01;

    renderer.render( scene, camera );
};

animate();

// const controls = new OrbitControls(camera, renderer.domElement);
// const controls2 = new OrbitControls(camera2, renderer1.domElement);


