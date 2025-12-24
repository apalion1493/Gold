import { Splide } from '@splidejs/splide';
import { Grid } from '@splidejs/splide-extension-grid';
import BurgerMenu from './modules/BurgerMenu';
import PopupManager from './modules/PopupManager';
new PopupManager();
new BurgerMenu().init();

$('#header-burger').click(function () {
  $('#header-top-menu-mobil').toggleClass('test');
});

if (document.querySelector('#splide-brand-list-big')) {
  new Splide('#splide-brand-list-big', {
    pagination: false,
    perMove: 1,
    gap: 20,
    snap: false,
    grid: {
      rows: 'auto',
      cols: 4,
      gap: {
        row: '16px',
        col: '20px',
      },
    },
    breakpoints: {
      992: {
        autoWidth: true,
        arrows: false,
        pagination: true,
        perMove: 1,
        grid: {
          rows: 2,
          cols: 1,
          gap: {
            row: '6px',
            col: '10px',
          },
        },
      },
    },
  }).mount({ Grid });
}

if (document.querySelector('#splide-brand-list-small')) {
  new Splide('#splide-brand-list-small', {
    pagination: false,
    perMove: 1,
    gap: 20,
    snap: false,
    grid: {
      rows: 'auto',
      cols: 4,
      gap: {
        row: '16px',
        col: '20px',
      },
    },
    breakpoints: {
      992: {
        autoWidth: true,
        arrows: false,
        pagination: true,
        perMove: 1,
        grid: {
          rows: 2,
          cols: 1,
          gap: {
            row: '6px',
            col: '10px',
          },
        },
      },
    },
  }).mount({ Grid });
}

if (document.querySelector('.buying-row')) {
  new Splide('.buying-row', {
    perPage: 7,
    gap: 20,
    arrows: false,
    breakpoints: {
      1201: {
        perPage: 4,
      },
      991: {
        perPage: 3,
      },
      768: {
        perPage: 1,
        focus: 'center',
        autoWidth: true,
      },
    },
  }).mount();
}

if (document.querySelector('.information-about-services')) {
  new Splide('.information-about-services', {
    perPage: 3,
    gap: 20,
    pagination: false,
    breakpoints: {
      1200: {
        perPage: 2,
        arrows: false,
        pagination: true,
      },
      991: {
        perPage: 1,
        focus: 'center',
        autoWidth: true,
      },
      576: {
        gap: 15,
      },
    },
  }).mount();
}

if (document.querySelector('.review-group')) {
  new Splide('.review-group', {
    perPage: 4,
    type: 'loop',
    autoplay: true,
    interval: 5000,
    speed: 2000,
    perMove: 1,
    gap: 20,
    pagination: false,
    breakpoints: {
      1270: {
        perPage: 3,
        arrows: false,
        pagination: true,
      },
      991: {
        perPage: 1,
        autoWidth: true,
      },
      576: {
        gap: 15,
      },
    },
  }).mount();
}

if (document.querySelector('.wares-slider')) {
  document.addEventListener('DOMContentLoaded', function () {
    let splideThree = new Splide('.wares-slider', {
      autoWidth: true,
      perMove: 1,
      type: 'loop',
      pagination: false,
      lazyLoad: 'sequential',
      gap: 20,
      breakpoints: {
        992: {
          pagination: true,
          arrows: false,
        },
      },
    }).mount();

    // Получаем элементы, в которые мы будем выводить информацию о слайдах.

    let totalSlidesElementThree = document.querySelector('.total-slides--3');
    let currentSlideElementThree = document.querySelector('.current-slide--3');

    // Обновляем информацию о слайдах при инициализации и смене слайда.

    function updateSlideInfo3() {
      totalSlidesElementThree.textContent = splideThree.length;
      currentSlideElementThree.textContent = splideThree.index + 1;
    }

    // Обновляем информацию о слайдах при смене слайда.
    splideThree.on('moved', updateSlideInfo3);

    // Инициализируем информацию о слайдах при загрузке страницы.
    updateSlideInfo3();
  });
}

if (document.querySelector('.buying-examples-slider')) {
  new Splide('.buying-examples-slider', {
    perPage: 3,
    type: 'loop',
    perMove: 1,
    gap: 20,
    pagination: false,
    breakpoints: {
      1500: {
        perPage: 3,
      },
      1200: {
        perPage: 2,
        arrows: false,
        pagination: true,
      },
      991: {
        perPage: 1,
        autoWidth: true,
      },
      576: {
        gap: 15,
      },
    },
  }).mount();
}

