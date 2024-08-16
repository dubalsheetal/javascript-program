let professor = {
    firstName: "Shree",
    lastName: "Patil",
    age: 32,
    contactNo: 1234567891,
    pin: 415104,
    department: "Computer",
    certificates: ["Hacker Rank Participation",
        "Certificate in IFE course", "Certificate in Adv Programming"],
    degrees: {
        engineering: "CSC",
        phd: "Adv Computing",
        msc: "data science"
    }

}
console.log(professor);
console.log(`==============================================================`);
professor.totalExperience = "14 years";
console.log(`TotalExperience    :  ${professor.totalExperience}`);
console.log(professor);
console.log(`==============================================================`);

console.log(`Modify any existing property and log object on console`);
professor.age = 36;
console.log(professor);
console.log(`~===============================================================`);
console.log(`Add one new certificate → “Oracle Certified” at the 2nd index of array → certificates`);
professor.certificates.splice(2, 0, "Oracle Certified");
console.log(professor.certificates);
console.log(professor);
console.log(`=======================================================================`);
console.log(`  Log the last element of the array →certificates.    `);
let str = professor.certificates.length - 1;
console.log(str);
console.log(`Last element of certificates  : ${professor.certificates[3]}`);
console.log(`========================================================================`);
console.log(`    9. Traverse the array using for loop  `);
for (const element of professor.certificates) {
    console.log(element);
}
console.log(`=========================================================================`);
console.log(`    10. Log complete object on console using for in loop   `);
for (const key in professor) {
    if (Object.prototype.hasOwnProperty.call(professor, key)) {
        const element = professor[key];
        console.log(`${key}  :  ${element}`);

    }
}