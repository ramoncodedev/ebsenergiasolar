/* Animação de entrada ao rolar a página */
(function () {
  'use strict';
  var els = document.querySelectorAll('.feature, .scard, .glass, .acc__item, .faq details, .section__head, .trust__rating, .sim__box, .pcard, .banner');
  els.forEach(function (el) { el.classList.add('reveal'); });
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.1 });
    els.forEach(function (el) { io.observe(el); });
  } else {
    els.forEach(function (el) { el.classList.add('in'); });
  }
})();
