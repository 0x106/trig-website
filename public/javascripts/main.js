
const visible = 0;
const hidden = 1;

var menu_state = hidden;

$('.triangle').on('click',
  function () {
    console.log('click');
    if (menu_state == hidden) {
      anime({
        targets: 'li',
        opacity: [{value: 1.0, duration: 1000}],
        easing: 'linear'
      });

      anime({
        targets: '.title',
        opacity: [{value: 0.0, duration: 1000}],
        easing: 'linear'
      });

      menu_state = visible;
    } else {
      anime({
        targets: 'li',
        opacity: [{value: 0.0, duration: 1000}],
        easing: 'linear'
      });

      anime({
        targets: '.title',
        opacity: [{value: 1.0, duration: 1000}],
        easing: 'linear'
      });

      anime({
        targets: '.people',
        opacity: [{value: 0.0, duration: 1000}],
        easing: 'linear'
      });

      document.getElementById("feministas").style.display = 'none';
      document.getElementById("details").style.display = 'none';
      document.getElementById("about-trig").style.display = 'none';

      menu_state = hidden;
    }
  }
);

$('#projects').on('click',
  function () {
    anime({
      targets: '#projects',
      translateY: [{value: -20, duration: 500}, {value: 0, duration: 500}]
    });
  }
);

$('#about').on('click',
  function () {
    anime({
      targets: '#about',
      translateY: [{value: -20, duration: 500}, {value: 0, duration: 500}]
    });

    document.getElementById("about-trig").style.display = 'block';
    document.getElementById("feministas").style.display = 'none';
    document.getElementById("details").style.display = 'none';
  }
);

$('#people').on('click',
  function () {

    document.getElementById("feministas").style.display = 'grid';
    document.getElementById("details").style.display = 'none';
    document.getElementById("about-trig").style.display = 'none';

    anime({
      targets: '#people',
      translateY: [{value: -20, duration: 500}, {value: 0, duration: 500}]
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
  function () {
    anime({
      targets: '#contact',
      translateY: [{value: -20, duration: 500}, {value: 0, duration: 500}]
    });

    document.getElementById("details").style.display = 'block';
    document.getElementById("feministas").style.display = 'none';
    document.getElementById("about-trig").style.display = 'none';

  }
);
