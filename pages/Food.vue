<template>
  <div>
    <div class="cosmeticsGoods">
      <goods v-for="c in goods" :imageName="c.imageName" :caption="c.caption"
             :price="c.price">

      </goods>
    </div>
  </div>
</template>

<script setup>
import {reactive} from "vue";
import Goods from "../components/goods.vue";

const goods = reactive([
  {
    imageName: "breakfast.jpg",
    caption: 'English breakfast',
    type: 'food',
    price: 2000,
    cod: 16
  },
  {
    imageName: 'lanch.jpg',
    caption: 'Russian dinner',
    type: 'food',
    price: 3000,
    cod: 17
  },
  {
    imageName: 'dinner.jpg',
    caption: 'Georgian dinner',
    type: 'food',
    price: 4000,
    cod: 18
  },
  {
    imageName: 'sushi.jpg',
    caption: 'Japanese lunch',
    type: 'food',
    price: 2500,
    cod: 19
  },
  {
    imageName: 'strawberryByWeight.jpg',
    caption: 'Strawberries for 1 gram 300 rubles',
    type: 'food',
    price: 300,
    cod: 20
  },
  {
    imageName: 'strawberryByWeight2.jpg',
    caption: 'Strawberries for 1 gram 600 rubles',
    type: 'food',
    price: 600,
    cod: 21
  },
  {
    imageName: 'strabAssorty.jpg',
    caption: 'Assorted berries, 1 gram 500 rubles',
    type: 'food',
    price: 500,
    cod: 22
  },
  {
    imageName: 'blueBerryByWeight.png',
    caption: 'Blueberry, 1 gram 400 rubles',
    type: 'food',
    price: 400,
    cod: 23
  }
])
</script>

<style scoped>

.cosmeticsGoods{
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

</style>
