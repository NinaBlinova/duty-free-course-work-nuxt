"use strict";

import {IPaymentStrategy} from "IPaymentStrategy";

class CashPaymentStrategy implements IPaymentStrategy {
    name: string;
    amount: number;
    cash: number;

    constructor(balance: number, amount: number) {
        this.name = 'cash'
        this.cash = balance;
        this.amount = amount;
    }

    pay(): [string, number, number, number, number] {
        if (this.cash >= this.amount) {
            return [`Paid by card: ${this.amount} rub. You have balance ${this.cash - this.amount}`, this.cash - this.amount, 0, 0, 0];
        } else {
            return [`You paid by card ${this.cash}, but you no longer have the funds to make a purchase.`, 0, this.amount - this.cash, 0, -1];
        }
    }
}

export {CashPaymentStrategy};