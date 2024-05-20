"use strict";

import {IPaymentStrategy} from "../Model/IPaymentStrategy";
// Контекст
class PaymentContext {
    private strategy: IPaymentStrategy;

    constructor(strategy: IPaymentStrategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy: IPaymentStrategy) {
        this.strategy = strategy;
    }

    pay(amount: number): [string, number, number, number, number] {
        return this.strategy.pay(amount);
    }
}

export {PaymentContext};