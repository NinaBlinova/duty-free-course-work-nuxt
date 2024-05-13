import {reactive, computed, ref} from 'vue'

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
    }
})
