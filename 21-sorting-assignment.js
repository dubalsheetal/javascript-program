const arrayRollNumbers = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45 ];
console.log(`=========================================================`);
console.log(`*****1. Reverse the array******`);
console.log(`The original array is : [${arrayRollNumbers}]`);
arrayRollNumbers.reverse();
console.log(`Reverse array is : [${arrayRollNumbers}]`);
console.log(`==========================================================`);
console.log(`2. Use the sort() method as it is without any custom sorting logic`);
arrayRollNumbers.sort();
console.log(`The sorted array is : [${arrayRollNumbers}]`);
console.log(`=========================================================`);
console.log(`3. Sort the array in ascending order, by writing your custom logic`);
arrayRollNumbers.sort((a,b)=>{
    return a > b ? -1 : 1 ;
})
console.log(`Sort the array in ascending order : [${arrayRollNumbers}]`);
console.log(`=========================================================`);
console.log(`4. Find the Greatest number from the array`);
const array=arrayRollNumbers.sort();
//console.log(array.length-1);
console.log(`Greatest no from array is : ${array[array.length-1]}`);
console.log(`=========================================================`);
console.log(`5. Find the smallest number from the array`);
console.log(`Smallest no from array is : ${array[0]}`);
console.log(`=========================================================`);
console.log(`6. Remove duplicates from array`);
const arrayUnique=[];
for (let index = 0; index < arrayRollNumbers.length; index++) {

    if (arrayUnique.indexOf(arrayRollNumbers[index])== -1) {
        arrayUnique.push(arrayRollNumbers[index])
    } 
}
console.log(`The array is : [${arrayUnique}]`);
console.log(`=========================================================`);