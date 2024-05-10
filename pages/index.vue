<template>

  <div>
    <meta name="viewport" content="width=device-width,initial-scale=1.0"/>

    <div class="book">
      <div class="parking">
        <img src="~assets/parking.jpg" class="imgParking" alt="parking">
      </div>
      <div>
        <p class="StockParking">Up to 60% off on our official car park *</p>
        <p class="stockParking">Compare offers and book in advance for the best rates</p>
        <div>
          <NuxtLink to="/Parking">
            <button type="button" class="buttonForBook">Book your car park</button>
          </NuxtLink>
        </div>
      </div>
    </div>
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

const item = reactive({
  text: "",
  quantity: 0
})

function addItem() {
  store.add(item.text, item.quantity)
}
</script>

<style scoped>
figure {
  margin-left: auto;
}

figcaption:hover {
  font-size: 0.8em;
}

.book {
  display: flex;
  align-items: center;
}

.shop {
  display: flex;
  margin-top: 10px;

}

.imgParking {
  width: 100%;
  height: auto;
  -webkit-mask-image: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, 1)), to(rgba(0, 0, 0, 0)));
}


.imgParking::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.parking {
  position: sticky;
  width: 60%;
  display: flex;
  justify-content: center;
}


.StockParking {
  display: inline-block;
  text-align: center;
  letter-spacing: 2px;
  font-size: 25px;
  font-family: 'Arimo', sans-serif;
  font-weight: bold;
  color: #0a1454;
}

.stockParking {
  display: inline-block;
  text-align: center;
  letter-spacing: 2px;
  font-size: 18px;
  font-family: 'Arimo', sans-serif;
  font-weight: bold;
  color: #0a1454;
}

.buttonForBook {
  border: 0;
  line-height: 2.5;
  padding: 0 20px;
  font-size: 1rem;
  text-align: center;
  color: #fff;
  text-shadow: 1px 1px 1px #000;
  border-radius: 10px;
  background-color: rgb(0, 88, 220);
  background-image: linear-gradient(
      to top left,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.2) 30%,
      rgba(0, 0, 0, 0)
  );
  box-shadow: inset 2px 2px 3px rgba(255, 255, 255, 0.6),
  inset -2px -2px 3px rgba(0, 0, 0, 0.6);
}

.buttonForBook:hover {
  background-color: rgb(0, 88, 220);
}

.buttonForBook:active {
  box-shadow: inset -2px -2px 3px rgba(255, 255, 255, 0.6),
  inset 2px 2px 3px rgba(0, 0, 0, 0.6);
}

@media (max-width: 800px) {

  .StockParking {
    float: none;
    font-size: 15px;
  }

  .stockParking {
    float: none;
    font-size: 10px;
  }

  .buttonForBook {
    font-size: 0.3rem;
  }

}
</style>
