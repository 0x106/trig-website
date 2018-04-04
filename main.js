
const visible = 0;
const hidden = 1;

var menu_state = hidden;

$('.triangle').on('click',
  function () {
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
