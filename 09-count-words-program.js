function countWords(str) {
    console.log(`String is : ${str}`);
    let count = 0;
    let string1 = str.split(" ");
    for (let index = 0; index < string1.length; index++) {
        const element = string1[index];
        count++;

    }
    return count;
}
let str1 = countWords(`JavaScript The language of Internet`);
console.log(`Count words in the string is : ${str1}`);
console.log(`***********************************************`);
let str2 = countWords(`Enhance Your Learning Journey with Exclusive Add-ons`);
console.log(`Count words in the string is : ${str2}`);
console.log(`***********************************************`);
let str3 = countWords(`Beyond frameworks, Beyond Imagination`);
console.log(`Count words in the string is : ${str3}`);
console.log(`***********************************************`);
let str4 = countWords(`I am passionate software developer`);
console.log(`Count words in the string is : ${str4}`);
console.log(`***********************************************`);