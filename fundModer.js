//var vs let vs const
//La Constante es una variable que no cambia
//Excepciones en las que Si se puede cambiar la variable en const:

//La variable que tiene un array si se puede modificar:
var arrayNumero = [10, 20, 30]
var arrayNumero = [10, 20, 30, 40]
console.log(arrayNumero)

//con let podemos modificar:
let arrayNumber = [10, 20, 30]
arrayNumber = [10, 20, 30, 40]
console.log(arrayNumber)

//con let podemos modificar Excepcionalmente pero utilizando '.push':
const arrayNum = [10, 20, 30]
arrayNum.push = [10, 20, 30, 40]
console.log(arrayNum)