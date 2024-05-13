"use strict";

import {IPaymentStrategy} from "IPaymentStrategy";

class CashPaymentStrategy implements IPaymentStrategy {
    name: string;
    bonus: number;
    amount: number;
    cash: number;
    card: number;

    constructor(card: number, cash: number, bonus: number, amount: number) {
        this.name = 'cash'
        this.bonus = bonus;
        this.amount = amount;
        this.cash = cash;
        this.card = card;
    }

    pay(): [string, number, number, number, number] {
        if (this.cash >= this.amount) {
            return [`Paid by cash: ${this.amount} rub. You have balance ${this.cash - this.amount}`,this.card, this.cash - this.amount, this.bonus, 0];
        } else {
            return [`You paid by cash ${this.cash}, but you no longer have the funds to make a purchase.`, this.card, this.amount - this.cash, this.bonus, -1];
        }
    }
}

export {CashPaymentStrategy};