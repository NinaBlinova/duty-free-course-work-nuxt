"use strict";

/* global console */

import {IBonusProgramm} from "IBonusProgramm";

class Econom implements IBonusProgramm {
    name: string;
    cash: number;
    card: number;
    costTiscet: number;

    constructor(cash: number, card: number, costTiscet: number) {
        this.name = 'econom';
        this.cash = cash;
        this.card = card;
        this.costTiscet = costTiscet;
    }

    getDiscount(name: string): number {
        //'Discount 4%';
        return 0.04
    }

    getBonus(name: string): number {
        //console.log(`Bonus ${this.costTiscet / 2}`)
        return this.costTiscet * 0.1;

    }

}


export {Econom};