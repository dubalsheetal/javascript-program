const array = [ 20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11 ];
console.log(array);

console.log(`1. Find the total elements available or length and log on console`);
console.log(array.length);

console.log(`2. Log the first element and last element in arrayNumbers and log on console`);
console.log(array.length-1);
console.log(`First element :${array[0]} and last element :${array[10]}`);

console.log(`3. Log the third last element using length property and log on console`);
console.log(array[array.length-3]);

console.log(`4. Find the all even numbers using for of loop and log on console`);
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element%2==0) {
        console.log(`Even No is: ${element}`);     
    }   
}

console.log(`5. Find the odd numbers for of loop and log on console`);
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element%2!=0) {
        console.log(`Odd No is: ${element}`); 
        
    }
}

console.log(`9. Find the numbers which are multiple of 5`);
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element%5==0) {
        console.log(`Multiple of 5 numbers :${element}`);   
    }
    
}

console.log(`10. Is number 115 available in arrayNumbers ?`);
let result=array.includes(115);
console.log(`Is number 115 available in arrayNumbers :${result}`);

console.log(`11. Is number 23 available in arrayNumbers ?`);
let result1=array.includes(23);
console.log(`Is number 23 available in arrayNumbers :${result1}`);

console.log(`12. Insert numbers → 55, 66 at index 3 and log array on console`);
let result2=array.splice(3,0,55,66);
console.log(array);

console.log(`13. Delete 3 elements starting from index 4 and log arrayNumbers on console`);
let res=array.splice(4,3);
console.log(res);

















