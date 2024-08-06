function squareOfWordLength(sentence){
    console.log(`Given sentence is: ${sentence}`);
    var result = sentence.split(" ");
    var len = result.length;
    var square = len * len;
    return square;
}
console.log("*****************1********************");
var result = squareOfWordLength("JavaScript");
console.log(`Square of world length is: ${result}`);

var result = squareOfWordLength("Google Chrome");
console.log(`Square of world length is: ${result}`);

var result = squareOfWordLength("Web Developer Smart");
console.log(`Square of world length is: ${result}`);

console.log("*****************2.1********************");
function display(){
var sentence="I am Angular developer";
console.log('Given sentence is:',sentence);

var sentenceLength=sentence.length;
console.log(` Length of sentence ${sentence}:`,sentenceLength);
var sentenceSplit=sentence.split(" ");
//console.log(`Split length`,sentenceSplit.length);
//console.log(`split:`,sentenceSplit);
var result=sentenceLength/sentenceSplit.length;
console.log(`The result after division is :`,result);

console.log("*****************2.2********************");
var result=sentenceLength *sentenceSplit.length;
console.log(`The result after multiplying is :`,result);
}
display();