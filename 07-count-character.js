function charCount(str) {
    console.log(`String is : ${str}`);
    let count = 0;
    for (let index = 0; index < str.length; index++) {
        const element = str[index];
        if (str[index] == 'a' || str[index] == 'A') {
            count++;

        }

    }
    return count;
}
let str1 = charCount(`JavaScript`);
console.log(`To count character ‘a’ in the string is :${str1}`);
console.log(`****************************************************`);
let str2 = charCount(`Do or Die`);
console.log(`To count character ‘a’ in the string is :${str2}`);
console.log(`****************************************************`);
let str3 = charCount(`Learn with us, Job with us`);
console.log(`To count character ‘a’ in the string is :${str3}`);
console.log(`****************************************************`);
let str4 = charCount(`Empowering Dreams, Guaranteeing Futures`);
console.log(`To count character ‘a’ in the string is :${str4}`);
console.log(`****************************************************`);
let str5 = charCount(`Anny, My favorite fruit is Apple`);
console.log(`To count character ‘a’ in the string is :${str5}`);