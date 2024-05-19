import {reactive} from 'vue'

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
    item: IBalance,
    add(wallet: number,
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
    }
})
