/* Ano atual no rodapé */
(function () {
  'use strict';
  var y = document.getElementById('ano');
  if (y) y.textContent = new Date().getFullYear();
})();
