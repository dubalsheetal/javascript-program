console.log(`****Count the total number vowels including small and capital vowels for using for loop****`);
var string1=`I am very good IT Developer`;
var count=0;
for (let index = 0; index < string1.length; index++) {
    var char = string1.charAt(index);
    if (char=='e'||char=='a'||char=='i'||char=='I'||char=='o'||char=='u') {
        count++; 
    }
}
console.log(`Count of chars a,e,i,o,u is : ${count}`);
console.log('****Write a function to get the sum of cube of numbers from 1 to 5.****');
var sum=0;
for (let index = 1; index <=5; index++) {
    sum=sum+index*index*index;
}
console.log(`Sum of cube of numbers from 1 to 5 :${sum}`);
console.log(`**********3************`);
function oddPositionedChars(str){
    for (let index = 0; index < str.length; index++) {
        var char=str.charAt(index);
        //console.log(str.length); 
        if(index%2==1 && char != " "){
            console.log(`Given char at ${index} : `,str.charAt(index));    
        } 
    } 
}
oddPositionedChars(`Hard work always pays back`);
console.log(`*****Second String*******`);
oddPositionedChars(`Soon I will be UI IT Champ`);




