<script setup>
import {computed} from "vue";
import {toGetMySgopppingCart} from "~/state/shopping.ts";


const props = defineProps(['imageName', 'caption', 'type', 'price', 'cod']);

const imageUrl = computed(() => {
  return new URL(`/assets/${props.imageName}`, import.meta.url).href
})

const quantity = ref(0);
const totalPrice = ref(0);

const calculateTotalPrice = () => {
  totalPrice.value = quantity.value * props.price;
};

const addToCart = () => {
  toGetMySgopppingCart.add(props.imageName, props.caption, props.type, quantity.value, totalPrice.value);
  console.log(toGetMySgopppingCart);
}

</script>
<template>
  <div class="categoryGoods">
    <figure class="category-border-goods">
      <img :src="imageUrl" class="imgCategoryGoods" alt="goods">
      <figcaption>
        {{ caption }}, {{ price }}, {{ type }}, "₽"
      </figcaption>
      <input class="QuantityClass" type="number" v-model="quantity" min="1" placeholder="Quantity">
      <button @click="calculateTotalPrice" class="buy-button">Buy</button>
      <output>{{ totalPrice }}</output>
      <button @click="addToCart" class="buy-button">Add to shopping cart</button>
    </figure>
  </div>

</template>


<style scoped>

.buy-button:hover {
  font-size: 1em;
}

.QuantityClass {
  font-size: 1em;
  width: 100px;
  margin-top: 0.5rem;
}

.categoryGoods {
  position: sticky;
  width: 21%;
}

.imgCategoryGoods {
  width: 100%;
  height: auto;
}

.category-border-goods {
  border: 5px solid #0b1a7a;
  background: white;
  padding: 10px;
}

.category-border-goods figcaption {
  padding: 10px;
  color: white;
  background: #0b1a7a;
  text-align: center;
  text-transform: uppercase;
}

.buy-button {
  display: block;
  width: 100%;
  margin-top: 10px;
  padding: 5px;
  background-color: #0b1a7a;
  color: white;
  border: none;
}

@media (max-width: 800px) {

  .category-border-goods {
    padding: 5px;
  }

  .category-border-goods figcaption {
    padding: 5px;
    font-size: 0.3em;
  }

  .buy-button {
    font-size: 0.8em;
    padding: 3px;
  }
}

</style>