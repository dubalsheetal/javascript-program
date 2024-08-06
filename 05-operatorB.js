console.log(`****************Greater Number********************`);

function greaterNumber(n1,n2){
    console.log(`Given no are :${n1} and ${n2}`)
var result=n1>=n2?n1:n2;
console.log(`Greater number : ${result}`);
}
greaterNumber(10,-10);
greaterNumber(800,899);
console.log(`*******Check Number is even or odd********`);
function isEvenOrOddNum(no){
    console.log(`Given no is : ${no}`);
    var result=no%2==0?true:false;
      
     return result;
}
 var result=isEvenOrOddNum(29);
 console.log(`Given no is  Even`,result);
 var result=isEvenOrOddNum(44);
console.log(`Given no is Even`,result);
var result=isEvenOrOddNum(0);
console.log(`Given no is Even`,result);
var result=isEvenOrOddNum(101);
console.log(`Given no is Even`,result);
console.log(`********Check word is even or odd**********`);
function wordLength(str1){
var result= str1.length;
console.log(`Given String is: ${str1}`);
 var result=result%2==0?true:false;
return result;
 
}

var result=wordLength(`JavaScript`);
console.log(`Given word length value is even: `,result);
var result=wordLength(`developer`);
console.log(`Given word length value is even: `,result);
var result=wordLength(`Google`);
console.log(`Given word length value is even: `,result);