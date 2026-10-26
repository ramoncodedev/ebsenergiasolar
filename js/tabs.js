/* Abas On Grid / Off Grid */
(function () {
  'use strict';
  var tabs = document.querySelectorAll('.tab');
  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      var k = tab.getAttribute('data-tab');
      tabs.forEach(function (t) {
        var on = t === tab;
        t.classList.toggle('is-active', on);
        t.setAttribute('aria-selected', on ? 'true' : 'false');
      });
      ['on', 'off'].forEach(function (x) {
        document.getElementById('flow-' + x).classList.toggle('is-hidden', x !== k);
        document.getElementById('text-' + x).classList.toggle('is-hidden', x !== k);
      });
    });
  });
})();
