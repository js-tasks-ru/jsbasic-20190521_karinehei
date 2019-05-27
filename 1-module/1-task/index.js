/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
function pow (m, n) {
let number = m;
  for (let i =1; i < n; i++ {
       number *=m
       }
       return number;
}
 
 let m = prompt("base", '');
 let n = prompt("exponent", '');

  if (n <= 1) {
  alert('Степень ' + n +
    'не поддерживается, введите целую степень, большую 1'
  );
} else {
  alert( pow(m, n) );
}
