//var vs let vs const
//Trabajando con let y bar

var edad = 10
if(true){
    var edad = 20
    console.log(edad)
}
console.log(edad)
//dentro de la condcional nos pinta 20
//fuera de la condicional no pinta también 20.
//la variable dentro de la condicional varia el valor del var inicial