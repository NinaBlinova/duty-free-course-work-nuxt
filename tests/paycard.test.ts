import { CardPaymentStrategy } from "../Model/CardPaymentStrategy";

describe("CardPaymentStrategy", () => {
    // Тест успешной оплаты картой
    test("should pay by card successfully", () => {
        const strategy = new CardPaymentStrategy(100, 0, 0, 50);
        const result = strategy.pay();
        expect(result).toEqual([
            "Paid by card: 50 rub. You have balance 50",
            50,
            0,
            0,
            0,
        ]);
    });

    // Тест неудачной оплаты картой из-за недостатка средств
    test("should not pay by card due to insufficient funds", () => {
        const strategy = new CardPaymentStrategy(50, 0, 0, 100);
        const result = strategy.pay();
        expect(result).toEqual([
            "You paid by card 50, but you no longer have the funds to make a purchase.",
            0,
            50,
            0,
            -1,
        ]);
    });
});