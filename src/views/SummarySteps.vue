<template>

  <div id="multi-step-form" >
    <form @submit.prevent="submit()">
      <div v-if="currentStep === 0">
        <SummaryCart ></SummaryCart>
      </div>
      <div v-if="currentStep === 1" >
        <FillData v-model="personalData"></FillData>
      </div>
      <div v-if="currentStep === 2">
        <PaymentDelivery v-model="addressData"></PaymentDelivery>
      </div>
    <div class="checkout">
      <div class="checkout-buttons">
        <button class="button button-black button-large m0-1" v-if="!isFirstStep" @click="previousStep()">
          Previous
        </button>
        <button class="button button-red button-large m0-15" v-if="isFirstStep" @click="nextStep()">
          Next
        </button>
        <button class="button button-red button-large m0-15" v-if="!isFirstStep && !isLastStep" @click="nextStep()" :disabled="!checkValid">
          Next
        </button>
        <button type="submit" class="button button-red button-large m0-15" v-if="isLastStep" :disabled="!checkValidAddress">
          Payment
        </button>
      </div>
    </div>
    </form>
  </div>
</template>

<script setup>
import {computed, ref} from "vue";
import SummaryCart from "@/views/SummaryCart";
import FillData from "@/views/FillData";
import PaymentDelivery from "@/views/PaymentDelivery";
import {useCartStore} from "@/stores/cart";
import {storeToRefs} from "pinia";

const currentStep = ref(0)
const totalSteps = 3
const nextStep = () => {
  if(isLastStep.value) return
  if(!checkValid.value && currentStep.value !== 0) return
  currentStep.value ++
}
const previousStep = () => {
  if(isFirstStep.value) return
  currentStep.value --
}
const isFirstStep = computed(() => currentStep.value === 0)
const isLastStep = computed(() => currentStep.value  === totalSteps -1)

const personalData = ref({name: {valid: false}})
const addressData = ref({pickedPayment: {value: false}})
const checkValid = computed(() => Object.values(personalData.value).every(el => el.valid && el.value !== '') )
const checkValidAddress = computed(() =>
    addressData.value.pickedPayment.value === 'card' ?
        Object.values(addressData.value).every(el => el.valid && el.value !== '') :
        true
)
const cartStore = useCartStore()
const {cartList} = storeToRefs(cartStore)
let allData
const submit = () => {
  allData = {
    personalData: personalData.value,
    addressData: addressData.value,
    cartList: cartList.value
  }
  console.log(allData)
}
</script>

<style scoped>
.checkout-buttons{
  padding: 30px;
  display: flex;
  justify-content: right;
  align-items: center;
  height: 200px;
}
.m0-15{
  margin: 0 15px;
}
</style>