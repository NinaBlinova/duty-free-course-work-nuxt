<template>
  <div>
    <div>
      <fieldset>
        <legend>Parking pay</legend>
        <div class="wrapper">
          <div>
            <div>
              <label for="startDate">The car will be parked: </label>
              <input id="startDate" name="startDate" required minlength="1" size="10" v-model="parkingData.startData"/>
            </div>
            <form>
              <label for="pay">You need to pay: </label>
              <output name="pay" id="pay" class="text">{{parkingData.cost}}</output>
            </form>
            <div>
              <label for="pin">PIN: </label>
              <input type="text" id="pin" name="pin" required minlength="1" size="10" v-model="parkingData.pin"/>
            </div>
          </div>
          <div>
            <button @click="addMyParkingData">Add to shopping cart</button>
          </div>
        </div>
      </fieldset>
    </div>
  </div>
</template>

<script>
import {toGetMySgopppingCart} from "~/state/shopping.ts";
import {reactive, watch, computed} from "vue";
import {toGetMyData} from "~/state/myData.ts";
import {Parking} from "@/Model/Parking.ts";

export default {
  data() {
    return {
      parkingData: reactive({
        startData: 0,
        cost: 0,
        pin: toGetMyData.items[0].pinCode,
      })
    };
  },
  mounted() {
    this.updateParkingDetails();
    watch(() => this.parkingData.startData, () => {
      this.updateParkingDetails();
    });
  },
  methods: {
    updateParkingDetails() {
      const parking = new Parking(toGetMyData.items[0].typeAirplane, this.parkingData.startData);
      if (this.parkingData.pin === toGetMyData.items[0].pinCode){
        this.parkingData.cost = parking.calculatePrice();
      }
      else {
        this.parkingData.cost = -1;
      }

    },
    addMyParkingData() {
      toGetMySgopppingCart.add('parking2.jpg', 'Parking', 'cars', 1, this.parkingData.cost);
      console.log(toGetMySgopppingCart);
    }
  }
};
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

output {
  margin: 1rem;
}

.wrapper {
  gap: 1rem;
  display: flex;
}


@media (max-width: 800px) {

  p,
  label, legend {
    font-size: 0.5rem;
  }

}
</style>
