<template>
  <div style="display: flex">
    <fieldset>
      <legend>Pay</legend>
      <div class="wrapper">
        <form>
          <label for="pay">You need to pay: </label>
          <output name="pay" id="pay" class="text">{{ totalSum.toFixed(1) }}</output>
        </form>
        <form>
          <label for="pay">You need to pay with discount: </label>
          <output name="pay" id="pay" class="text">{{
              (totalSum * (1 - myBalance.items[0].discount)).toFixed(1)
            }}
          </output>
        </form>
        <div>
          <form>
            <label for="bonus">Bonus: </label>
            <output name="bonus" id="bonus" class="text">{{ myBalance.items[0].bonus }}</output>
          </form>
        </div>
        <div>
          <form>
            <label for="wallet">Wallet: </label>
            <output name="wallet" id="wallet" class="text">{{ myBalance.items[0].wallet }}</output>
          </form>
        </div>
        <div>
          <form>
            <label for="card">Card: </label>
            <output name="card" id="card" class="text">{{ myBalance.items[0].card }}</output>
          </form>
        </div>
        <div>
          <form>
            <label for="discount">Discount: </label>
            <output name="discount" id="discount" class="text">{{ myBalance.items[0].discount }}</output>
          </form>
        </div>

        <div>
          <div>
            <input type="radio" id="cash" name="pay" value="cash"/>
            <label for="cash">Cash</label>
          </div>

          <div>
            <input type="radio" id="card" name="pay" value="card"/>
            <label for="card">Card</label>
          </div>

          <div>
            <input type="radio" id="bonus" name="pay" value="bonus"/>
            <label for="bonus">Bonus</label>
          </div>

          <div>
            <input type="radio" id="mix" name="pay" value="mix"/>
            <label for="mix">Cash + bonus + card</label>
          </div>
        </div>
      </div>
    </fieldset>
    <div style="flex: 1;">
      <div class="cosmeticsGoods">
        <Cart v-for="c in myGoods.items" :imageName="c.imageName" :caption="c.caption"
              :type="c.type" :quantity="c.numberOfGoods"
              :price="c.price">
        </Cart>
      </div>
    </div>
  </div>
</template>
<script setup>
import {myGoods} from "~/state/myCart.ts";
import {myBalance} from "~/state/myData.ts";
import {computed} from "vue";
import Cart from "../components/cart.vue";


const totalSum = computed(() => {
  let sum = 0;
  for (const item of myGoods.items) {
    sum += item.price * item.numberOfGoods;
  }
  return sum;
});



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