"use strict";

class Parking {
    private typeTiscet: string;
    private days: number;
    private price: number;

    constructor(typeAirpalne: string, days: number) {
        this.typeTiscet = typeAirpalne;
        this.days = days;
        this.price = this.calculatePrice();
    }

    private calculatePrice(): number {
        let pricePerHour = 35;
        let totalHours = this.days * 24;
        let discount = 0;

        switch (this.typeTiscet) {
            case "business":
                if (this.days >= 10) {
                    discount = 0.6;
                } else if (this.days >= 5) {
                    discount = 0.2;
                } else {
                    discount = 0.1;
                }
                break;
            case "comfort":
                if (this.days >= 10) {
                    discount = 0.5;
                } else {
                    discount = 0.05;
                }
                break;
            case "economy":
                discount = 0.1;
                break;
        }

        return totalHours * pricePerHour * (1 - discount);
    }

    getPrice(): number {
        return this.price;
    }
}


export {Parking};