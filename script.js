//Dado un número, regresar el factorial de este
function factorial(num) {

    if(num < 0) {
        return "No se puede calcular el factorial";
    }

    //num = 3
    //i = 1
    //numFactorial * i -> 1*1 -> numFactorial = 1

    //i = 2
    //1 * 2 -> numFactorial = 2

    //i = 3
    //2 * 3 -> numFactorial = 6

    //i = 4
    //-------

    var numFactorial = 1;
    for(let i=1; i<=num; i++) {
       numFactorial *= i; 
    }

    return numFactorial;
}

//Suma todos los numeros siempre y cuando este sea positivo
function sumaPositivos(arr) {
    var sumatoria = 0;
    arr.forEach(function(num){
        if(num > 0) {
            sumatoria += num;
        }
    });

    return sumatoria;
}

// var resultado = factorial(3); //3*2*1
// var resultado2 = factorial(5); //5*4*3*2*1
// var resultado2 = factorial(8); //8*7*6*5*4*3*2*1

var resultadoSum = sumaPositivos([2, 3, 4, -1, -2, 5]); //14
console.log(resultadoSum);