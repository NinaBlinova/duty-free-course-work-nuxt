<template>
  <div>
    <fieldset>
      <legend>Create flight</legend>
      <div class="wrapper">
        <div>
          <div>
            <input type="radio" id="business" name="airplane" value="business" v-model="flightData.typeAirplane"/>
            <label for="business">Business</label>
          </div>
          <div>
            <input type="radio" id="comfort" name="airplane" value="comfort" v-model="flightData.typeAirplane"/>
            <label for="comfort">Comfort</label>
          </div>
          <div>
            <input type="radio" id="econom" name="airplane" value="econom" v-model="flightData.typeAirplane"/>
            <label for="econom">Econom</label>
          </div>
          <div>
            <label for="direction">Direction: </label>
            <input type="text" id="direction" name="direction" required minlength="1" size="7"
                   v-model="flightData.direction"/>
          </div>
          <div>
            <label for="start">Deprture date:</label>
            <input type="date" id="start" name="trip-start" v-model="flightData.departureTime"/>
          </div>
        </div>
        <div>
          <div>
            <label for="name">Name: </label>
            <input type="text" id="name" name="name" required minlength="1" size="10"
                   v-model="flightData.customerName"/>
          </div>
          <div>
            <label for="cost">Cost: </label>
            <output>{{ flightData.price }}</output>
          </div>
        </div>
        <div>
          <div>
            <label for="pin">PIN: </label>
            <output>{{ flightData.pinCode }}</output>
          </div>
        </div>
        <button @click="addMyFlightData">Add item</button>
      </div>
    </fieldset>
  </div>
</template>

<script>
import {reactive} from "vue";
import {FlightsData} from "@/Model/FlightsData.ts";
import {toGetMyData} from "~/state/state.ts";


export default {
  data() {
    return {
      flightData: reactive({
        typeAirplane: "business",
        direction: "Moskow",
        customerName: "Nina",
        price: 0,
        pinCode: "",
        departureTime: "2024-05-18",
      })
    };
  },
  mounted() {
    this.updateFlightDetails();
    watch(() => this.flightData.typeAirplane, () => {
      this.updateFlightDetails();
    });
  },
  methods: {
    updateFlightDetails() {
      const flights = new FlightsData(this.flightData.typeAirplane, this.flightData.direction, this.flightData.customerName, this.flightData.departureTime);
      this.flightData.pinCode = flights.generatePinCode(this.flightData.typeAirplane);
      this.flightData.price = flights.generatePrice(this.flightData.typeAirplane);
    },
    addMyFlightData() {
      toGetMyData.add(this.flightData.typeAirplane, this.flightData.direction, this.flightData.customerName, this.flightData.price,
          this.flightData.pinCode, this.flightData.departureTime);
      console.log(toGetMyData);
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

.wrapper {
  display: flex;
  gap: 1rem;
}

@media (max-width: 800px) {
  p,
  label, legend {
    font-size: 0.5rem;
  }
}
</style>
