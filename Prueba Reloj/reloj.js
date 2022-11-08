const tiempo = document.getElementById('tiempo')
const fecha = document.getElementById('fecha')

const nombresMeses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre","Diciembre"]

const interval = setInterval(() => {

    const local = new Date();

    let day = local.getDate(),
        month = local.getMonth(),
        year = local.getFullYear();

    tiempo.innerHTML = local.toLocaleTimeString();
    fecha.innerHTML = `${day} ${nombresMeses[month]} ${year}`
},1000);