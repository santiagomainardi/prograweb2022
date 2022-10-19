function saludar(){
    console.log("Hola")
} //Declaración de una Función.

//Buena Práctica: las funciones hagan UNA sola tarea y que tengan nombres declarativos. 

saludar() //invocar una función

function sumar(num1,num2){
    return (num1 + num2)
}

sumar(1,9)

function restar(num1,num2){
    return (num1 - num2)
}

//pero nosotros como programadores no vamos a mostrarle al usuario las cosas con console.log
//vamos a usar return

//El return lo que hace es pasar el dato.

function mostrarPorConsola(dato){
    console.log(dato)
} //así estamos trabajando bien 

mostrarPorConsola(sumar(10,5)) //"Callback"

//paradigma orientado a Objetos: clases y objetos. Hay objetos que heredan atributos de otros objetos. (Java)
//Python puede ser usado para hacer páginas web con un Framework que se llama Django. Python maneja el HTML, CSS y JS

function multiplicar(a,b){
    return  `el resultado de la multiplicación de ${a} y ${b} es ${a*b}`
} //backsticks: sirven para escribir adentro de un string

mostrarPorConsola(multiplicar(10,5)) 

//Como a los programadores de JS les daba paja crear funciones muy largas crearon las Arrow Functions:

let sumarFlecha = (a,b) => a + b + 100;

mostrarPorConsola(sumarFlecha(1,2))

//Hay una diferencia sustancial entre la función flecha y la función común: PREGUNTA CAPCIOSA DEL FINAL
// Las funciones no funcionan igual que las variables. Las funciones las pre carga en una lectura de todo el código. En cambio, la flecha, como es una variable no están pre cargadas antes de ejecutar el código. ENTONCES, las funciones (en general pero en especial las) flecha tienen que estar declaradas ANTES de invocarse.

let restarFlecha 

//si la función flecha ocupa una línea, no tengo que poner llaves ni return. Pero si ocupa más de una línea, tengo que poner flechas y return. 

//esto es porque estamos en la versión más reciente de Javascript 

