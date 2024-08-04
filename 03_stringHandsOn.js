function stringHandsOn(){
    var greet= "   Hey you are doing good, keep it up   ";
    console.log(`*************1**************`);
    console.log(`The Given string is: `,greet);
    var greetLength=greet.length;

    console.log(`*************2**************`);
    console.log(`Total length : `,greetLength);

    console.log(`*************3**************`);  
      var greetTrim=greet.trim();
    //console.log(greetTrim);
    var greetTrimlength=greetTrim.length
    console.log(`After string trim length is: `, greetTrimlength);
    

    console.log(`*************4**************`); 
    console.log(`Total removed character: leading and trailing :`,greetLength- greetTrimlength);

    console.log(`*************5**************`); 
    console.log(`First and last character :`,greetTrim.charAt(0),greetTrim.charAt(33));
     
    console.log(`*************6**************`); 
     var result = greetTrim.split(" ");
    // console.log(result);
     console.log(`Total number of words: `, result.length);

     console.log(`*************7**************`); 
     var result = greet.indexOf("good");
     console.log(`Index of character good is: `, result);

     console.log(`*************8**************`); 
     var result = greet.substring(22);
     console.log(`The substring starting from index 22: `, result);

     console.log(`*************9**************`); 
    var result = greetTrim.endsWith("up");
    console.log(`String ends with word “up”: `, result);

    console.log(`*************10**************`); 
    var result = greetTrim.startsWith("Hey");
    console.log(`String starts with word "Hey": `, result);

    
}
stringHandsOn();