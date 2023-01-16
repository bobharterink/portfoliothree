import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import gsap from 'gsap'

const gltfLoader = new GLTFLoader()

// Debug
const gui = new dat.GUI()

// Canvas
const canvasvaas = document.querySelector('canvas.vaas')

// Scene
const scene = new THREE.Scene()


//timeline

let lt = gsap.timeline()


// vaas
gltfLoader.load('blnd.gltf', (vaas) =>{
    scene.add(vaas.scene)

    gltf.scene.scale.set(3,3,3)
    gltf.scene.rotation.set(0.5,6.25,0)
    scene.add(gltf.scene)

    gui.add(gltf.scene.rotation, 'x').min(0).max(9)
    gui.add(gltf.scene.rotation, 'y').min(0).max(9)
    gui.add(gltf.scene.rotation, 'z').min(0).max(9)

    lt.to(gltf.scene.rotation,{ y:0, duration:3})
    lt.to(gltf.scene.scale,{ x:1, y:1, z:1, duration:3}, '-=3')
    lt.to(gltf.scene.rotation,{ x:0, duration:1})
})



// change color


// Lights

const pointLight = new THREE.SpotLight(0xffffff, 4 );
pointLight.castShadow = true;
pointLight.position.x = 2
pointLight.position.y = 3
pointLight.position.z = 4
scene.add(pointLight)

//seelight

/**
 * Sizes
 */
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

// Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvasshialian,
    alpha: true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */

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

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()

const controls = new OrbitControls(camera, renderer.domElement);
