const arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];
console.log(`1. Add 10 into each element and log new array result on console`);
const array = arrayNumbers.map((element, index) => {
    return element + 10;

});
console.log(`Add 10 in each element :[${array}]`);
console.log(`===================================================`);
console.log(`2. Cube the each array element and log on console`);
const arrayCube = arrayNumbers.map(element => {
    return element * 3;
});
console.log(`Cube in each element :[${arrayCube}]`);
console.log(`===================================================`);
console.log(`3. Add the index value into its corresponding each array element`);
const array1 = [];
arrayNumbers.map((element, index) => {
    let rec = index + element;
    return array1.push(rec);

});
console.log(`index+ element is :[${array1}]`);