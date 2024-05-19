import {reactive} from 'vue'

interface IShoppingCart {
    imageName: string,
    caption: string,
    type: string,
    numberOfGoods: number,
    price: number,
    cost: number
}

interface IMyGooods {
    items: IShoppingCart[]

    add(imageName: string,
        caption: string,
        type: string,
        numberOfGoods: number,
        price: number): void
}

export const myGoods: IMyGooods = reactive({
    items: [] as IShoppingCart[],
    add(imageName: string,
        caption: string,
        type: string,
        numberOfGoods: number,
        price: number) {
        if (numberOfGoods < 1) {
            numberOfGoods = 1; // Устанавливаем количество товара равным 1, если оно меньше 1
        }
        this.items.push({
            imageName: imageName,
            caption: caption,
            type: type,
            numberOfGoods: numberOfGoods,
            price: price
        })
    },
    changeQuantity(quantity: number, imageName: string) {
        const itemIndex = this.items.findIndex((item: IShoppingCart) => item.imageName === imageName);
        if (itemIndex !== -1) {
            this.items[itemIndex].numberOfGoods = quantity;
        }
    },
    deleteGood(imageName: string) {
        const itemIndex = this.items.findIndex((item: IShoppingCart) => item.imageName === imageName);
        this.items.splice(itemIndex, 1);

    }
})
