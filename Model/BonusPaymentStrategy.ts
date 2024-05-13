"use strict";

import {IPaymentStrategy} from "IPaymentStrategy";

class BonusPaymentStrategy implements IPaymentStrategy {
    name: string;
    bonus: number;
    amount: number;
    cash: number;
    card: number;

    constructor(card: number, cash: number, bonus: number, amount: number) {
        this.name = 'bonus'
        this.bonus = bonus;
        this.amount = amount;
        this.cash = cash;
        this.card = card;
    }

    pay(): [string, number, number, number, number] {
        if (this.bonus >= this.amount) {
            return [`Paid by card: ${this.amount} rub. You have balance ${this.bonus - this.amount}`, this.card , this.cash, this.bonus - this.amount, 0];
        } else {
            return [`You paid by card ${this.bonus}, but you no longer have the funds to make a purchase.`, this.card , this.cash, this.amount - this.bonus, -1];
        }
    }
}

export {BonusPaymentStrategy};