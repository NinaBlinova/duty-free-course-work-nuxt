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
    imageName: "JewelryEarrings.jpg",
    caption: 'Gold Earrings',
    type: 'Jewelry',
    price: 45100,
    cod: 1
  },
  {
    imageName: 'SwarovskiJewelry3.jpg',
    caption: 'Jewelry set from Svarsovski',
    type: 'Jewelry',
    price: 1432761,
    cod: 2
  },
  {
    imageName: "JewelryNecklace.png",
    caption: 'A set of necklaces made of gold',
    type: 'Jewelry',
    price: 561234,
    cod: 3
  },
  {
    imageName: 'SwarovskiJewelry.jpg',
    caption: 'Set of earrings from Swarovski',
    type: 'Jewelry',
    price: 155172,
    cod: 4
  },
  {
    imageName: 'SwarovskiJewelry2.jpg',
    caption: 'Earrings with sapphire made of gold',
    type: 'Jewelry',
    price: 55172,
    cod: 5
  },
  {
    imageName: "JewelryKit.jpg",
    caption: 'Jewelry set made of gold',
    type: 'Jewelry',
    price: 161234,
    cod: 6
  },
  {
    imageName: "JewelryKit2.jpg",
    caption: 'Jewelry set made of gold',
    type: 'Jewelry',
    price: 361234,
    cod: 7
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
