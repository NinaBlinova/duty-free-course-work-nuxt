"use strict";

interface IBonusProgramm {
    getDiscount(typeTicket : string) : number;
    getBonus(typeTicket : string) : number;
}


export type {IBonusProgramm};

