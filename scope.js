let bonus = 20;

function sum(first, second){
    let result = first + second + bonus;
    // console.log(bonus, result);
    if (result > 9){
        const mood = "Happy";
        console.log(mood);
    }
    return result;
}

const output = sum(5, 10);
// console.log(bonus);
// console.log(output);