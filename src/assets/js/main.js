// Import Three
import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.js';

// Create a scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Define vertices for the elongated hexagon
const height = 2; // Height of the elongated hexagon
const halfHeight = height / 5;
const radius = 1; // Radius of the hexagon base

// Increase the distance between vertices 8 and 7, and between 10 and 11
const increasedDistance = 2; // Adjust this value to increase the distance

const vertices = new Float32Array([
  // Bottom hexagon vertices (z = -halfHeight)
  radius, 0, -halfHeight,                        // Vertex 0
  radius / 2, Math.sqrt(3) / 2 * radius * increasedDistance, -halfHeight,  // Vertex 1
  -radius / 2, Math.sqrt(3) / 2 * radius, -halfHeight, // Vertex 2
  -radius, 0, -halfHeight,                       // Vertex 3
  -radius / 2, -Math.sqrt(3) / 2 * radius * increasedDistance, -halfHeight, // Vertex 4
  radius / 2, -Math.sqrt(3) / 2 * radius, -halfHeight,  // Vertex 5

  // Top hexagon vertices (z = halfHeight)
  radius, 0, halfHeight,                         // Vertex 6
  radius / 2, Math.sqrt(3) / 2 * radius * increasedDistance, halfHeight,   // Vertex 7 (increased distance)
  -radius / 2, Math.sqrt(3) / 2 * radius, halfHeight,  // Vertex 8 (unchanged)
  -radius, 0, halfHeight,                        // Vertex 9
  -radius / 2, -Math.sqrt(3) / 2 * radius * increasedDistance, halfHeight, // Vertex 10 (increased distance)
  radius / 2, -Math.sqrt(3) / 2 * radius, halfHeight   // Vertex 11 (unchanged)
]);

// Define faces for the elongated hexagon
const indices = [
  // Bottom hexagon faces
  0, 1, 2,
  0, 2, 3,
  0, 3, 4,
  0, 4, 5,

  // Top hexagon faces
  6, 7, 8,
  6, 8, 9,
  6, 9, 10,
  6, 10, 11,

  // Side faces
  0, 1, 7,
  0, 7, 6,
  1, 2, 8,
  1, 8, 7,
  2, 3, 9,
  2, 9, 8,
  3, 4, 10,
  3, 10, 9,
  4, 5, 11,
  4, 11, 10,
  5, 0, 6,
  5, 6, 11
];

// Create the geometry
const geometry = new THREE.BufferGeometry();
geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
geometry.setIndex(indices);
geometry.computeVertexNormals();

// Create a material with vertex colors
const material = new THREE.MeshNormalMaterial();

// Create a mesh
const elongatedHexagon = new THREE.Mesh(geometry, material);
scene.add(elongatedHexagon);

// Create "eyes" as small spheres
const eyeGeometry = new THREE.SphereGeometry(0.4, 32, 32);
const eyeMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 }); // Dark gray color

const eye1 = new THREE.Mesh(eyeGeometry, eyeMaterial);
const eye2 = new THREE.Mesh(eyeGeometry, eyeMaterial);

// Position the eyes on the bottom and top bases
eye1.position.set(0, 0, -halfHeight - 0.1); // Adjust the Z position as per your preference
eye2.position.set(0, 0, halfHeight + 0.1); // Adjust the Z position as per your preference

// Create iris and pupil for eye1
const irisGeometry1 = new THREE.SphereGeometry(0.03, 32, 32);
const irisMaterial1 = new THREE.MeshBasicMaterial({ color: 0xffffff }); // Green color for iris
const iris1 = new THREE.Mesh(irisGeometry1, irisMaterial1);
const pupilGeometry1 = new THREE.SphereGeometry(0.01, 32, 32);
const pupilMaterial1 = new THREE.MeshBasicMaterial({ color: 0xffffff }); // Black color for pupil
const pupil1 = new THREE.Mesh(pupilGeometry1, pupilMaterial1);

// Position iris and pupil inside eye1
iris1.position.set(0.02, 0.02, -halfHeight - 0.08); // Adjust position of iris as per your preference
pupil1.position.set(0.03, 0.03, -halfHeight - 0.06); // Adjust position of pupil as per your preference

// Add iris and pupil to eye1
eye1.add(iris1);
eye1.add(pupil1);

// Create iris and pupil for eye2
const irisGeometry2 = new THREE.SphereGeometry(0.03, 32, 32);
const irisMaterial2 = new THREE.MeshBasicMaterial({ color: 0xffffff }); // Green color for iris
const iris2 = new THREE.Mesh(irisGeometry2, irisMaterial2);
const pupilGeometry2 = new THREE.SphereGeometry(0.01, 32, 32);
const pupilMaterial2 = new THREE.MeshBasicMaterial({ color: 0xffffff }); // Black color for pupil
const pupil2 = new THREE.Mesh(pupilGeometry2, pupilMaterial2);

// Position iris and pupil inside eye2
iris2.position.set(0.02, 0.02, halfHeight + 0.08); // Adjust position of iris as per your preference
pupil2.position.set(0.03, 0.03, halfHeight + 0.06); // Adjust position of pupil as per your preference

// Add iris and pupil to eye2
eye2.add(iris2);
eye2.add(pupil2);


// Add the eyes to the scene
scene.add(eye1);
scene.add(eye2);

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  // Rotate the hexagon
  elongatedHexagon.rotation.x += 0.007;
  elongatedHexagon.rotation.y += 0.007;

  // Open and close animation for the eyes
  const time = Date.now() * 0.001;
  const scale = Math.abs(Math.sin(time * 2)); // Sinusoidal scale for open/close animation
  eye1.scale.set(1, scale, 1);
  eye2.scale.set(1, scale, 1);

  renderer.render(scene, camera);
}

animate();

// Handle window resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
