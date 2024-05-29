import {MixedPaymentStrategy} from "../Model/MixedPaymentStrategy";

describe("MixedPaymentStrategy", () => {
    // Тест оплаты картой
    test("should pay by card", () => {
        const strategy = new MixedPaymentStrategy(100, 0, 0, 50);
        const result = strategy.pay();
        expect(result).toEqual([
            "Paid by card: 50 rub. You have balance 50",
            50,
            0,
            0,
            0,
        ]);
    });

    // Тест оплаты наличными
    test("should pay by cash", () => {
        const strategy = new MixedPaymentStrategy(0, 100, 0, 50);
        const result = strategy.pay();
        expect(result).toEqual([
            "Paid by cash: 50 rub. You have balance 50",
            0,
            50,
            0,
            0,
        ]);
    });

    // Тест оплаты бонусами
    test("should pay by bonus", () => {
        const strategy = new MixedPaymentStrategy(0, 0, 100, 50);
        const result = strategy.pay();
        expect(result).toEqual([
            "Paid by bonus: 50 rub. You have balance 50",
            0,
            0,
            50,
            0,
        ]);
    });
    // Тест оплаты всеми способами
    test("should pay by all methods", () => {
        const strategy = new MixedPaymentStrategy(10, 20, 70, 100);
        const result = strategy.pay();
        expect(result).toEqual([
            "Paid by card: 10 rub., by cash: 20 rub., by bonus: 70 rub. You have balance card: 0, cash: 0, bonus: 0",
            0,
            0,
            0,
            0,
        ]);
    });

    // Тест оплаты частично бонусами и картой
    test("should pay partially with bonus and card", () => {
        const strategy = new MixedPaymentStrategy(50, 10, 50, 100);
        const result = strategy.pay();
        expect(result).toEqual([
            "Paid by card: 45 rub., by bonus: 45 rub., by cash: 10 rub. You have balance bonus: 5, the card: 5",
            5,
            0,
            5,
            0,
        ]);
    });

    // Тест недостатка средств
    test("should not pay due to insufficient funds", () => {
        const strategy = new MixedPaymentStrategy(0, 0, 0, 100);
        const result = strategy.pay();
        expect(result).toEqual(["No payment made.", 0, 0, 0, -1]);
    });
});