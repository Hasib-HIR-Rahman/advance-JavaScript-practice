// const numbers = [4, 5, 6, 7, 8];
// const output = [];

// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }
// console.log(output);


const numbers = [4, 5, 6, 7, 8];

function square (){
    return element * element;
}

//const square = element => element * element;
//const square = x => x * x;

// const result = numbers.map(function(element, index, array){

//     return element * element;
//     //console.log(element, index, array);
// })

// const result = numbers.map (x => x * x);
// console.log(result);


const bigger = numbers.filter(x => x > 5 );
const smaller = numbers.filter(x => x < 5);
const equal = numbers.filter(x => x === 5);
console.log(bigger, smaller, equal); 

//find;