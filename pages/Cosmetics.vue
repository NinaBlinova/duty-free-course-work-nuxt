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
    imageName: "ClarinsLipComfortOil.jpg",
    caption: 'Масло-блеск для губ Lip Comfort Oil, 03 Cherry, 7 мл',
    type: 'Cosmetics',
    price: 3100,
    cod: 8
  },
  {
    imageName: "ClarinsMulti-Intensif.jpg",
    caption: 'Clarins Super Restorative Serum ( 1 oz / 30 ml )',
    type: 'Cosmetics',
    price: 12100,
    cod: 9
  },
  {
    imageName: "ClarinsMulti-Intensif2.jpg",
    caption: 'Super Restorative Day Cream - All Skin Types',
    type: 'Cosmetics',
    price: 10919.16,
    cod: 10
  },
  {
    imageName: "ClarinsNaturalLipPerfector.jpg",
    caption: 'Clarins Natural Lip Perfector, 19 intense smoky rose, 12 мл',
    type: 'Cosmetics',
    price: 3919.16,
    cod: 11

  },
  {
    imageName: "ClarinsPatisserieWaterLipStain.jpg",
    caption: 'Губная помада Clarins Patisserie Water Lip Stain Limited Version 7 мл',
    type: 'Cosmetics',
    price: 3919.16,
    cod: 12
  },
  {
    imageName: "Dior1.jpg",
    caption: 'Dior cosmetics set',
    type: 'Cosmetics',
    price: 33919.16,
    cod: 13
  },
  {
    imageName: "Dior2.jpg",
    caption: 'Коллекция помад Rouge Dior Mother’s Day Limited-Edition',
    type: 'Cosmetics',
    price: 23454,
    cod: 14
  },
  {
    imageName: "DiorLipGlowOil.jpg",
    caption: 'Dior Lip Glow Oil',
    type: 'Cosmetics',
    price: 13454,
    cod: 15
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
