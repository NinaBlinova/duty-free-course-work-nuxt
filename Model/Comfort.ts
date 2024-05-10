"use strict";

/* global console */

import {IBonusProgramm} from "IBonusProgramm";

class Comfort implements IBonusProgramm {
    name: string;
    cash: number;
    card: number;
    costTiscet: number;

    constructor(cash: number, card: number, costTiscet: number) {
        this.name = 'comfort';
        this.cash = cash;
        this.card = card;
        this.costTiscet = costTiscet;
    }

    getDiscount(name: string): number {
        if (this.card >= 55000) {
            //`Discount 20%`;
            return 0.2;
        } else if (this.card < 550000 && this.card > 25000) {
            //'Discount 10%';
            return 0.15;
        } else {
            //'Discount 0';
            return 0;
        }
    }

    getBonus(name: string): number {
        if (this.cash >= 70000) {
            //`Bonus ${this.costTiscet / 2}`;
            return this.costTiscet * 0.3;
        } else {
            return this.costTiscet * 0.2;
        }

    }

}


export {Comfort};