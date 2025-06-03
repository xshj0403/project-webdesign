$(function () {
  const $container = $('.elements');

  for (let i = 0; i < 10; i++) {
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const duration = 7 + Math.random() * 5;

    const $div = $('<div></div>').css({
      top: top + '%',
      left: left + '%',
      animation: `particles ${duration}s linear infinite`
    });

    $container.append($div);
  };
});


const swiper = new Swiper('.card-wrapper', {

  loop: true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints:{
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});