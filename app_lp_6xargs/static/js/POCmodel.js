var camera, scene, renderer;
var geometry, material, mesh;

init();
animate();

function init() {
    camera = new THREE.PerspectiveCamera(95, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 750;

    scene = new THREE.Scene();

    // Define the vertices for the elongated triangular bipyramid
    var vertices = [
        // Bottom pyramid
        new THREE.Vector3(-100, 0, 0),
        new THREE.Vector3(100, 0, 0),
        new THREE.Vector3(0, 0, Math.sqrt(30000)),  // Adjust to elongate
        
        // Top pyramid
        new THREE.Vector3(-100, 200, 0),
        new THREE.Vector3(100, 200, 0),
        new THREE.Vector3(0, 200, Math.sqrt(30000)),  // Adjust to elongate
        
        // Connecting vertices (middle layer)
        new THREE.Vector3(0, 100, -Math.sqrt(30000))  // Adjust to elongate
    ];

    // Define the faces for the elongated triangular bipyramid
    var faces = [
        // Bottom pyramid
        new THREE.Face3(0, 1, 2),
        
        // Top pyramid
        new THREE.Face3(3, 4, 5),
        
        // Connect bottom to middle
        new THREE.Face3(0, 1, 6),
        new THREE.Face3(1, 2, 6),
        new THREE.Face3(2, 0, 6),
        
        // Connect top to middle
        new THREE.Face3(3, 4, 6),
        new THREE.Face3(4, 5, 6),
        new THREE.Face3(5, 3, 6)
    ];

    // Create custom geometry
    geometry = new THREE.Geometry();
    geometry.vertices = vertices;
    geometry.faces = faces;
    geometry.computeFaceNormals();

    material = new THREE.MeshBasicMaterial({
        color: 0x0077ff,
        wireframe: true,
        wireframeLinewidth: 30
    });

    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    renderer = new THREE.WebGLRenderer(); // Use WebGLRenderer instead of CanvasRenderer
    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);
}

function animate() {
    requestAnimationFrame(animate);

    mesh.rotation.y += 0.014;

    renderer.render(scene, camera);
}