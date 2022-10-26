let edad = parseInt(prompt("Ingrese su Edad"))
console.log("Hola")
function condicional(edad){  //defino la función
    if (edad > 18){
        alert("puede ingresar")
    }
    else {
        alert("no se puede ingresar")
    }
}

condicional(edad) //ejecuto la función

let peso = parseInt(prompt("Ingrese su peso"))
let altura = parseInt(prompt("Ingrese su altura"))

function IMC(peso,altura){
    let indiceMasaCorporal = peso / (altura**2)
    if (indiceMasaCorporal < 18.5){
        alert("Su IMC es Peso inferior al normal")
    } else if (24.9 > indiceMasaCorporal > 18.5){
        alert("Su IMC es normal")
    } else if (indiceMasaCorporal > 25){
        alert("Su IMC es superior a lo normal")}
}

IMC(peso,altura)

// Todo lo que igresa por promt, lo va a convertir en string

//lo que en python es Elif, en JS es else if

/*
1) Dados 3 números por parametros, determinar cuál es el mayor
2) Dado un número determinar si es par o no. 
3) Dados 6 números, mostrar cuáles son pares, y cuáles son impares en dos arrays distintos. 
4) Determinar si un número es primo o no.
5) Dado un numero aleatorio, pedirle al user un número y decirle si es mayor, menor o adivinó el número.
*/

//1) 

let num1 = parseInt(prompt("Ingrese el primer número"))
let num2 = parseInt(prompt("Ingrese el segundo número"))
let num3 = parseInt(prompt("Ingrese el tercer número"))

function mayorNum(num1,num2,num3){
    if(num1 > num2 && num1 > num3){
        alert("El número"+num1+" es el más grande")
    }
    if(num2 > num1 && num2 > num3){
        alert("El número"+num2+" es el más grande")
    }
    if(num3 > num1 && num3 > num2){
        alert("El número "+num3+" es el más grande")
    }
}

mayorNum(num1,num2,num3)
let numero = parseInt(prompt("Ingrese un número para ver si es par"))
function determinarPar(parametro){
  
    if(parametro / 2 == 0){
        alert("El número "+parametro+" es par")
    }
    if(parametro / 2 !== 0){
        alert("El número "+parametro+" es impar")
    }
}

determinarPar(numero)