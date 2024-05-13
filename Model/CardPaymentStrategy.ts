"use strict";

import {IPaymentStrategy} from "../Model/IPaymentStrategy";

class CardPaymentStrategy implements IPaymentStrategy {
    name: string;
    amount: number;
    card: number;

    constructor(card: number, cash: number, bonus: number, amount: number) {
        this.name = 'card'
        this.card = card;
        this.amount = amount;
    }

    pay(): [string, number, number, number, number] {
        if (this.card >= this.amount) {
            return [`Paid by card: ${this.amount} rub. You have balance ${this.card - this.amount}`, this.card - this.amount, 0, 0, 0];
        } else {
            return [`You paid by card ${this.card}, but you no longer have the funds to make a purchase.`, 0, this.amount - this.card, 0, -1];
        }
    }
}

export {CardPaymentStrategy};