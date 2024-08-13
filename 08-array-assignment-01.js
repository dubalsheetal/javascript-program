const fruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(`*****1. Log the first and last element on console*****`);
//console.log(fruits.length);
console.log(`Array is : ${fruits}`);
console.log(`First element in array :${fruits[0]}`);
console.log(`Last element in array :${fruits[4]}`);
console.log(`=========================================================`);
console.log(`***2. Add element → Papaya before the element ‘Banana’ and then log array on console***`);
const sec = fruits.unshift("Papaya")
//console.log(fruits.length);
console.log(fruits);
console.log(`=========================================================`);
console.log(`*****3. Remove ‘Mango’ from the array*****`);
const fruits1 = ["Papaya", "Banana", "Orange", "Apple", "Mango", "Water Melon"];
const result = fruits1.splice(4, 1);
console.log(fruits1);
console.log(`=========================================================`);
console.log(`*****4. Add element or insert an element ‘Pineapple’ at the last position*****`);
const fruits2 = ["Papaya", "Banana", "Orange", "Apple", "Water Melon"];
const result1 = fruits2.push("Pineapple");
console.log(fruits2);
console.log(`=========================================================`);
console.log(`*****5. Insert an element - ‘Dragon Fruit’ before “Water Melon”*****`);
const res = fruits2.splice(4, 0, "Dragon Fruit");
console.log(fruits2);
console.log(`=========================================================`);
console.log(`*****”6. Replace an element ‘Orange’ with ‘Kiwi’*****`);
const res1 = fruits2.splice(2, 1, "kiwi");
console.log(fruits2);
console.log(`=========================================================`);
console.log(`*****7. Log the elements starting from index 1 to 4******`);
const sentence = ["Papaya", "Banana", "kiwi", "Apple", "Dragon Fruit", "Water Melon", "Pineapple"];
let res2 = sentence.slice(1, 5);
console.log(res2);
console.log(`=========================================================`);
console.log(`*****8. Only select last 3 element and log on console: Use the length property******`);
let str = ['Banana', 'kiwi', 'Apple', 'Dragon Fruit'];
let str1 = str[str.length - 3];
console.log(str1);







