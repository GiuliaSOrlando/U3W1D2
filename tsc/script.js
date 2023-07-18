"use strict";
class SonAccount {
    constructor(depAmount, withAmount) {
        this.balanceInit = 0;
        this.oneDeposit(depAmount);
        this.oneWithdrawal(withAmount);
        this.printBalance();
    }
    oneDeposit(depAmount) {
        this.balanceInit = this.balanceInit + depAmount;
        console.log("This is the amount you deposited: " + depAmount + "€");
        return this.balanceInit;
    }
    oneWithdrawal(withdrawalAmount) {
        if (withdrawalAmount < this.balanceInit) {
            this.balanceInit = this.balanceInit - withdrawalAmount;
            console.log("This is the amount you withdrawn: " + withdrawalAmount + "€");
            return this.balanceInit;
        }
        else {
            alert("Insufficient funds in the balance: unable to execute the withdrawal");
            throw new Error("Insufficient funds in the balance: unable to execute the withdrawal");
        }
    }
    printBalance() {
        console.log("This is the current balance: " + this.balanceInit + "€");
        this.balanceInit;
    }
}
class MotherAccount extends SonAccount {
    constructor(depAmount, withAmount) {
        super(depAmount, withAmount);
        this.interest();
    }
    interest() {
        let myInterest = (this.balanceInit / 100) * 10;
        console.log("The amount of the interset is equal to " + myInterest + "€");
        return myInterest;
    }
}
const sonSubmitBtn = document.getElementById("son-button");
let son;
sonSubmitBtn === null || sonSubmitBtn === void 0 ? void 0 : sonSubmitBtn.addEventListener("click", function (e) {
    e.preventDefault();
    let sonDeposit = document.getElementById("son-deposit");
    let sonDepositValue = Number(sonDeposit.value);
    let sonWithdrawal = document.getElementById("son-widthdrawal");
    let sonWithdrawalValue = Number(sonWithdrawal.value);
    son = new SonAccount(sonDepositValue, sonWithdrawalValue);
});
const motherSubmitBtn = document.getElementById("mother-button");
let mother;
motherSubmitBtn === null || motherSubmitBtn === void 0 ? void 0 : motherSubmitBtn.addEventListener("click", function (e) {
    e.preventDefault();
    let motherDeposit = document.getElementById("mother-deposit");
    let motherDepositValue = Number(motherDeposit.value);
    let motherWithdrawal = document.getElementById("mother-widthdrawal");
    let motherWithdrawalValue = Number(motherWithdrawal.value);
    mother = new MotherAccount(motherDepositValue, motherWithdrawalValue);
});
//# sourceMappingURL=script.js.map