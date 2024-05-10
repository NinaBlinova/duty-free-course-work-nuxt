"use strict";

import {Product} from "Products";

class ShoppingCart {

    public _products: Product[] = Array();

    addProduct(product: Product) {
        this._products.push(product);
    }

    getProducts(): Product[] {
        return this._products;
    }

    deleteProduct(id: number): Product[] {
        //ищем индекс продукта в массиве _products, который имеет id, равный переданному id
        const index = this._products.findIndex(product => product.id === id);
        //Здесь проверяем, был ли найден индекс продукта в массиве.
        // Если index не равен -1, значит, продукт с заданным id найден,
        // используем метод splice() для удаления одного элемента из массива _products по найденному индексу
        if (index !== -1) {
            this._products.splice(index, 1);
        }
        return this._products;
    }

    calculateTotalPrice(): number {
        let totalPrice = 0;
        this._products.forEach(product => {
            totalPrice += product.price;
        });
        return totalPrice;
    }
}

export {ShoppingCart}