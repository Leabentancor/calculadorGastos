let gastosMensuales = [];
let categoriasTotales={};

let categoriaMontoAgregado;
let montoAgregado ;


do{
    categoriaMontoAgregado = prompt ( 'Escribe una categoría que quieres registrar. \n Ej: \n Alquiler: \n Gastos comúnes: \n Luz: \n Agua: \n Internet: \n Para terminar escribe "SALIR".').toLowerCase();

    if (categoriaMontoAgregado.toUpperCase() !== "SALIR"){

        montoAgregado = parseInt(prompt("Ingrese el monto de su categoría ingresada."));

        let gastoAgregado = {
            categoria: categoriaMontoAgregado,
            monto: montoAgregado
        }
        gastosMensuales.push(gastoAgregado);
    }

    if (categoriasTotales [ categoriaMontoAgregado]){
        categoriasTotales[categoriaMontoAgregado] += montoAgregado
    } else{
        categoriasTotales [ categoriaMontoAgregado]=
        montoAgregado
    }


} while (categoriaMontoAgregado.toUpperCase() !== "SALIR");

function calcularTotalGastos() {
    return gastosMensuales.reduce((acc, gasto) => acc + gasto.monto, 0);
}

function calcularPromedioGastos(){
    let total = calcularTotalGastos();
    let promedio = total / gastosMensuales.length;
    return parseFloat(promedio.toFixed(2));
}

console.log(gastosMensuales);
console.log("Gasto por categoria " , categoriasTotales)
alert("Gastos mensuales: " + calcularTotalGastos());
alert("Tienes un promedio de: " + calcularPromedioGastos ()+ " por categoria")
