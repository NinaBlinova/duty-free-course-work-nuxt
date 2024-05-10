<script setup>
import {computed} from "vue";

const props = defineProps(['imageName', 'discount', 'bonus'])

const imageUrl = computed(() => {
  return new URL(`/assets/${props.imageName}`, import.meta.url).href
})
</script>

<template>
  <div style="display: flex">
    <div class="business">
      <img :src="imageUrl" class="imgBusiness" alt="business">
    </div>

    <div>
      <p class="BusinessClass">{{discount}}</p>
      <br/>
      <p class="businessClass">{{bonus}}</p>
    </div>
  </div>


</template>


<style scoped>
.business {
  position: sticky;
  width: 25%;
  display: flex;
  justify-content: center;
}

.imgBusiness {
  width: 100%;
  height: auto;
  -webkit-mask-image: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, 1)), to(rgba(0, 0, 0, 0)));
}

.BusinessClass {
  display: inline-block;
  text-align: center;
  letter-spacing: 2px;
  font-size: 25px;
  font-family: 'Arimo', sans-serif;
  font-weight: bold;
  color: #0a1454;
}

.businessClass {
  display: inline-block;
  text-align: center;
  letter-spacing: 2px;
  font-size: 18px;
  font-family: 'Arimo', sans-serif;
  font-weight: bold;
  color: #0a1454;
}

@media (max-width: 800px) {
  .BusinessClass {
    float: none;
    font-size: 15px;
  }

  .businessClass {
    float: none;
    font-size: 10px;
  }
}
</style>