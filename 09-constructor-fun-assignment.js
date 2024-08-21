function Bank(bankName, location, ifscCode, branchCode){
    this.bankName = bankName;
    this.location = location;
    this.ifscCode = ifscCode;
    this.branchCode = branchCode;  
}
let yesBank = new Bank("YesBank", "Pune", "YES00020", "0123");
console.log(`===============Bank Details===================`);
console.log(yesBank);
let sbiBank =new Bank("SBIBank","Mumbai","SBI00030","0145");
console.log(sbiBank);
let mahBank =new Bank("MAHBank","Karad","MAH00010","0789");
console.log(mahBank);
let axisBank =new Bank("AXISBank","Thane","AXIS00080","1789");
console.log(axisBank);
Bank.prototype.openTime="9 AM IST";
Bank.prototype.closeTime="6 AM IST";
console.log(`=======Log the openTime and closeTime of object sbiBank=======`);
console.log(`SBI Bank open at ${sbiBank.openTime} and close at ${sbiBank.closeTime}`);
console.log(`========Log the bankName and closeTime of object axisBank========`);
console.log(`Bank Name : ${axisBank.bankName} and close at ${axisBank.closeTime}`);
console.log(`========Log the bankName, branchCode and openTime of object yesBank=======`);
console.log(`Bank Name : ${yesBank.bankName} and Branch Code is : ${yesBank.branchCode} and open at ${yesBank.openTime} `);