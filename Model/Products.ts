"use strict";

class Product {
    id: number;
    name: string;
    type: string;
    price: number;
    constructor(id: number, name: string, type: string, price : number) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.price = price;
    }
}

export {Product}