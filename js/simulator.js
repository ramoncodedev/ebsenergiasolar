/* Simulador de economia (estimativa simplificada) */
(function () {
  'use strict';
  var WA = '5573999160076';   // WhatsApp da empresa
  var TARIFA = 0.95;          // R$/kWh médio (estimativa)
  var HSP = 4.9;              // kWh/m²/dia (irradiação média)
  var EFICIENCIA = 0.8;       // perdas do sistema
  var PLACA_KWP = 0.55;       // placa de 550 Wp
  var ECONOMIA = 0.9;         // parcela da conta evitada (taxa mínima continua)

  var input = document.getElementById('conta');
  var range = document.getElementById('contaRange');
  var rMes = document.getElementById('rMes');
  var rAno = document.getElementById('rAno');
  var rKwp = document.getElementById('rKwp');
  var rPlacas = document.getElementById('rPlacas');
  var cta = document.getElementById('simCta');
  var form = document.getElementById('simForm');
  if (!input || !range || !form) return;

  function brl(v) {
    return v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });
  }

  function calc(valor) {
    valor = Math.max(0, Number(valor) || 0);
    var kwp = (valor / TARIFA) / (30 * HSP * EFICIENCIA);
    var placas = Math.max(1, Math.ceil(kwp / PLACA_KWP));
    var mes = valor * ECONOMIA;
    var kwpTxt = kwp.toFixed(1).replace('.', ',') + ' kWp';
    rMes.textContent = brl(mes);
    rAno.textContent = brl(mes * 12);
    rKwp.textContent = kwpTxt;
    rPlacas.textContent = placas + ' placas';
    var msg = 'Olá! Fiz a simulação no site: conta de ' + brl(valor) + '/mês, sistema estimado de ' +
      kwpTxt + '. Quero uma proposta de energia solar.';
    cta.href = 'https://wa.me/' + WA + '?text=' + encodeURIComponent(msg);
  }

  input.addEventListener('input', function () {
    if (input.value !== '') range.value = Math.min(5000, Math.max(100, input.value));
    calc(input.value);
  });
  range.addEventListener('input', function () { input.value = range.value; calc(range.value); });
  form.addEventListener('submit', function (e) { e.preventDefault(); });
  calc(input.value);
})();
