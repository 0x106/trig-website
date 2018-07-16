/**
 * demo.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2017, Codrops
 * http://www.codrops.com
 */

// var title_heading = document.getElementById('title-heading');
// title_heading.style.display = 'none';

var menuState = false
var shouldRender = true

{
	setTimeout(() => document.body.classList.add('render'), 60);
	const navdemos = Array.from(document.querySelectorAll('nav.demos > .demo'));
	const total = navdemos.length;
	const current = navdemos.findIndex(el => el.classList.contains('demo--current'));
	const navigate = (linkEl) => {
		document.body.classList.remove('render');
		document.body.addEventListener('transitionend', () => window.location = linkEl.href);
	};
	navdemos.forEach(link => link.addEventListener('click', (ev) => {
		ev.preventDefault();
		navigate(ev.target);
	}));
	document.addEventListener('keydown', (ev) => {
		const keyCode = ev.keyCode || ev.which;
		let linkEl;
		if ( keyCode === 37 ) {
			linkEl = current > 0 ? navdemos[current-1] : navdemos[total-1];
		}
		else if ( keyCode === 39 ) {
			linkEl = current < total-1 ? navdemos[current+1] : navdemos[0];
		}
		else {
			return false;
		}
		navigate(linkEl);
	});
}

var canvas = document.querySelector('#scene');
var width = canvas.offsetWidth,
    height = canvas.offsetHeight;

var renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true
});
renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);
renderer.setSize(width, height);
// renderer.setClearColor(0xA9E7DA);
// renderer.setClearColor(0xFF521B);
// renderer.setClearColor(0x020122);
renderer.setClearColor(0xFFFFFF);
// renderer.setClearColor(0xFFF8F8)
// renderer.setClearColor(0xFF906D);
//

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(100, width / height, 0.1, 10000);
camera.position.set(240, 0, 300);

var light = new THREE.HemisphereLight(0xffffff, 0x0C056D, 0.6);
scene.add(light);

var light = new THREE.DirectionalLight(0x590D82, 0.5);
light.position.set(200, 300, 400);
scene.add(light);
var light2 = light.clone();
light2.position.set(-200, 300, 400);
scene.add(light2);

var geometry = new THREE.IcosahedronGeometry(120, 4);
for(var i = 0; i < geometry.vertices.length; i++) {
    var vector = geometry.vertices[i];
    vector._o = vector.clone();
}
// emissive: 0x23f660,
var material = new THREE.MeshPhongMaterial({
    emissive: 0xabcdef,
    emissiveIntensity: 0.2,
    shininess: 0
});
var shape = new THREE.Mesh(geometry, material);
scene.add(shape);

function updateVertices (a) {
    for(var i = 0; i < geometry.vertices.length; i++) {
        var vector = geometry.vertices[i];
        vector.copy(vector._o);
        var perlin = noise.simplex3(
            (vector.x * 0.006) + (a * 0.0002),
            (vector.y * 0.006) + (a * 0.0003),
            (vector.z * 0.006)
        );
        var ratio = ((perlin*0.4 * (mouse.y+0.1)) + 0.8);
        vector.multiplyScalar(ratio);
    }
    geometry.verticesNeedUpdate = true;
}

function render(a) {
	if (shouldRender) {
    requestAnimationFrame(render);
    updateVertices(a);
    renderer.render(scene, camera);
	}
}

function onResize() {
    canvas.style.width = '';
    canvas.style.height = '';
    width = canvas.offsetWidth;
    height = canvas.offsetHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
}

var mouse = new THREE.Vector2(0.8, 0.5);
function onMouseMove(e) {
    TweenMax.to(mouse, 0.8, {
        y: (e.clientY / height),
        x : (e.clientX / width),
        ease: Power1.easeOut
    });
}

requestAnimationFrame(render);
window.addEventListener("mousemove", onMouseMove);
window.addEventListener("scroll", onScrollCallback);
var resizeTm;
window.addEventListener("resize", function(){
    resizeTm = clearTimeout(resizeTm);
    resizeTm = setTimeout(onResize, 200);
});

function onScrollCallback() {
	var height = $(window).height();
	var scrollTop = $(window).scrollTop();
	var scroll = scrollTop / height;

	if (scroll < 0.33 && !shouldRender) {
		shouldRender = true
		requestAnimationFrame(render);
	} else {
		shouldRender = false
	}
}




var speed = 140		// 200

var showText = function (target, message, index, interval) {
  if (index < message.length) {
    $(target).append(message[index++]);
    setTimeout(function () { showText(target, message, index, interval); }, interval);
  }
}
// setTimeout(function () {showText("#scene__content__title", "Redefining mobile communication.", 0, speed);}, 400);
// setTimeout(function () {showText("#scene__content__title", "Redefining on-site management and communication.", 0, speed);}, 400);
setTimeout(function () {showText("#scene__content__title", "See. Snap. Discover.", 0, speed);}, 400);




//
