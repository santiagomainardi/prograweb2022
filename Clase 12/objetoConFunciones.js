let producto = {
    id:"1",
    nombre:"Chipa",
    precioPorCuarto: 800,
    incluirIva: function (){ 
        return this.precioPorCuarto * 1.21
    } //This se refiere a que la variable no es global, sino que se corresponde con este objeto en particular
}

console.log(producto.incluirIva())

//Así se programa en POO