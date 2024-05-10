"use strict";

import {IPaymentStrategy} from "IPaymentStrategy";

class BonusPaymentStrategy implements IPaymentStrategy {
    name: string;
    balance: number;
    amount: number;

    constructor(balance: number, amount: number) {
        this.name = 'bonus'
        this.balance = balance;
        this.amount = amount;
    }
    pay(): [string, number, number] {
        if (this.balance > 0 && this.balance > this.amount && this.amount > 0 && this.balance > 0) {
            return [`Paid for with bonus: ${this.amount} rub. You have balance ${this.balance - this.amount}`, this.balance - this.amount, 0];
        } else if (this.balance < this.amount && this.amount > 0 && this.balance > 0) {
            return [`You paid for with bonus ${this.balance}, but you no longer have the funds to make a purchase.`, 0, this.amount - this.balance];
        } else {
            return ['No payment made.', 0, 0];
        }
    }
}

export {BonusPaymentStrategy};