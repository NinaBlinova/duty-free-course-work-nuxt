"use strict";

/* global console */

import {IBonusProgramm} from "../Model/IBonusProgramm";

class Business implements IBonusProgramm {
    name: string;
    cash: number;
    card: number;
    costTiscet: number;

    constructor(cash: number, card: number, costTiscet: number) {
        this.name = 'business';
        this.cash = cash;
        this.card = card;
        this.costTiscet = costTiscet;
    }

    getDiscount(name: string): number {
        if (this.card > 88000) {
            //`Discount 30%`;
            return 0.3;
        } else if (this.card < 88000 && this.card > 66000) {
            //'Discount 15%';
            return 0.15;
        } else {
            return 0;
        }
    }

    getBonus(name: string): number {
        if (this.cash > 70000) {
            return this.costTiscet / 2;
        } else {
            return this.costTiscet/4;
        }
    }
}


export {Business};