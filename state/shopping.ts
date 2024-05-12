import {reactive} from 'vue'
import {CompletionItemKind, SymbolKind} from "vscode-languageserver-types";

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


export const toGetMySgopppingCart: IMyGooods = reactive({
    items: [] as IShoppingCart[],
    add(imageName: string,
        caption: string,
        type: string,
        numberOfGoods: number,
        price: number,
        cost: number) {
        this.items.push({
            imageName: imageName,
            caption: caption,
            type: type,
            numberOfGoods: numberOfGoods,
            price: price,
            cost: cost
        })
    }
})
