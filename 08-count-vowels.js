function countVowels(str) {
    console.log(`String is : ${str}`);
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == 'a' || str[i] == 'A' || str[i] == 'e' || str[i] == 'E' || str[i] == 'i' || str[i] == 'I' || str[i] == 'o' || str[i] == 'o' || str[i] == 'u' || str[i] == 'U') {
            count++;
        }

    }
    return count;
}
let str1 = countVowels(`JavaScript”`);
console.log(`To count vowels  in the string is : ${str1} `);
console.log(`****************************************************`);
let str2 = countVowels(`HTML and CSS`);
console.log(`To count vowels  in the string is : ${str2} `);
console.log(`****************************************************`);
let str3 = countVowels(`Language Of Internet`);
console.log(`To count vowels  in the string is : ${str3} `);
console.log(`****************************************************`);
let str4 = countVowels(`I am UI Developer`);
console.log(`To count vowels  in the string is : ${str4}`);
console.log(`****************************************************`);
let str5 = countVowels(`Do or Die`);
console.log(`To count vowels  in the string is : ${str5}`);