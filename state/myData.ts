import {reactive} from 'vue';
import {Comfort} from "../Model/Comfort";
import {Business} from "../Model/Business";
import {Econom} from "../Model/Econom";
import {CompletionItemKind} from "vscode-languageserver-types";
import Interface = CompletionItemKind.Interface;

interface IFlightsData {
    typeAirplane: string,
    direction: string,
    customerName: string,
    price: number,
    pinCode: string,
    departureTime: string,
}

interface IBalance {
    wallet: number,
    card: number,
    bonus: number,
    discount: number,

}

interface IBonus {
    typeAirplane: string,
    price: number,
    pinCode: string,
    wallet: number,
    card: number,
    bonus: number,
    discount: number,
}

interface IData {
    items: IFlightsData[],

    add(typeAirplane: string,
        direction: string,
        customerName: string,
        price: number,
        pinCode: string,
        departureTime: string): void
}

interface IMyBalance {
    items: IBalance[],

    add(wallet: number,
        card: number,
        bonus: number,
        discount: number): void,

    update(card: number, wallet: number, bonus: number): void,
}

interface IMyBonus {
    items: IBonus[],

    add(typeAirplane: string,
        price: number,
        pinCode: string,
        wallet: number,
        card: number,
        bonus: number,
        discount: number): void,

    updateBonus(typeAirplane: string,
                price: number,
                pinCode: string,
                wallet: number,
                card: number,
                bonus: number,
                discount: number): void
}

export const data: IData = reactive({
    items: [] as IFlightsData[],

    add(typeAirplane: string,
        direction: string,
        customerName: string,
        price: number,
        pinCode: string,
        departureTime: string) {
        this.items.push({
            typeAirplane: typeAirplane,
            direction: direction,
            customerName: customerName,
            price: price,
            pinCode: pinCode,
            departureTime: departureTime
        })
    }
})

export const myBalance: IMyBalance = reactive({
    items: [] as IBalance[],
    add(wallet: number,
        card: number,
        bonus: number,
        discount: number) {
        this.items.push({
            wallet: wallet,
            card: card,
            bonus: bonus,
            discount: discount
        })
    },
    update(card: number, wallet: number, bonus: number) {
        this.items[0].wallet = wallet;
        this.items[0].card = card;
        this.items[0].bonus = bonus;
    },

})


export const myBonus: IMyBonus = reactive({
    items: [] as IBonus[],

    add(typeAirplane: string,
        price: number,
        pinCode: string,
        wallet: number,
        card: number,
        bonus: number,
        discount: number) {
        this.items.push({
            typeAirplane: typeAirplane,
            price: price,
            pinCode: pinCode,
            wallet: wallet,
            card: card,
            bonus: bonus,
            discount: discount
        })
    },

    updateBonus(typeAirplane: string, price: number, pinCode: string, wallet: number, card: number, bonus: number, discount: number) {
        if (typeAirplane === 'business') {
            const businessClass = new Business(wallet, card, price);
            this.items[0].bonus = businessClass.getBonus(typeAirplane);
            this.items[0].discount = businessClass.getDiscount(typeAirplane);
        } else if (typeAirplane === 'comfort') {
            const comfortClass = new Comfort(wallet, card, price);
            this.items[0].bonus = comfortClass.getBonus(typeAirplane);
            this.items[0].discount = comfortClass.getDiscount(typeAirplane);
        } else if (typeAirplane === 'econom') {
            const economClass = new Econom(wallet, card, price);
            this.items[0].bonus = economClass.getBonus(typeAirplane);
            this.items[0].discount = economClass.getDiscount(typeAirplane);
        } else {
            this.items[0].bonus = -1;
            this.items[0].discount = -1;
        }
    }
})

