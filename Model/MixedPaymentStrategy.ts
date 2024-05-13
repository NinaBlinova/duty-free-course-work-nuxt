"use strict";

import {IPaymentStrategy} from "../Model/IPaymentStrategy";

class MixedPaymentStrategy implements IPaymentStrategy {
    name: string;
    amount: number;
    card: number;
    cash: number;
    bonus: number;

    constructor(card: number, cash: number, bonus: number, amount: number) {
        this.name = 'mixit'
        this.card = card;
        this.cash = cash;
        this.bonus = bonus;
        this.amount = amount;
    }

    //Что оплатили, сколько осталось в стринг, остаток денег на карте, остаток налички, бонусов
    pay(): [string, number, number, number, number] {
        // Оплата картой
        if (this.card >= this.amount && this.cash + this.bonus < this.amount) {
            const paymentCard = this.amount - (this.cash + this.bonus);
            return [`Paid by card: ${paymentCard} rub. You have balance ${this.card - paymentCard}`, this.card - paymentCard, 0, 0, 0];
        }
        // Оплата наличными
        else if (this.cash >= this.amount && this.card + this.bonus < this.amount) {
            const paymentCash = this.amount - (this.card + this.bonus);
            return [`Paid by cash: ${paymentCash} rub. You have balance ${this.cash - paymentCash}`, 0, this.cash - paymentCash, 0, 0];
        }
        // Оплата бонусами
        else if (this.bonus >= this.amount && this.card + this.cash < this.amount) {
            return [`Paid by bonus: ${this.amount} rub. You have balance ${this.bonus - this.amount}`, 0, 0, this.bonus - this.amount, 0];
        }
        //оплата частично наличкой и бонусами
        else if (this.card + this.cash >= this.amount && this.bonus < this.amount) {
            const paymentBonus = this.amount - this.bonus;
            const paymentCard = (paymentBonus * (this.card / (this.card + this.cash)));
            const paymentCash = (paymentBonus * (this.cash / (this.card + this.cash)));
            return [`Paid by card: ${paymentCard} rub., by cash: ${paymentCash} rub., by bonus: ${this.bonus} rub. You have balance card: ${this.card - paymentCard}, cash: ${this.cash - paymentCash}`, this.card - paymentCard, this.cash - paymentCash, 0, 0];

        }
        // оплата частично наличкой и бонусами
        else if (this.bonus + this.cash >= this.amount && this.card < this.amount) {
            const paymentCard = this.amount - this.card;
            const paymentCash = paymentCard * (this.cash / (this.bonus + this.cash));
            const paymentBonus = paymentCard * (this.bonus / (this.bonus + this.cash));
            return [`Paid by card: ${this.card} rub., by bonus: ${paymentBonus} rub., by cash: ${paymentCash} rub. You have balance cash: ${this.cash - paymentCash}, bonus: ${this.bonus - paymentBonus}`, 0, this.cash - paymentCash, this.bonus - paymentBonus, 0];
        }

        // оплата частично картой и наличкой

        else if (this.card + this.bonus >= this.amount && this.cash < this.amount) {
            const paymentCash = this.amount - this.cash;
            const paymentCard = paymentCash * (this.card / (this.bonus + this.card));
            const paymentBonus = paymentCash * (this.bonus / (this.bonus + this.card));
            return [`Paid by card: ${paymentCard} rub., by bonus: ${paymentBonus} rub., by cash: ${this.cash} rub. You have balance bonus: ${this.bonus - paymentBonus}, the card: ${this.card - paymentCard}`, this.card - paymentCard, 0, this.bonus - paymentBonus, 0];
        }
        // Оплата всеми способами
        else if (this.card + this.cash + this.bonus >= this.amount) {
            const paymentCard = (this.amount * (this.card / (this.card + this.cash + this.bonus)));
            const paymentCash = (this.amount * (this.cash / (this.card + this.cash + this.bonus)));
            const paymentBonus = (this.amount * (this.bonus / (this.card + this.cash + this.bonus)));
            return [`Paid by card: ${paymentCard} rub., by cash: ${paymentCash} rub., by bonus: ${paymentBonus} rub. You have balance ${this.card - paymentCard}, ${this.cash - paymentCash}, ${this.bonus - paymentBonus}`, this.card - paymentCard, this.cash - paymentCash, this.bonus - paymentBonus, 0];
        }
        // Недостаточно средств
        else {
            return ['No payment made.', this.card, this.cash, this.bonus, -1];
        }
    }
}

export {MixedPaymentStrategy};