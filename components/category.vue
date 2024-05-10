<script setup>
import {computed} from "vue";

const props = defineProps(['imageName', 'caption'])

const imageUrl = computed(() => {
  return new URL(`/assets/${props.imageName}`, import.meta.url).href
})
</script>

<template>
  <div class="category">
    <figure class="category-border">
      <img :src="imageUrl" class="imgCategory" alt="cosmetic">
      <figcaption class="figClass">
        <NuxtLink class="s10" :to="`/${caption}`">{{ caption }}</NuxtLink>
      </figcaption>
    </figure>
  </div>

</template>

<style>
figClass:hover {
  font-size: 0.8em;
}

.s10 {
  color: #f0f0f0; /* Светлый цвет текста */
}


.category {
  position: sticky;
  width: 21%;
}

.imgCategory {
  width: 100%;
  height: auto;
}

.category-border {
  border: 5px solid #0b1a7a;
  background: white;
  padding: 10px;
}

.category-border figcaption {
  padding: 10px;
  color: white;
  background: #0b1a7a;
  text-align: center;
  text-transform: uppercase;
}


</style>