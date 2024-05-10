<template>
  <div style="display: flex">
    <fieldset>
      <legend>Pay</legend>
      <div class="wrapper">
        <form>
          <label for="pay">You need to pay: </label>
          <output name="pay" id="pay" class="text"></output>
        </form>
        <div>
          <form>
            <label for="bonus">Bonus: </label>
            <output name="bonus" id="bonus" class="text"></output>
          </form>
        </div>
        <div>
          <form>
            <label for="wallet">Wallet: </label>
            <output name="wallet" id="wallet" class="text"></output>
          </form>
        </div>
        <div>
          <form>
            <label for="card">Card: </label>
            <output name="card" id="card" class="text"></output>
          </form>
        </div>
        <div>
          <form>
            <label for="discount">Discount: </label>
            <output name="discount" id="discount" class="text"></output>
          </form>
        </div>

        <div >
          <div>
            <input type="radio" id="cash" name="pay" value="cash" @click="showPrompt('cash')"/>
            <label for="cash">Cash</label>
          </div>

          <div>
            <input type="radio" id="card" name="pay" value="card" @click="showPrompt('card')"/>
            <label for="card">Card</label>
          </div>

          <div>
            <input type="radio" id="bonus" name="pay" value="bonus" @click="showPrompt('bonus')"/>
            <label for="bonus">Bonus</label>
          </div>

          <div>
            <input type="radio" id="mix" name="pay" value="mix" @click="showPrompt('mix')"/>
            <label for="mix">Cash + bonus + card</label>
          </div>
        </div>

      </div>

    </fieldset>

    <div style="flex: 1;">
      <div class="cosmeticsGoods">
        <shoppingCart v-for="c in goods" :imageName="c.imageName" :caption="c.caption" :description="c.description"
                      :type="c.type"
                      :price="c.price">
        </shoppingCart>
      </div>
    </div>
  </div>


</template>

<script setup>
//'caption', 'description', 'type', 'price'

import {reactive} from "vue";
import ShoppingCart from "../components/shoppingCart.vue";


const goods = reactive([
  {
    imageName: "JewelryEarrings.jpg",
    caption: 'Gold Earrings',
    type: 'Jewelry',
    price: 45100
  },

  {
    imageName: "Dior1.jpg",
    caption: 'Dior cosmetics set',
    type: 'Cosmetics',
    price: 33919.16
  },

])
</script>

<style scoped>
p,
label, legend {
  font: 1.5rem 'Fira Sans',
  sans-serif;
}

input {
  margin: 0.2rem;
}

.wrapper {
  gap: 1rem;
}


@media (max-width: 800px) {

  p,
  label, legend {
    font-size: 0.5rem;
  }

}
</style>