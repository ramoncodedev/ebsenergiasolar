/* Acordeão "Como funciona" */
(function () {
  'use strict';
  var items = document.querySelectorAll('.acc__item');
  items.forEach(function (item) {
    item.querySelector('.acc__btn').addEventListener('click', function () {
      var willOpen = !item.classList.contains('is-open');
      items.forEach(function (i) {
        i.classList.remove('is-open');
        i.querySelector('.acc__btn').setAttribute('aria-expanded', 'false');
      });
      if (willOpen) {
        item.classList.add('is-open');
        item.querySelector('.acc__btn').setAttribute('aria-expanded', 'true');
      }
    });
  });
})();
