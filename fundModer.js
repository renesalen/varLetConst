//var vs let vs const
//Trabajando con let y bar

let edad = 10
if(true){
    let edad = 20
    console.log(edad)
}
console.log(edad)
//dentro de la condcional nos pinta 20. Esta vriable está viviendo dentro del if, y una vez que se sale de este scope if, muere.
//fuera de la condicional nos pinta 10. Esto está de forma global
//la variable dentro de la condicional varia el valor del var inicial