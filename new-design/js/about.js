var title_heading = document.getElementById('title-heading');
title_heading.style.display = 'grid';

var width = window.innerWidth;
var height = window.innerHeight;

var mouse = new THREE.Vector2(0.8, 0.5);
function onMouseMove(e) {


    TweenMax.to(mouse, 0.8, {
        y: (e.clientY / height),
        x : (e.clientX / width),
        ease: Power1.easeOut
    });

		tri = document.getElementById('triangle')
		// result = 1.0 - Math.sqrt( ((mouse.x - 0.5)*(mouse.x - 0.5)) + ((mouse.y - 0.95)*(mouse.y - 0.95)) );
		distance_left = Math.sqrt ((mouse.x - 0.05)*(mouse.x - 0.05));
		distance_top = Math.sqrt ((mouse.y - 0.05)*(mouse.y - 0.05));
		distance_right = Math.sqrt ((mouse.x - 0.95)*(mouse.x - 0.95));
		distance_bottom = Math.sqrt ((mouse.y - 0.95)*(mouse.y - 0.95));

		var threshold = 0.14


		if ( distance_left < threshold || distance_top < threshold || distance_right < threshold || distance_bottom < threshold  ) {
			if (tri.style.opacity < 0.0004) {
		  	showMenu()
			}
		} else {
			if (tri.style.opacity > 0.9996) {
				hideMenu()
			}
		}
		// tri.style.opacity = result
}


function menuItemHover() {
  // anime({
  //   targets: '#menu-contact',
  //   borderWidthBottom: [{
  //     value: 8,
  //     duration: 1600
  //   }],
  //   easing: 'easeInOutQuart'
  // });
}


function showMenu() {
	anime({
		targets: ['#triangle'],
		opacity: [{
			value: 1.0,
			duration: 800
		}],
		easing: 'linear'
	});

}

function hideMenu() {
	anime({
		targets: ['#triangle'],
		opacity: [{
			value: 0.0,
			duration: 800
		}],
		easing: 'linear'
	});

}

var rotationValue = -180;
var menuOpacity = 1.0;
var bodyOpacity = 0.2;
var toggle = true;

function menuHover() {
  anime({
    targets: '#triangle-menu',
    rotate: [{
      value: rotationValue,
      duration: 1600
    }],
    easing: 'easeInOutQuart'
  });

  anime({
    targets: ['.menu-item'],
    opacity: [{
      value: menuOpacity,
      duration: 1000,
      delay: 1000
    }],
    easing: 'linear'
  });

  anime({
    targets: ['#title'],
    opacity: [{
      value: bodyOpacity,
      duration: 1000,
      delay: 1000
    }],
    easing: 'linear'
  });

  if (toggle) {
    menuOpacity = 0.0;
    bodyOpacity = 1.0;
    rotationValue = -0;
    toggle = false;

    // document.getElementById('header-text').innerHTML = "Location based content management for augmented reality"

  } else {
    menuOpacity = 1.0;
    bodyOpacity = 0.2;
    rotationValue = -180;
    toggle = true;
    generateeffect();
    // document.getElementById('header-text').innerHTML = "The right map at the right time"
  }
}


window.addEventListener("mousemove", onMouseMove);