if (document.querySelector('.visual-slider-one')) {
  document.addEventListener('DOMContentLoaded', function () {
    let splideOne = new Splide('.visual-slider-one', {
      perPage: 1,
      perMove: 1,
      type: 'loop',
      pagination: false,
      lazyLoad: 'sequential',
      breakpoints: {
        576: {
          perPage: 1,
          autoWidth: true,
          arrows: false,
          pagination: true,
          gap: 10,
        },
      },
    }).mount();

    // Получаем элементы, в которые мы будем выводить информацию о слайдах.
    let totalSlidesElementOne = document.querySelector('.total-slides--1');
    let currentSlideElementOne = document.querySelector('.current-slide--1');

    // Обновляем информацию о слайдах при инициализации и смене слайда.
    function updateSlideInfo1() {
      totalSlidesElementOne.textContent = splideOne.length;
      currentSlideElementOne.textContent = splideOne.index + 1;
    }

    // Обновляем информацию о слайдах при смене слайда.
    splideOne.on('moved', updateSlideInfo1);

    // Инициализируем информацию о слайдах при загрузке страницы.
    updateSlideInfo1();
  });
}

if (document.querySelector('.visual-slider-two')) {
  document.addEventListener('DOMContentLoaded', function () {
    let splideTwo = new Splide('.visual-slider-two', {
      perPage: 1,
      perMove: 1,
      type: 'loop',
      pagination: false,
      lazyLoad: 'sequential',
      breakpoints: {
        576: {
          perPage: 1,
          autoWidth: true,
          arrows: false,
          pagination: true,
          gap: 10,
        },
      },
    }).mount();

    // Получаем элементы, в которые мы будем выводить информацию о слайдах.
    let totalSlidesElementTwo = document.querySelector('.total-slides--2');
    let currentSlideElementTwo = document.querySelector('.current-slide--2');

    // Обновляем информацию о слайдах при инициализации и смене слайда.
    function updateSlideInfo2() {
      totalSlidesElementTwo.textContent = splideTwo.length;
      currentSlideElementTwo.textContent = splideTwo.index + 1;
    }

    // Обновляем информацию о слайдах при смене слайда.
    splideTwo.on('moved', updateSlideInfo2);

    // Инициализируем информацию о слайдах при загрузке страницы.
    updateSlideInfo2();
  });
}

if (document.querySelector('#element-shape-list')) {
  new Splide('#element-shape-list', {
    pagination: false,
    perMove: 1,
    gap: 20,
    snap: false,
    grid: {
      rows: 3,
      cols: 3,
      gap: {
        row: '16px',
        col: '20px',
      },
    },
    breakpoints: {
      1199: {
        grid: {
          rows: 4,
          cols: 2,
          gap: {
            row: '16px',
            col: '20px',
          },
        },
      },
      992: {
        autoWidth: true,
        arrows: false,
        pagination: true,
        perMove: 1,
        gap: 10,
        grid: {
          rows: 2,
          cols: 1,
          gap: {
            row: '6px',
            col: '10px',
          },
        },
      },
    },
  }).mount({ Grid });
}

if (document.querySelector('#categories-list')) {
  new Splide('#categories-list', {
    pagination: false,
    perMove: 1,
    gap: 20,
    snap: false,
    grid: {
      rows: 2,
      cols: 2,
      gap: {
        row: '20px',
        col: '20px',
      },
    },
    breakpoints: {
      992: {
        autoWidth: true,
        arrows: false,
        pagination: true,
        perMove: 1,
        gap: 10,
        grid: {
          rows: 1,
          cols: 1,
          gap: {
            row: '0px',
            col: '10px',
          },
        },
      },
    },
  }).mount({ Grid });
}

let mapTitle = document.createElement('div');
mapTitle.className = 'mapTitle';
mapTitle.textContent = 'Для активации карты нажмите по ней';
wrapMap.appendChild(mapTitle);
wrapMap.onclick = function () {
  this.children[0].removeAttribute('style');
  mapTitle.parentElement.removeChild(mapTitle);
};
wrapMap.onmousemove = function (event) {
  mapTitle.style.display = 'block';
  if (event.offsetY > 10) mapTitle.style.top = event.offsetY + 20 + 'px';
  if (event.offsetX > 10) mapTitle.style.left = event.offsetX + 20 + 'px';
};
wrapMap.onmouseleave = function () {
  mapTitle.style.display = 'none';
};
