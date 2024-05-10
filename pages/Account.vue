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
        </div>
      </fieldset>
    </div>
  </div>
</template>

<script setup>
import {reactive} from "vue";
import ClassesCategory from "../components/classesCategory.vue";
import {toGetMyData} from "~/state/state";
import {Comfort} from "../Model/Comfort";
import {Business} from "../Model/Business";
import {Econom} from "../Model/Econom";

const classesCategories = reactive([
  {imageName: "biznes_klass_v_samolete.jpg", discount: '30% discount on goods', bonus: '50% of the ticket price'},
  {imageName: "comfort_klass_v_samolete.jpg", discount: '20% discount on goods', bonus: '30% of the ticket price'},
  {imageName: "econom_klass_v_samolete.jpg", discount: '4% discount on goods', bonus: '10% of the ticket price'}
]);

const cashData = reactive({
  wallet: 0,
  card: 0,
  pin: "",
  price: 0,
  bonus: 0,
  discount: 0
});

const updateFlightDetails = () => {
  if (toGetMyData.items[0].typeAirplane === 'business' && cashData.pin === toGetMyData.items[0].pinCode) {
    const businessClass = new Business(cashData.wallet, cashData.card, toGetMyData.items[0].price);
    cashData.bonus = businessClass.getBonus(toGetMyData.items[0].typeAirplane);
    cashData.discount = businessClass.getDiscount(toGetMyData.items[0].typeAirplane);
  } else if (toGetMyData.items[0].typeAirplane === 'comfort' && cashData.pin === toGetMyData.items[0].pinCode) {
    const comfortClass = new Comfort(cashData.wallet, cashData.card, toGetMyData.items[0].price);
    cashData.bonus = comfortClass.getBonus(toGetMyData.items[0].typeAirplane);
    cashData.discount = comfortClass.getDiscount(toGetMyData.items[0].typeAirplane);
  } else {
    const economClass = new Econom(cashData.wallet, cashData.card, toGetMyData.items[0].price);
    cashData.bonus = economClass.getBonus(toGetMyData.items[0].typeAirplane);
    cashData.discount = economClass.getDiscount(toGetMyData.items[0].typeAirplane);
  }
};

const calculateBonus = () => {
  const selectedClass = toGetMyData.items[0].typeAirplane;
  const bonusProgram = bonusPrograms[selectedClass];
  if (bonusProgram) {
    cashData.bonus = bonusProgram.getBonus(toGetMyData.items[0].typeAirplane);
  }
};

onMounted(() => {
  updateFlightDetails();
  watch(() => cashData.pin === toGetMyData.items[0].pinCode, calculateBonus);
});
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
