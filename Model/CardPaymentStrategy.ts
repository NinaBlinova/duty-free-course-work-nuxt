"use strict";

import {IPaymentStrategy} from "../Model/IPaymentStrategy";

class CardPaymentStrategy implements IPaymentStrategy {
    name: string;
    amount: number;
    card: number;
    cash: number;
    bonus: number;

    constructor(card: number, cash: number, bonus: number, amount: number) {
        this.name = 'card'
        this.card = card;
        this.amount = amount;
        this.cash = cash;
        this.bonus = bonus;
    }

    pay(): [string, number, number, number, number] {
        if (this.card >= this.amount) {
            return [`Paid by card: ${this.amount} rub. You have balance ${this.card - this.amount}`, this.card - this.amount, this.cash, this.bonus, 0];
        } else {
            return [`You paid by card ${this.card}, but you no longer have the funds to make a purchase.`, this.amount - this.card, this.cash, this.bonus, -1];
        }
    }
}

export {CardPaymentStrategy};