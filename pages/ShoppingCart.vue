<template>
  <div style="display: flex">
    <fieldset>
      <legend>Pay</legend>
      <div class="wrapper">
        <form>
          <label for="pay">You need to pay: </label>
          <output name="pay" id="pay" class="text">{{ totalSum }}</output>
        </form>
        <div>
          <form>
            <label for="Bonus">Bonus: </label>
            <output name="Bonus" id="Bonus" class="text">{{ myBalance.items[0].bonus }}</output>
          </form>
        </div>
        <div>
          <form>
            <label for="Wallet">Wallet: </label>
            <output name="Wallet" id="Wallet" class="text">{{ myBalance.items[0].wallet }}</output>
          </form>
        </div>
        <div>
          <form>
            <label for="Card">Card: </label>
            <output name="Card" id="Card" class="text">{{ myBalance.items[0].card }}</output>
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
            <input type="radio" id="cash" name="pay" value="cash" @change="handlePayment('cash')"/>
            <label for="cash">Cash</label>
          </div>

          <div>
            <input type="radio" id="card" name="pay" value="card" @change="handlePayment('card')"/>
            <label for="card">Card</label>
            <output></output>
          </div>

          <div>
            <input type="radio" id="bonus" name="pay" value="bonus" @change="handlePayment('bonus')"/>
            <label for="bonus">Bonus</label>
          </div>

          <div>
            <input type="radio" id="mix" name="pay" value="mix" @change="handlePayment('mix')"/>
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
import {CashPaymentStrategy} from "../Model/CashPaymentStrategy.ts";
import {CardPaymentStrategy} from "../Model/CardPaymentStrategy.ts";
import {BonusPaymentStrategy} from "../Model/BonusPaymentStrategy.ts";
import {MixedPaymentStrategy} from "../Model/MixedPaymentStrategy.ts";
import {PaymentContext} from "../Model/Context.ts";


const totalSum = computed(() => {
  let sum = 0;
  for (const item of myGoods.items) {
    sum += item.price * item.numberOfGoods * (1 - myBalance.items[0].discount);
  }
  return sum;
});


const handlePayment = (paymentMethod) => {
  let paymentContext = new PaymentContext(null); // Создаем контекст

  switch (paymentMethod) {
    case 'card':
      paymentContext.setStrategy(new CardPaymentStrategy(myBalance.items[0].card, myBalance.items[0].wallet, myBalance.items[0].bonus, totalSum.value));
      break;
    case 'cash':
      paymentContext.setStrategy(new CashPaymentStrategy(myBalance.items[0].card, myBalance.items[0].wallet, myBalance.items[0].bonus, totalSum.value));
      break;
    case 'bonus':
      paymentContext.setStrategy(new BonusPaymentStrategy(myBalance.items[0].card, myBalance.items[0].wallet, myBalance.items[0].bonus, totalSum.value));
      break;
    case 'mix':
      paymentContext.setStrategy(new MixedPaymentStrategy(myBalance.items[0].card, myBalance.items[0].wallet, myBalance.items[0].bonus, totalSum.value));
      break;
    default:
      console.error('Invalid payment method');
      return;
  }

  const [message, remainingCardBalance, remainingCashAmount, remainingBonusAmount, errorCode] = paymentContext.pay(totalSum.value); // Вызываем метод pay контекста

  if (errorCode === 0) {
    myBalance.update(remainingCardBalance, remainingCashAmount, remainingBonusAmount)
    // Очистить корзину после успешной оплаты
    myGoods.items = [];
    alert(message); // Показать сообщение об успешной оплате
  } else {
    alert(message); // Показать сообщение об ошибке оплаты
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
  gap: 1rem;
}


@media (max-width: 800px) {

  p,
  label, legend {
    font-size: 0.5rem;
  }

}
</style>