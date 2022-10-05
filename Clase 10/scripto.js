console.log("Hola Mundo")

// Esto es un comentario 

console.log(1+1)
console.log(2*2)

console.log("11"- 1) //  muestra 10
console.log("12"+ 1) // muestra 121
console.log("Esteban"*2) //Nan

//Javascript es un hdp con los datos

console.log("1"==1) //true
console.log("1"===1) 


let x = "Soy una Variable" // usamos let para definir variables
var y = "Soy una variable, pero obsoleta :(" //var no se usa más para definir variables

let convencion = "esto es una Calculadora +18"

alert(convencion)

const EDADMINIMA = 18 //Las constantes se escriben todo el Mayuscula

let edadUsuario = prompt("TENES QUE SER MAYOR QUE 18 PARA ENTRAR Ingrese Edad:") // comando de entrada - Input

//Todos los inputs son strings. 

if(edadUsuario > EDADMINIMA)alert("adentro")

if(edadUsuario < EDADMINIMA)alert("bueno, ya fue")

let calculo = prompt("Qué desea hacer? 1. Sumar 2. Restar 3. Multiplicar 4. Dividir")

let numumero1 = prompt("Ingrese Número 1: ")
let numumero2 = prompt("Ingrese Número 2: ")

if(calculo === "1")alert(parseInt(numumero1) + parseInt(numumero2))
if(calculo === "2")alert(parseInt(numumero1) - parseInt(numumero2))
if(calculo === "3")alert(parseInt(numumero1) * parseInt(numumero2))
if(calculo === "4")alert(parseInt(numumero1) / parseInt(numumero2))



