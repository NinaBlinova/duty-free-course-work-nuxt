import { Business } from '../Model/Business';

describe('Business class', () => {
    let business: Business;

    beforeEach(() => {
        business = new Business(80000, 90000, 200);
    });

    test('should create a new instance of Business class', () => {
        expect(business).toBeInstanceOf(Business);
    });

    test('should return correct discount based on card amount', () => {
        expect(business.getDiscount('business')).toBe(0.3); // Card amount > 88000
        business.card = 70000;
        expect(business.getDiscount('business')).toBe(0.15); // Card amount < 88000 and > 66000
        business.card = 50000;
        expect(business.getDiscount('business')).toBe(0); // Card amount < 66000
    });

    test('should return correct bonus based on cash amount', () => {
        expect(business.getBonus('business')).toBe(100); // Cash amount > 70000
        business.cash = 60000;
        expect(business.getBonus('business')).toBe(50); // Cash amount < 70000
    });
});