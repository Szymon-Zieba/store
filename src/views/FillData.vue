<template>
  <section class="fillData">
    <h1>Complete Data</h1>
    <h3>Please fill data before you go to the next step</h3>
    <form @submit.prevent="submit">
      <div class="fillData-list">
        <div class="fillData-box">
          <h4>Personal Data</h4>
          <label for="name">Name</label>
          <InputValid :placeholder="'Use only letters'" :errorMessage="error.name" :validator="validatorName" v-model="personalData.name"></InputValid>
          <label  for="lastName">Last Name</label>
          <InputValid :placeholder="'Use only letters'" :errorMessage="error.lastName" :validator="validatorName" v-model="personalData.lastName"></InputValid>
          <label for="tel">Phone Number</label>
          <InputValid :placeholder="'000000000'" :errorMessage="error.phoneNumber" :validator="validatorPhone" v-model="personalData.phoneNumber"></InputValid>
          <label for="email">Email</label>
          <InputValid :placeholder="'email@email.com'" :errorMessage="error.email" :validator="validatorEmail" v-model="personalData.email"></InputValid>
        </div>
        <div class="fillData-box">
          <h4>Address Data</h4>
          <label for="city">City</label>
          <InputValid :placeholder="'Use only letters'" :errorMessage="error.city" :validator="validatorName" v-model="personalData.city"></InputValid>
          <label for="postCode">Post Code</label>
          <InputValid :placeholder="'00-000'" :errorMessage="error.postCode" :validator="validatorPostCode" v-model="personalData.postCode"></InputValid>
          <label for="address">Address</label>
          <InputValid :placeholder="'Do not use special symbols'" :errorMessage="error.address" :validator="validatorAddress" v-model="personalData.address"></InputValid>
          <div class="fillData-box-slider">
            <label>Private</label>
            <label class="switch">
              <input type="checkbox" v-model="personalData.checkIfBusiness.value">
              <span class="slider round"></span>
            </label>
            <label>Business</label>
          </div>
          <div v-if="personalData.checkIfBusiness.value" class="fillData-city-data-business">
            <label for="business">Business Name</label>
            <InputValid :placeholder="'Use only letters'" :errorMessage="error.businessName" :validator="validatorName" v-model="personalData.businessName"></InputValid>
            <label for="nip">NIP</label>
            <InputValid :placeholder="'0000000000'" :errorMessage="error.nip" :validator="validatorNIP" v-model="personalData.nip"></InputValid>
          </div>
        </div>
      </div>
    </form>
  </section>
</template>

<script setup>
import InputValid from "@/components/Inputs/InputValid"
import {reactive, watch} from "vue";
import {validatorName, validatorEmail, validatorPhone, validatorPostCode, validatorAddress, validatorNIP} from "@/composables/validators"

const personalData = reactive({
  name: {value:'', valid:true},
  lastName: {value:'', valid:true},
  phoneNumber: {value:'', valid:true},
  email: {value:'', valid:true},
  city: {value:'', valid:true},
  checkIfBusiness : {value:false, valid:true},
  postCode: {value:'', valid:true},
  address: {value:'', valid:true},
  businessName: {value:null, valid:true},
  nip: {value:null, valid:true},
})

const props = defineProps({
  modelValue: Object,
})
const emit = defineEmits(['update:modelValue'])

watch(personalData, () => {
  emit('update:modelValue', personalData)
})


const error = {
  name: "Please use only letters",
  lastName: "Please use only letters",
  phoneNumber: "Please write exactly 9 numbers",
  email: "Please use format example@email.com",
  city: "Please use only letters",
  postCode: "Please use format 00-000",
  address: "Please use only letters",
  businessName: "Please use only letters",
  nip: "Please write exactly 10 numbers",
}
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
.fillData{
  text-align: center;
  margin-bottom: 50px;
}
.fillData-list{
  display: flex;
  text-align: left;
}
.fillData-box{
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 35px;
}
.fillData-box-slider{
  padding: 35px 0;
  display: flex;
  align-items: center;
}
.fillData-city-data-business{
  display: flex;
  flex-direction: column;
}
.switch {
  position: relative;
  display: inline-block;
  width: 35px;
  height: 20px;
  margin: 0 30px;
}
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}
.slider:before {
  position: absolute;
  content: "";
  height: 11px;
  width: 15px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}
input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}
input:checked + .slider:before {
  -webkit-transform: translateX(11px);
  -ms-transform: translateX(11px);
  transform: translateX(11px);
}
.slider.round {
  border-radius: 34px;
}
.slider.round:before {
  border-radius: 50%;
}

@media (max-width: 600px){
  .fillData-list{
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .fillData-box{
    width: 100%;
  }
}
</style>