const visible = 0;
const hidden = 1;

var menu_state = hidden;
// var homepage_video =  iFrame.getElementById('homepage-video');
// homepage_video.mute();


$('.triangle').on('click',
  function() {
    if (menu_state == hidden) {
      anime({
        targets: '.menu',
        opacity: [{
          value: 1.0,
          duration: 1000
        }],
        easing: 'linear'
      });

      anime({
        targets: '.title',
        opacity: [{
          value: 0.0,
          duration: 1000
        }],
        easing: 'linear'
      });

      // anime({
      //   targets: '#homepage-video',
      //   opacity: [{value: 0.0, duration: 1000}],
      //   easing: 'linear'
      // });

      menu_state = visible;
    } else {
      anime({
        targets: '.menu',
        opacity: [{
          value: 0.0,
          duration: 1000
        }],
        easing: 'linear'
      });

      anime({
        targets: '.title',
        opacity: [{
          value: 1.0,
          duration: 1000
        }],
        easing: 'linear'
      });

      anime({
        targets: '.people',
        opacity: [{
          value: 0.0,
          duration: 1000
        }],
        easing: 'linear'
      });

      anime({
        targets: '#homepage-video',
        opacity: [{
          value: 1.0,
          duration: 400
        }],
        easing: 'linear'
      });

      document.getElementById("feministas").style.display = 'none';
      document.getElementById("details").style.display = 'none';
      document.getElementById("about-trig").style.display = 'none';
      document.getElementById("atpf").style.display = 'none';
      document.getElementById("collab").style.display = 'none';

      menu_state = hidden;
    }
  }
);

$('#projects').on('click',
  function() {

    anime({
      targets: '#homepage-video',
      opacity: [{
        value: 0.0,
        duration: 400
      }],
      easing: 'linear'
    });

    anime({
      targets: '#projects',
      translateY: [{
        value: -20,
        duration: 500
      }, {
        value: 0,
        duration: 500
      }]
    });

    document.getElementById("details").style.display = 'none';
    document.getElementById("feministas").style.display = 'none';
    document.getElementById("about-trig").style.display = 'none';
    document.getElementById("atpf").style.display = 'block';
    document.getElementById("collab").style.display = 'none';
  }
);

$('#collaborations').on('click',
  function() {

    anime({
      targets: '#homepage-video',
      opacity: [{
        value: 0.0,
        duration: 400
      }],
      easing: 'linear'
    });

    anime({
      targets: '#collaborations',
      translateY: [{
        value: -20,
        duration: 500
      }, {
        value: 0,
        duration: 500
      }]
    });

    document.getElementById("details").style.display = 'none';
    document.getElementById("feministas").style.display = 'none';
    document.getElementById("about-trig").style.display = 'none';
    document.getElementById("atpf").style.display = 'none';
    document.getElementById("collab").style.display = 'block';
  }
);

$('#about').on('click',
  function() {

    anime({
      targets: '#homepage-video',
      opacity: [{
        value: 0.0,
        duration: 400
      }],
      easing: 'linear'
    });

    anime({
      targets: '#about',
      translateY: [{
        value: -20,
        duration: 500
      }, {
        value: 0,
        duration: 500
      }]
    });

    document.getElementById("about-trig").style.display = 'block';
    document.getElementById("feministas").style.display = 'none';
    document.getElementById("details").style.display = 'none';
    document.getElementById("atpf").style.display = 'none';
    document.getElementById("collab").style.display = 'none';
  }
);

$('#people').on('click',
  function() {

    anime({
      targets: '#homepage-video',
      opacity: [{
        value: 0.0,
        duration: 400
      }],
      easing: 'linear'
    });

    document.getElementById("feministas").style.display = 'grid';
    document.getElementById("details").style.display = 'none';
    document.getElementById("about-trig").style.display = 'none';
    document.getElementById("atpf").style.display = 'none';
    document.getElementById("collab").style.display = 'none';

    anime({
      targets: '#people',
      translateY: [{
        value: -20,
        duration: 500
      }, {
        value: 0,
        duration: 500
      }]
    });

    // anime({
    //   targets: '.people',
    //   opacity: [{value: 1.0, duration: 100}],
    //   // delay: 750,
    //   easing: 'linear'
    // });

  }
);

$('#contact').on('click',
  function() {

    anime({
      targets: '#homepage-video',
      opacity: [{
        value: 0.0,
        duration: 400
      }],
      easing: 'linear'
    });

    anime({
      targets: '#contact',
      translateY: [{
        value: -20,
        duration: 500
      }, {
        value: 0,
        duration: 500
      }]
    });

    document.getElementById("details").style.display = 'block';
    document.getElementById("feministas").style.display = 'none';
    document.getElementById("about-trig").style.display = 'none';
    document.getElementById("atpf").style.display = 'none';
    document.getElementById("collab").style.display = 'none';
  }
);









// ======================================

