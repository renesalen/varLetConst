//var vs let vs const
//La Constante es una variable que no cambia
//Excepciones en las que Si se puede cambiar la variable en const:

//La variable que tiene un array si se puede modificar con arrays y objetos:
const persona = {
    nombre: 'Pedro Perez',
    edad: 20
}
persona.edad = 21
console.log(persona) //rpta de edad: 21
//las constantes cuando son objeto o array son modificables