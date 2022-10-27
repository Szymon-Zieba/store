<template>
  <section class="payment-delivery">
    <h1>Complete Data</h1>
    <h3>Please fill data before you go to the next step</h3>
    <div class="payment-delivery-list">
      <div class="box flex-column">
        <div class="box-delivery">
          <i class="fas fa-warehouse"></i>
          <label>Inpost packer locker</label>
          <input type="radio">
        </div>

        <div class="box-delivery">
          <i class="fa-solid fa-truck-fast"></i>
          <label>Inpost home delivery</label>
          <input type="radio">
        </div>
        <div class="box-delivery">
          <i class="fa-solid fa-truck-fast"></i>
          <label>DPD home delivery</label>
          <input type="radio">
        </div>
      </div>
      <div class="box flex-column">
        <label>Bank transfer</label>
        <input type="checkbox">
        <label>Credit card</label>
        <input type="checkbox" v-model="isCreditCard">
        <div v-if="isCreditCard">
          <label>numer karty</label>
          <input name="">
          <label>ważność</label>
          <input name="">
          <label>CVV</label>
          <input name="">
        </div>
    </div>
    </div>
    <div class="checkout">
      <div class="checkout-buttons">
        <router-link to="/payment" class="button button-red button-large m0-15">
          Pay
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
  import {ref} from "vue";

  const isCreditCard = ref(false)
</script>

<style scoped>
h1{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
}
h3{
  margin: 50px 0;
}
.flex-column{
  display: flex;
  flex-direction: column;
}
.payment-delivery{
  text-align: center;
}
.payment-delivery-list{
  text-align: left;
  display: flex;
  align-items: center;
}
.box{
  width: 50%;
}
.box-delivery{
  display: flex;
  align-items: center;
}
@media (max-width: 600px){
  .payment-delivery-list{
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .box{
    width: 100%;
  }
}
</style>