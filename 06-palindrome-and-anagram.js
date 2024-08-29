function isPalindrome(str) {
    let rev = "";
    for (let i = str.length - 1; i >= 0; i--) {
        rev += str[i];
    }
    if (rev == str) {
        console.log(`Is String  ${rev} is palindrome : Yes`);

    } else {
        console.log(`Is String  ${rev} palindrome : NO `);
    }
}
console.log(`=============== [1. Palindrome]=============`);
isPalindrome(`madam`);
isPalindrome(`dad`);
isPalindrome(`hello`);
console.log(`============================================  `);
console.log(`=============== [1. Anagram]===============`);
function isAnagram(str1, str2) {
    let string1 = str1.toLowerCase().split("").sort().join("");
    let string2 = str2.toLowerCase().split("").sort().join("");
    if (string1 == string2) {
        console.log(` is String  ${str1} and ${str2} is anagram :true`);

    } else {
        console.log(` is String  ${str1} and ${str2} is anagram :false`);
    }

}
isAnagram(`Silent`, `Listen`);
isAnagram(`Hello`, `World`);
isAnagram(`Such`, `Much`);
console.log(`=========================================`);
