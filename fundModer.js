//var vs let vs const
//La Constante es una variable que no cambia
//La constante también vive dentro del scope

const edad = 10
if(true){
    const edad = 20
    console.log(edad)
}
console.log(edad)
//dentro de la condcional nos pinta 20. Esta vriable está viviendo dentro del if, y una vez que se sale de este scope if, muere.
//fuera de la condicional nos pinta 10. Esto está de forma global
//Ambas const aunque tienen el mismo nombre son 2 variables diferentes por vivir en diferentes scopes