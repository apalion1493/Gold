/**
 * !(i)
 * Код попадает в итоговый файл, только когда вызвана функция, например FLSFunctions.spollers();
 * Или когда импортирован весь файл, например import "files/script.js";
 * Неиспользуемый код в итоговый файл не попадает.

 * Если мы хотим добавить модуль следует его раскомментировать
 */
// import MousePRLX from './libs/parallaxMouse'
// import AOS from 'aos'
// import Swiper, { Navigation, Pagination } from 'swiper';

import BaseHelpers from './helpers/BaseHelpers';
import BurgerMenu from './modules/BurgerMenu';
import PopupManager from './modules/PopupManager';
// import Tabs from './modules/Tabs';
// core version + navigation, pagination modules:
import Swiper from 'swiper';
import Navigation from '../../node_modules/swiper/modules/navigation/navigation';
import Pagination from '../../node_modules/swiper/modules/pagination/pagination';

BaseHelpers.checkWebpSupport();

BaseHelpers.addTouchClass();

BaseHelpers.addLoadedClass();

BaseHelpers.headerFixed();

const swiper = new Swiper('.mySwiper', {
  slidesPerView: 7,
  spaceBetween: 20,
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    1200: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
    // when window width is >= 640px
    1480: {
      slidesPerView: 7,
      spaceBetween: 20,
    },
  },
});

const swiper2 = new Swiper('.information-about-services', {
  slidesPerView: 3,
  spaceBetween: 20,
  autoHeight: false,
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    // when window width is >= 640px
    1480: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

const swiper3 = new Swiper('.review-group', {
  slidesPerView: 1,
  spaceBetween: 20,
  autoHeight: false,
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },
  breakpoints: {
    // when window width is >= 320px

    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    991: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    // when window width is >= 640px
    1200: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

/**
 * Открытие/закрытие модальных окон
 * Чтобы модальное окно открывалось и закрывалось
 * На окно повешай атрибут data-popup="<название окна>"
 * На кнопку, которая вызывает окно повешай атрибут data-type="<название окна>"

 * На обертку(.popup) окна добавь атрибут '[data-close-overlay]'
 * На кнопку для закрытия окна добавь класс '.button-close'
 * */
new PopupManager();

/**
 *  Модуль для работы с меню (Бургер)
 * */
new BurgerMenu().init();

/**
 *  Библиотека для анимаций
 *  документация: https://michalsnik.github.io/aos
 * */
// AOS.init();

/**
 * Параллакс мышей
 * */
// new MousePRLX();

// new Tabs('tabs-example', {
//   onChange: (data) => {
//     console.log(data);
//   },
// });

// new Accordion('.accordion', {
//   shouldOpenAll: false, // true
//   defaultOpen: [], // [0,1]
//   collapsedClass: 'open',
// });

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

function updateFileList() {
  // Получаем элемент input file
  let input = document.getElementById('fileInput');

  // Получаем выбранные файлы
  let files = input.files;

  // Получаем элемент div для отображения списка файлов
  let fileListDiv = document.getElementById('fileList');

  // Очищаем содержимое элемента div перед выводом нового списка файлов
  fileListDiv.innerHTML = '';

  // Показываем имена и вес выбранных файлов
  for (let i = 0; i < files.length; i++) {
    // Создаем элемент <p> для каждого имени и веса файла и добавляем его к списку
    let fileDetailsParagraph = document.createElement('p');
    fileDetailsParagraph.textContent =
      'Имя: ' + files[i].name + ', Вес: ' + formatBytes(files[i].size);
    fileListDiv.appendChild(fileDetailsParagraph);
  }
}

// Функция для форматирования размера файла в удобочитаемый вид
function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}
