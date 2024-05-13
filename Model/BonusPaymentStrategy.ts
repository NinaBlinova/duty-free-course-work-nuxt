"use strict";

import {IPaymentStrategy} from "IPaymentStrategy";

class BonusPaymentStrategy implements IPaymentStrategy {
    name: string;
    bonus: number;
    amount: number;

    constructor(balance: number, amount: number) {
        this.name = 'bonus'
        this.bonus = balance;
        this.amount = amount;
    }

    pay(): [string, number, number, number, number] {
        if (this.bonus >= this.amount) {
            return [`Paid by card: ${this.amount} rub. You have balance ${this.bonus - this.amount}`, this.bonus - this.amount, 0, 0, 0];
        } else {
            return [`You paid by card ${this.bonus}, but you no longer have the funds to make a purchase.`, 0, this.amount - this.bonus, 0, -1];
        }
    }
}

export {BonusPaymentStrategy};