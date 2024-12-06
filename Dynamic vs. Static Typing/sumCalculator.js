
const inputArray = ["10", 20, "30"];


function calculateSum(arr) {
    return arr.reduce((sum, value) => sum + Number(value), 0);
}


const sum = calculateSum(inputArray);
console.log(`The sum is: ${sum}`); 