$('#cianna').hover(
  function() {
    anime({
      targets: '#cianna-name-text',
      opacity: [{
        value: 1.0,
        duration: 1000
      }, {
        value: 0.0,
        duration: 1000
      }]
    });
  }
);
// $('#cianna-img').on('click',
//   function () {
//     anime({
//       targets: '#cianna-img',
//       opacity: [{value: 0.0, duration: 1000}]
//     });
//
//     var lindsay = document.getElementById("lindsay-name-text");
//     if (lindsay.style.display == 'none') {
//       lindsay.style.display = 'block';
//       var image = document.createElement("img");
//       // <img class="" src="images/lindsay-medium.jpg" alt="lindsay" height="500" width="325" id="lindsay-img">
//       image.class = "";
//       image.src = "images/lindsay-medium.jpg";
//       image.width = 325;
//       image.height = 500;
//       var desc = document.getElementById("lindsay-desc");
//       desc.replaceWith(image);
//     }
//
//     var nina = document.getElementById("nina-name-text");
//     if (nina.style.display == 'none') {
//       nina.style.display = 'block';
//       var image = document.createElement("img");
//       // <img class="" src="images/lindsay-medium.jpg" alt="lindsay" height="500" width="325" id="lindsay-img">
//       image.class = "";
//       image.src = "images/nina-medium.jpg";
//       image.width = 325;
//       image.height = 500;
//       var desc = document.getElementById("nina-desc");
//       desc.replaceWith(image);
//     }
//
//     var image = document.getElementById("cianna-img");
//     var desc = document.getElementById("cianna-desc");
//
//     image.replaceWith(desc);
//     desc.style.display = 'block';
//     document.getElementById("cianna-name-text").style.display = 'none';
//     anime({
//       targets: '#cianna-desc',
//       opacity: [{value: 1.0, duration: 1000}]
//     });
//   }
// );
//


$('#lindsay').hover(
  function() {
    anime({
      targets: '#lindsay-name-text',
      opacity: [{
        value: 1.0,
        duration: 1000
      }, {
        value: 0.0,
        duration: 1000
      }]
    });
  }
);
// $('#lindsay-img').on('click',
//   function () {
//     anime({
//       targets: '#lindsay-img',
//       opacity: [{value: 0.0, duration: 1000}]
//     });
//
//     var cianna = document.getElementById("cianna-name-text");
//     if (cianna.style.display == 'none') {
//       cianna.style.display = 'block';
//       var image = document.createElement("img");
//       // <img class="" src="images/lindsay-medium.jpg" alt="lindsay" height="500" width="325" id="lindsay-img">
//       image.class = "";
//       image.src = "images/cianna-medium.jpg";
//       image.width = 325;
//       image.height = 500;
//       var desc = document.getElementById("cianna-desc");
//       desc.replaceWith(image);
//     }
//
//     var nina = document.getElementById("nina-name-text");
//     if (nina.style.display == 'none') {
//       nina.style.display = 'block';
//       var image = document.createElement("img");
//       // <img class="" src="images/lindsay-medium.jpg" alt="lindsay" height="500" width="325" id="lindsay-img">
//       image.class = "";
//       image.src = "images/nina-medium.jpg";
//       image.width = 325;
//       image.height = 500;
//       var desc = document.getElementById("nina-desc");
//       desc.replaceWith(image);
//     }
//
//
//     var image = document.getElementById("lindsay-img");
//     var desc = document.getElementById("lindsay-desc");
//
//     image.replaceWith(desc);
//     desc.style.display = 'block';
//     document.getElementById("lindsay-name-text").style.display = 'none';
//     anime({
//       targets: '#lindsay-desc',
//       opacity: [{value: 1.0, duration: 1000}]
//     });
//   }
// );



$('#nina').hover(
  function() {
    anime({
      targets: '#nina-name-text',
      opacity: [{
        value: 1.0,
        duration: 1000
      }, {
        value: 0.0,
        duration: 1000
      }]
    });
  }
);
// $('#nina-img').on('click',
//   function () {
//     anime({
//       targets: '#nina-img',
//       opacity: [{value: 0.0, duration: 1000}]
//     });
//
//     var cianna = document.getElementById("cianna-name-text");
//     if (cianna.style.display == 'none') {
//       cianna.style.display = 'block';
//       var image = document.createElement("img");
//       // <img class="" src="images/lindsay-medium.jpg" alt="lindsay" height="500" width="325" id="lindsay-img">
//       image.class = "";
//       image.src = "images/cianna-medium.jpg";
//       image.width = 325;
//       image.height = 500;
//       var desc = document.getElementById("cianna-desc");
//       desc.replaceWith(image);
//     }
//
//     var lindsay = document.getElementById("lindsay-name-text");
//     if (lindsay.style.display == 'none') {
//       lindsay.style.display = 'block';
//       var image = document.createElement("img");
//       // <img class="" src="images/lindsay-medium.jpg" alt="lindsay" height="500" width="325" id="lindsay-img">
//       image.class = "";
//       image.src = "images/lindsay-medium.jpg";
//       image.width = 325;
//       image.height = 500;
//       var desc = document.getElementById("lindsay-desc");
//       desc.replaceWith(image);
//     }
//
//     var image = document.getElementById("nina-img");
//     var desc = document.getElementById("nina-desc");
//
//     image.replaceWith(desc);
//     desc.style.display = 'block';
//     document.getElementById("nina-name-text").style.display = 'none';
//     anime({
//       targets: '#nina-desc',
//       opacity: [{value: 1.0, duration: 1000}]
//     });
//   }
// );
