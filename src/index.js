const ratio = window.innerWidth / window.innerHeight;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, ratio, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const light  = new THREE.AmbientLight(0x404040);
const dLight = new THREE.DirectionalLight(0xffffff, 0.5);

light.add(dLight);
scene.add(light);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshPhongMaterial( { color: 0xff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 6;

function animate() {
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01; 
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();

//renderer.render(scene, camera);