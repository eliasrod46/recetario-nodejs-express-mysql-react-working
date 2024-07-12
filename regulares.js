const texto = "11-01-1989";
const patron =
  /([0-3])([0-1])(-)([0-1])([0-2])(-)([1-3])([0-9])([0-9])([0-9])/g;
const resultado2 = texto.search(patron);
console.log(resultado2); //arreglo con data de todas las coinciencias
