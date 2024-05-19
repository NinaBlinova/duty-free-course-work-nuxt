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
              <output name="pay" id="pay" class="text">{{ parkingData.cost }}</output>
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

<script src="../scripts/parkingScript.ts">

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
