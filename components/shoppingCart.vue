<script setup>
import {computed, ref} from "vue";
import {toGetMySgopppingCart} from "~/state/shopping.ts";


const props = defineProps(['imageName', 'caption', 'type', 'quantity', 'price'])

const imageUrl = computed(() => {
  return new URL(`/assets/${props.imageName}`, import.meta.url).href;
})

const quantity = ref(props.quantity);
const totalPrice = ref(props.price);

const calculateTotalPrice = () => {
  totalPrice.value = quantity.value * props.price;
};

const increaseQuantity = () => {
  quantity.value++;
  calculateTotalPrice();
  // Обновление элемента в списке toGetMySgopppingCart.items
  const itemIndex = toGetMySgopppingCart.items.findIndex(item => item.imageName === props.imageName);
  if (itemIndex !== -1) {
    toGetMySgopppingCart.items[itemIndex].numberOfGoods = quantity.value;
    toGetMySgopppingCart.items[itemIndex].price = totalPrice.value;
  }
};

const decreaseQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--;
    calculateTotalPrice();
    // Обновление элемента в списке toGetMySgopppingCart.items
    const itemIndex = toGetMySgopppingCart.items.findIndex(item => item.imageName === props.imageName);
    if (itemIndex !== -1) {
      toGetMySgopppingCart.items[itemIndex].numberOfGoods = quantity.value;
      toGetMySgopppingCart.items[itemIndex].price = totalPrice.value;
    }
  }
};
</script>

<template>
  <div class="shopping-cart">
    <div class="item">
      <div class="buttons">
        <span class="delete-btn"></span>
        <span class="like-btn"></span>
      </div>

      <div>
        <div class="image">
          <img :src="imageUrl" class="imgCategoryShoppingCart" alt="goods"/>
        </div>
      </div>


      <div class="description">
        <span>{{ caption }}</span>
        <span>{{ type }}</span>
        <span>{{ price }}</span>
      </div>

      <div class="quantity">
        <button @click="increaseQuantity" class="plus-btn" type="button" name="button">
          <p>+</p>
        </button>
        <input type="text" v-model="quantity" name="name">
        <button @click="decreaseQuantity" class="minus-btn" type="button" name="button">
          <p>-</p>
        </button>
      </div>
      <div class="total-price">{{ totalPrice }}</div>
    </div>
  </div>
</template>

<style scoped>

.shopping-cart {
  margin: 80px auto;
  background: #FFFFFF;
  box-shadow: 1px 2px 3px 0px rgba(0, 0, 0, 0.10);
  border-radius: 6px;
  display: flex;
  flex-direction: column;
}

.item {
  padding: 20px 30px;
  height: 120px;
  display: flex;
}

.item:nth-child(3) {
  border-top: 1px solid #E1E8EE;
  border-bottom: 1px solid #E1E8EE;
}

.buttons {
  position: relative;
  padding-top: 30px;
  margin-right: 60px;
}

.delete-btn {
  display: inline-block;
  Cursor: pointer;
}

.delete-btn {
  width: 18px;
  height: 17px;
}

.image {
  margin-right: 50px;
  width: 55px;

}

.imgCategoryShoppingCart {
  width: 100%;
  height: auto;
}

.description {
  padding-top: 10px;
  margin-right: 60px;
  width: 115px;
}

.description span {
  display: block;
  font-size: 14px;
  color: #43484D;
  font-weight: 400;
}

.description span:first-child {
  margin-bottom: 5px;
}

.description span:last-child {
  font-weight: 300;
  margin-top: 8px;
  color: #86939E;
}

.quantity {
  padding-top: 20px;
  margin-right: 60px;
}

.quantity input {
  -webkit-appearance: none;
  border: none;
  text-align: center;
  width: 32px;
  font-size: 16px;
  color: #43484D;
  font-weight: 300;
}

button[class*=btn] {
  width: 30px;
  height: 30px;
  background-color: #E1E8EE;
  border-radius: 6px;
  border: none;
  cursor: pointer;
}

.minus-btn img {
  margin-bottom: 3px;
}

.plus-btn img {
  margin-top: 2px;
}

button:focus,
input:focus {
  outline: 0;
}

.total-price {
  width: 83px;
  padding-top: 27px;
  text-align: center;
  font-size: 16px;
  color: #43484D;
  font-weight: 300;
}

@media (max-width: 800px) {
  .shopping-cart {
    width: 100%;
    height: auto;
    overflow: hidden;
  }

  .item {
    height: auto;
    flex-wrap: wrap;
    justify-content: center;
  }

  .image {
    margin-right: 50px;
    width: 4%;

  }

  .imgCategoryShoppingCart {
    width: 100%;
    height: auto;
  }

  .quantity,
  .description {
    width: 100%;
    text-align: center;
    margin: 6px 0;
  }

  .buttons {
    margin-right: 20px;
  }
}

</style>