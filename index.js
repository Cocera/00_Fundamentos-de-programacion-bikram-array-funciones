// 01 ARRAYS
let arrayVacio = [];

// 02 ARRAYS
let arrayNumeros = [];
for (let i = 0; i<=9; i++) {
    arrayNumeros.push(i);
};


// 03 ARRAYS
let arrayNumerosPares = [];
for (let i = 0; i <=9; i++) {
     if (i%2 === 0) {
         arrayNumerosPares.push(i);
     }
};


// 04 ARRAYS
let arrayBidimensional = [[0, 1, 2], ['a', 'b', 'c']]


// 05 FUNCTIONS
function suma(num_1, num_2) {
    return num_1 + num_2
};


// // 06 FUNCTIONS
function potenciacion(num1, num2) {
    return num1**num2;
};


// 07 FUNCTIONS
function separarPalabras(str) {
    return str.split(' ');
}; 


// 08 FUNCTIONS
function repetirString(string, num) {
    return string.repeat(num);
};

// Sin usar .repeat()
/*
function repetirString(string, num) {
    let resultado = "";
    for (let i = 1; i <= num; i++) {
        resultado += string;
    }
    return resultado;
};
*/


// 09 FUNCTIONS
// function 


// // 10 ARRAYS & FUNCTIONS
// function 


// 11 ARRAYS & FUNCTIONS
function obtenerPares(numArray) {
    let pairs = [];
    numArray.forEach(el => {
        if (el%2 == 0) {
            pairs.push(el);
        }
    })
    return pairs;
}


// 12 ARRAYS & FUNCTIONS
/* INCORRECTO
function pintarArray(arrayNum) {
    return `[${arrayNum.toString()}]`;
};
 */


// // 13 ARRAYS & FUNCTIONS
// function 


// // 14 ARRAYS & FUNCTIONS
// function 
  

// 15 ARRAYS
let arrayNumerosNeg = [];
for (let i = 0; i >= -9; i--) {
    arrayNumerosNeg.push(i)
};


// 16 ARRAYS
let holaMundo = ["Hola", "Mundo"];


// 17 ARRAYS
let loGuardoTodo = ['hola', 'que', 23, 42.33, 'tal'];


// 18 ARRAYS
let arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']];


// 19 FUNCTIONS
function multiplicacion(num_1, num_2) {
    return num_1*num_2;
};


// 20 FUNCTIONS
function division(num_1, num_2) {
    return num_1/num_2;
};


// 21 FUNCTIONS
function esPar(num_1) {
    if (num_1%2 === 0) {
        return true
    } else {
        return false
    };
};

            
// 22 FUNCTIONS
let arrayFunciones = [
    function suma(a, b) {
        return a + b;
    },
    function resta(a, b) {
        return a - b;
    },
    function multiplicacion(a, b) {
        return a * b;
    },
];

            /* RESULTADO INCORRECTO EJ.22
            let arrayResults = [];
            function arrayFunciones(num_1, num_2) {
                arrayResults.push(num_1+num_2);
                arrayResults.push(num_1-num_2);
                arrayResults.push(num_1*num_2);
                return arrayResults;
            };
            */
              

// 23 ARRAYS & FUNCTIONS
function ordenarArray2(array) {
    return array.sort((a,b) => a-b);
};



// 24 ARRAYS & FUNCTIONS
function obtenerImpares(array) {
    let arrayImpares = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i]%2 !== 0) {
            arrayImpares.push(array[i])
        }
    }
    return arrayImpares;
};
    

// 25 ARRAYS & FUNCTIONS
function sumarArray(array) {
    let sumaTotal = 0;
    for (let i = 0; i < array.length; i++) {
        sumaTotal += array[i];
        }
        return sumaTotal;
};
  

// 26 ARRAYS & FUNCTIONS
function multiplicarArray(array) {
    let resultadoTotal = 1;
    for (let i = 0; i < array.length; i++) {
        resultadoTotal *= array[i];
    }
    return resultadoTotal;
};
    
