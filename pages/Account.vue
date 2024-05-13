<template>
  <div style="display: flex">
    <div class="classes">
      <classesCategory v-for="c in classesCategories" :imageName="c.imageName" :discount="c.discount"
                       :bonus="c.bonus"></classesCategory>
    </div>

    <div style="flex: 1;">
      <fieldset>
        <legend>Get Bonus</legend>
        <div class="wrapper">
          <div>
            <div>
              <label for="wallet">Wallet: </label>
              <input type="text" id="wallet" name="wallet" required minlength="1" size="10" v-model="cashData.wallet"/>
            </div>
            <div>
              <label for="card">Card: </label>
              <input type="text" id="card" name="card" required minlength="1" size="10" v-model="cashData.card"/>
            </div>
            <div>
              <label for="pin">PIN: </label>
              <input type="text" id="pin" name="pin" required minlength="1" size="10" v-model="cashData.pin"/>
            </div>
          </div>
          <form>
            <label for="bonus">Bonus: </label>
            <output name="bonus" id="bonus" class="text">{{ cashData.bonus }}</output>
          </form>
          <form>
            <label for="discount">Discount: </label>
            <output name="discount" id="discount" class="text">{{ cashData.discount }}</output>
          </form>
          <button @click="updateBalance">Update</button>
          <button @click="addMyBalaceData" style="margin-top: 10px">Add balance</button>
        </div>
      </fieldset>
    </div>
  </div>
</template>

<script setup>
import {reactive, watch} from "vue";
import ClassesCategory from "../components/classesCategory.vue";
import {Comfort} from "../Model/Comfort";
import {Business} from "../Model/Business";
import {Econom} from "../Model/Econom";
import {data} from "~/state/myData.ts";
import {myBalance} from "~/state/myData.ts";


const classesCategories = reactive([
  {imageName: "biznes_klass_v_samolete.jpg", discount: '30% discount on goods', bonus: '50% of the ticket price'},
  {imageName: "comfort_klass_v_samolete.jpg", discount: '20% discount on goods', bonus: '30% of the ticket price'},
  {imageName: "econom_klass_v_samolete.jpg", discount: '4% discount on goods', bonus: '10% of the ticket price'}
]);

const cashData = reactive({
  wallet: 100000,
  card: 100000,
  pin: data.items[0].pinCode,
  bonus: 1,
  discount: 1
});


const calculateBonus = () => {
  if (data.items[0].typeAirplane === 'business' && cashData.pin === data.items[0].pinCode) {
    const businessClass = new Business(cashData.wallet, cashData.card, data.items[0].price);
    cashData.bonus = businessClass.getBonus(data.items[0].typeAirplane);
    cashData.discount = businessClass.getDiscount(data.items[0].typeAirplane);
  } else if (data.items[0].typeAirplane === 'comfort' && cashData.pin === data.items[0].pinCode) {
    const comfortClass = new Comfort(cashData.wallet, cashData.card, data.items[0].price);
    cashData.bonus = comfortClass.getBonus(data.items[0].typeAirplane);
    cashData.discount = comfortClass.getDiscount(data.items[0].typeAirplane);
  } else if (data.items[0].typeAirplane === 'econom' && cashData.pin === data.items[0].pinCode) {
    const economClass = new Econom(cashData.wallet, cashData.card, data.items[0].price);
    cashData.bonus = economClass.getBonus(data.items[0].typeAirplane);
    cashData.discount = economClass.getDiscount(data.items[0].typeAirplane);
  } else {
    this.bonus = -1;
    this.discount = -1;
  }
};


const updateBalance = () => {
  calculateBonus();
  watch([() => cashData.wallet, () => cashData.card, () => cashData.pin], () => {
    calculateBonus();
  });
}

const addMyBalaceData = () => {
  myBalance.add(cashData.wallet, cashData.card, cashData.bonus, cashData.discount);
  console.log(myBalance);
};

</script>

<style scoped>
.classes {
  align-items: center;
}

p,
label, legend {
  font: 1.0rem 'Fira Sans',
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
