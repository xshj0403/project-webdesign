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

// 商業經營科
const swiper1 = new Swiper('.swiper1', {

  loop: true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: '.pagination1',
    clickable: true,
    dynamicBullets: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.next1',
    prevEl: '.prev1',
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

// 國際貿易科
const swiper2 = new Swiper('.swiper2', {

  loop: true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: '.pagination2',
    clickable: true,
    dynamicBullets: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.next2',
    prevEl: '.prev2',
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

// 國際貿易科
const swiper3 = new Swiper('.swiper3', {

  loop: true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: '.pagination3',
    clickable: true,
    dynamicBullets: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.next3',
    prevEl: '.prev3',
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