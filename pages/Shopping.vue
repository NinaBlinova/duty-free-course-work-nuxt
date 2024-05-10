<template>
  <div>
    <div class="shop">
      <category v-for="c in categories" :caption="c.caption" :imageName="c.imageName"></category>
    </div>

  </div>
</template>

<script setup>
import {reactive} from "vue";

const categories = reactive([
  {caption: "Cosmetics", imageName: "cosmetic.jpg"},
  {caption: "Food", imageName: "food.jpg"},
  {caption: "Jewelry", imageName: "Swarovski.jpg"}
])
</script>

<style scoped>

</style>