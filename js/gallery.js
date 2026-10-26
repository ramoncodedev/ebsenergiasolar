/* Fotos: esconde <img> ausentes e só mostra "Projetos" se houver fotos reais */
(function () {
  'use strict';

  // Imagens de seção (hero é CSS): se não existir, some o <img> e fica o fundo ilustrado
  document.querySelectorAll('.ph img').forEach(function (img) {
    img.addEventListener('error', function () { img.remove(); });
  });

  var gallery = document.getElementById('gallery');
  var section = document.getElementById('projetos');
  var navLink = document.querySelector('[data-needs="projetos"]');
  if (!gallery || !section) return;

  var figs = gallery.querySelectorAll('.g');
  var ok = 0, pending = figs.length;
  figs.forEach(function (fig) {
    var test = new Image();
    var done = function (loaded) {
      if (loaded) ok++; else fig.remove();
      if (--pending === 0) {
        if (ok >= 3) { section.classList.remove('is-hidden'); if (ok <= 5) gallery.classList.add('gallery--few'); }
        else if (navLink) navLink.classList.add('is-hidden');
      }
    };
    test.onload = function () { done(true); };
    test.onerror = function () { done(false); };
    test.src = fig.querySelector('img').getAttribute('src');
  });
})();
