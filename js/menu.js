/* Menu mobile e altura do cabeçalho */
(function () {
  'use strict';
  var topbar = document.querySelector('.topbar');
  var header = document.querySelector('.header');
  var burger = document.getElementById('burger');
  var menu = document.getElementById('menu');
  if (!header || !burger || !menu) return;

  function setHdr() {
    var top = topbar && topbar.offsetParent !== null ? Math.max(0, topbar.getBoundingClientRect().bottom) : 0;
    document.documentElement.style.setProperty('--hdr', (top + header.offsetHeight) + 'px');
  }
  function closeMenu() {
    menu.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', 'Abrir menu');
  }

  setHdr();
  window.addEventListener('resize', setHdr);
  window.addEventListener('scroll', setHdr, { passive: true });

  burger.addEventListener('click', function () {
    setHdr();
    var open = menu.classList.toggle('open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    burger.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  });
  menu.addEventListener('click', function (e) { if (e.target.tagName === 'A') closeMenu(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeMenu(); });
})();
