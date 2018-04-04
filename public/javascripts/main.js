
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

$('#people').on('click',
  function () {

    document.getElementById("feministas").style.display = 'grid';

    anime({
      targets: '#people',
      translateY: [{value: -20, duration: 500}, {value: 0, duration: 500}]
    });

    anime({
      targets: '.people',
      opacity: [{value: 1.0, duration: 1000}],
      easing: 'linear'
    });

  }
);

$('#contact').on('click',
  function () {
    anime({
      targets: '#contact',
      translateY: [{value: -20, duration: 500}, {value: 0, duration: 500}]
    });
  }
);
