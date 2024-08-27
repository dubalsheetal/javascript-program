const arrayNumbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];
console.log(arrayNumbers);
console.log(`1. Log the array element with it’s index using forEach( ) with arrow function`);
arrayNumbers.forEach((element, index, arrayNumbers) => {
    console.log(`The index is : ${index} and element is :${element}`);
});
console.log(`=====================================================================`);
console.log(`2. Find the positive numbers Using forEach( ) with arrow function`);
const array = [];
arrayNumbers.forEach((element, index) => {

    if (element >= 0) {
        array.push(element);
    }
});
console.log(`The positive No in array [${arrayNumbers}]is : [${array}]`);
console.log(`======================================================================`);
console.log(`****3. Find the negative numbers, add into new array****`);
const arrayNew = [];
arrayNumbers.forEach(element => {
    if (element < 0) {
        arrayNew.push(element);
    }
});
console.log(`The negative No in array [${arrayNumbers}] is : [${arrayNew}]`);
console.log(`======================================================================`);
console.log(`4. Find the even numbers and log on console using forEach( ) with arrow function`);
const arrayEvenNo = [];
arrayNumbers.forEach(element => {
    if (element % 2 == 0) {
        arrayEvenNo.push(element);
    }
});
console.log(`The even No in array [${arrayNumbers}] is : [${arrayEvenNo}]`);
console.log(`======================================================================`);
console.log(`5. Find the sum of all elements from arrayNumbers and log sum value on console.`);
let sum = 0;
arrayNumbers.forEach(element => {
    sum = sum + element;
});
console.log(`The sum of all elements in array is : ${sum}`);
console.log(`======================================================================`);
console.log(`6. Log the only even indexed array value on console. forEach( ) with arrow function prefered`);
arrayNumbers.forEach((element, index) => {
    if (index % 2 == 0) {
        console.log(`The even index is: ${index} and  element is : ${element}`);
    }
});