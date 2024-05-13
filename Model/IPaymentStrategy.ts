"use strict";

interface IPaymentStrategy {
    name : string;
    pay(amount: number): [string, number, number, number, number];
}
export type {IPaymentStrategy};