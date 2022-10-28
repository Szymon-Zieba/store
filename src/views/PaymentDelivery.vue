<template>
  <section class="payment-delivery">
    <h1>Complete Data</h1>
    <h3>Please fill data before you go to the next step</h3>
    <div class="payment-delivery-list">
      <div class="box flex-column">
        <h4>Delivery Information</h4>
        <div class="box-delivery">
          <i class="fas fa-warehouse"></i>
          <label>Inpost packer locker $10</label>
          <input type="radio" name="radio" v-bind:value="'inpost packer'"  v-model="paymentData.pickedDelivery.value" checked required >
        </div>

        <div class="box-delivery">
          <i class="fa-solid fa-truck-fast"></i>
          <label>Inpost home delivery $15</label>
          <input type="radio" name="radio" v-bind:value="'inpost home'"  v-model="paymentData.pickedDelivery.value">
        </div>
        <div class="box-delivery">
          <i class="fa-solid fa-truck-fast"></i>
          <label>DPD home delivery $25</label>
          <input type="radio" name="radio" v-bind:value="'dpd home'"  v-model="paymentData.pickedDelivery.value">
        </div>
      </div>
      <div class="box flex-column">
        <h4>Payment Information</h4>
        <div class="box-payment">
          <label>Bank transfer</label>
          <input type="radio" name="payment" v-model="paymentData.pickedPayment.value" v-bind:value="'bank'" checked required>
        </div>
        <div class="box-payment">
          <label>Credit card</label>
          <input type="radio" name="payment" v-model="paymentData.pickedPayment.value" v-bind:value="'card'">
        </div>
        <div class="credit-card" v-if="paymentData.pickedPayment.value === 'card'">
          <label for="cardNumber">Card Number</label>
          <InputValid :placeholder="'0000000000000000'" :errorMessage="error.cardNumber" :validator="validatorCard" v-model="paymentData.cardNumber"></InputValid>
          <label>Card validity</label>
          <InputValid :placeholder="'01/01/2000'" :errorMessage="error.validCard" :validator="validatorData" v-model="paymentData.validCard"></InputValid>
          <label>CVV</label>
          <InputValid :placeholder="'000'" :errorMessage="error.cvvCard" :validator="validatorCVV" v-model="paymentData.cvvCard"></InputValid>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import {reactive, watchEffect} from "vue";
  import InputValid from "@/components/Inputs/InputValid";
  import {validatorCard, validatorData, validatorCVV} from "@/composables/validators";

  const paymentData = reactive({
    pickedDelivery: {value: 'inpost packer', valid: true},
    pickedPayment: {value: 'bank', valid: true},
    cardNumber: {value: '', valid: true},
    validCard: {value: '', valid: true},
    cvvCard: {value: '', valid: true},
  })


const error = {
  cardNumber: "Please write 12 numbers",
  validCard: "Please write real date with format 00/00/0000",
  cvvCard: "Please write exactly 3 numbers",
}

const props = defineProps({
  modelValue: Object,
})
const emit = defineEmits(['update:modelValue'])

watchEffect(() => {
  emit('update:modelValue', paymentData)
})
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
h4{
  margin-bottom: 30px;
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
  padding: 35px;
}
.box{
  width: 50%;
}
.box-delivery{
  display: flex;
  align-items: center;
}
.box-payment{
  margin: 20px 0;
}
.credit-card{
  display: flex;
  flex-direction: column;
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