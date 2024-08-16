let sbiBank = {
    bankName: "SBIBank",
    location: "Pune",
    accountNo: 10231456,
    ifsc: "SC456789",
    interestRate: 7.5,
    showDetails: function () {
        console.log(`Bank Name : ${this.bankName}` + ` || ` + ` Location : ${this.location}` + ` || ` + ` Account No: ${this.accountNo}  ` + ` || ` + ` IFSC : ${this.ifsc}` + ` || ` + `Interest Rate : ${this.interestRate} %`);
    }
}

let axisBank = {
    bankName: "AxisBank",
    location: "Pune",
    accountNo: 102316,
    ifsc: "PO45678912",
    interestRate: 4.5,
    showDetails: function () {
        console.log(`Bank Name : ${this.bankName}` + ` || ` + ` Location : ${this.location}` + ` || ` + ` Account No: ${this.accountNo}  ` + ` || ` + ` IFSC : ${this.ifsc}` + ` || ` + `Interest Rate : ${this.interestRate} %`);
    }
}

let hdfcBank = {
    bankName: "HDFCBank",
    location: "Pune",
    accountNo: 1021456,
    ifsc: "HD456789",
    interestRate: 8.5,
    showDetails: function () {
        console.log(`Bank Name : ${this.bankName}` + ` || ` + ` Location : ${this.location}` + ` || ` + ` Account No: ${this.accountNo}  ` + ` || ` + ` IFSC : ${this.ifsc}` + ` || ` + `Interest Rate : ${this.interestRate} %`);
    }
}

let yesBank = {
    bankName: "YesBank",
    location: "Pune",
    accountNo: 77231456,
    ifsc: "AS456789",
    interestRate: 6.5,
    showDetails: function () {
        console.log(`Bank Name : ${this.bankName}` + ` || ` + ` Location : ${this.location}` + ` || ` + ` Account No: ${this.accountNo}  ` + ` || ` + ` IFSC : ${this.ifsc}` + ` || ` + `Interest Rate : ${this.interestRate} %`);
    }
}

sbiBank.showDetails();
axisBank.showDetails();
hdfcBank.showDetails();
yesBank.showDetails();