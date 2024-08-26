console.log(`*****With no args and no return value*****`);
let show = () => {
    console.log(`Good Morning, Today is Friday`);

}
show();
console.log(`=================================================================`);
console.log(`*****With 3 args and no return value*****`);
let calculate = (n1, n2, n3) => {
    console.log(`Numbers are : n1 = ${n1} , n2 = ${n2} , n3 = ${n3} `);
    let result = n1 * n2 * n3;
    console.log(`Multiplication is  : ${result}`);


}
calculate(5, 5, 2);
console.log(`*****With 2 args and 1 default value and no return value*****`);
console.log(`=================================================================`);
calculate(10, 4, n3 = 1);
console.log(`=================================================================`);
console.log(`*****With 5 nos args and  return value*****`);
let addition = (n1, n2, n3, n4, n5) => {
    console.log(`Numbers are : n1 = ${n1} , n2 = ${n2} , n3 = ${n3} , n4 = ${n4} , n5 = ${n5}`);
    return n1 + n2 + n3 + n4 + n5;

}
let result = addition(100, 100, 200, 349, 756);
console.log(`Addition is : ${result}`);
console.log(`=================================================================`);

console.log(`*****With strings args and  return value*****`);
let string1 = (str1, str2, str3, str4, str5) => {
    console.log(`Strings are : str1 = ${str1} , str2 = ${str2} , str3 = ${str3} , str4 = ${str4} , str5 = ${str5}`);
    let result = str1.concat(str2).concat(str3).concat(str4).concat(str5);
    return result;

}

let result1 = addition(`I am `, ` learning `, ` ES6 `, ` features `, ` in depth`);
console.log(`Addition of string is : ${result1}`);
