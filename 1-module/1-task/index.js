/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
function pow(m, n) {
  var number = m;

  for (var i = 1; i < n; i++) {
    number *= m;
  }

  return number;
}

var m = prompt("base", '');
var n = prompt("index", '');

if (n <= 1) {
  alert('Степень ' + n +
    'не поддерживается, введите целую степень, большую 1'
  );
} else {
  alert( pow(m, n) );
}
