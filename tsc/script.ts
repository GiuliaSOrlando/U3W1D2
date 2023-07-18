class SonAccount {
  balanceInit: number
  constructor(depAmount: number, withAmount: number) {
    this.balanceInit = 0
    this.oneDeposit(depAmount)
    this.oneWithdrawal(withAmount)
    this.printBalance()
  }
  oneDeposit(depAmount: number): number {
    this.balanceInit = this.balanceInit + depAmount
    console.log("This is the amount you deposited: " + depAmount + "€")
    return this.balanceInit
  }
  oneWithdrawal(withdrawalAmount: number): number {
    if (withdrawalAmount < this.balanceInit) {
      this.balanceInit = this.balanceInit - withdrawalAmount
      console.log("This is the amount you withdrawn: " + withdrawalAmount + "€")
      return this.balanceInit
    } else {
      alert(
        "Insufficient funds in the balance: unable to execute the withdrawal"
      )
      throw new Error(
        "Insufficient funds in the balance: unable to execute the withdrawal"
      )
    }
  }

  printBalance() {
    console.log("This is the current balance: " + this.balanceInit + "€")
    this.balanceInit
  }
}

class MotherAccount extends SonAccount {
  constructor(depAmount: number, withAmount: number) {
    super(depAmount, withAmount)
    this.interest()
  }
  interest() {
    let myInterest: number = (this.balanceInit / 100) * 10
    console.log("The amount of the interset is equal to " + myInterest + "€")
    return myInterest
  }
}

const sonSubmitBtn = document.getElementById("son-button")
let son
sonSubmitBtn?.addEventListener("click", function (e) {
  e.preventDefault()
  let sonDeposit = document.getElementById("son-deposit") as HTMLInputElement
  let sonDepositValue = Number(sonDeposit.value)
  let sonWithdrawal = document.getElementById(
    "son-widthdrawal"
  ) as HTMLInputElement
  let sonWithdrawalValue = Number(sonWithdrawal.value)
  son = new SonAccount(sonDepositValue, sonWithdrawalValue)
})

const motherSubmitBtn = document.getElementById("mother-button")
let mother
motherSubmitBtn?.addEventListener("click", function (e) {
  e.preventDefault()
  let motherDeposit = document.getElementById(
    "mother-deposit"
  ) as HTMLInputElement
  let motherDepositValue = Number(motherDeposit.value)
  let motherWithdrawal = document.getElementById(
    "mother-widthdrawal"
  ) as HTMLInputElement
  let motherWithdrawalValue = Number(motherWithdrawal.value)
  mother = new MotherAccount(motherDepositValue, motherWithdrawalValue)
})
