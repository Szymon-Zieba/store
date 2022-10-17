<template xmlns="http://www.w3.org/1999/html">
  <section id="cart">
    <h1>Your cart</h1>
    <p class="counter">
      322 items in cart
    </p>
    <div
        class="cart-item"
        v-for="index in 10"
        :key="index"
    >
      <input type="checkbox">
      <img src="http://dummyimage.com/400x500.jpg/cc0000/ffffff">
      <div class="">
        Wine - Acient Coast Caberne
      </div>
      <div class="cart-counter">
        <button id="counter-minus" @click="minusCounter('counter-minus')">
          -
        </button>
        <p>{{counter}}</p>
        <button id="counter-plus" @click="plusCounter('counter-plus')">
          +
        </button>
      </div>
      <div>
        $56.57
      </div>
    </div>
    <div class="cart-checkout">
      <span>Wartość produktów 232 zł</span>
      <span>Dostawa od 15zl</span>
      <span>Razem z dostawą</span>
      <button>Dostawa i płatność</button>
      <button>Kontynuuj zakupy</button>
    </div>
  </section>
</template>

<script>
import {ref} from "vue";

export default {
  name: "UserCart.vue",
  setup(){
    const counter = ref(0)
    const minusCounter = () => {
      if(counter.value){
        counter.value -= 1
      }
    }
    const plusCounter = () => {
      if(counter.value < 10){
        counter.value += 1
      }
    }
    return{
      counter,
      minusCounter,
      plusCounter
    }
  }
}
</script>

<style scoped>
.cart-item{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.cart-checkout{
  display: flex;
  height: 100px;
  align-items: center;
  justify-content: center;
}
.cart-counter{
  display: flex;
}
</style>