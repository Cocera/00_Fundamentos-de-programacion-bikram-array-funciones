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


        // 06 FUNCTIONS
        function potenciacion(num_1, num_2) {
            for (let i = 1; i <= num_2; i++) {
                console.log(num_1 * num_1); 
            }
        };


        // 07 FUNCTIONS


        // 08 FUNCTIONS
        let completeString = "";
        function repetirString(string, num) {
            for (let i = 1; i <= num; i++) {
                completeString = completeString + string + " ";
            }
        };



// 09 FUNCTIONS


// 10 ARRAYS & FUNCTIONS


// 11 ARRAYS & FUNCTIONS


// 12 ARRAYS & FUNCTIONS


// 13 ARRAYS & FUNCTIONS


// 14 ARRAYS & FUNCTIONS


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
            let arrayResults = [];
            function arrayFunciones(num_1, num_2) {
                arrayResults.push(num_1+num_2);
                arrayResults.push(num_1-num_2);
                arrayResults.push(num_1*num_2);
                console.log(arrayResults);
            }


            // 23 ARRAYS & FUNCTIONS
            function ordenarArray2(array) {
                console.log(array.sort(function (a, b){
                    return a - b;
                }));
            };


// 24 ARRAYS & FUNCTIONS


// 25 ARRAYS & FUNCTIONS


// 26 ARRAYS & FUNCTIONS

