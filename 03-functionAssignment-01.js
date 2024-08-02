console.log("***Function  with no arguments and no return type **");
function display(){
    console.log("Hi..........");
    
}
function show(){
    console.log("Welcome........");
}

display();
show();

console.log("****Function with arguments ****");
function personalDetails(firstName,lastName,collageName){
    console.log("My First Name Is:",firstName);
    console.log("My Last Name Is:",lastName);
    console.log("My Collage Name Is:",collageName);
    
}

personalDetails("Shital","Dubal","Dr DYP Collage, Pune");

console.log("****Addition ****");
function addThreeValues(n1,n2,n3){
    console.log("Give number:", n1);
    console.log("Give number:", n2);
    console.log("Give number:", n3);
    console.log("Give String:", n1);
    console.log("Give String:", n2);
    console.log("Give String:", n3);
    var result =n1 +" "+ n2 +" "+ n3;
    console.log("Addition is: ", result);
}
addThreeValues(10.23,600,40);
console.log("****Addition String****");

addThreeValues("Hello","Good","Morning");