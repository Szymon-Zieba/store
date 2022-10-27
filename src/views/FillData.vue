<template>
  <section class="fillData">
    <h1>Complete Data</h1>
    <h3>Please fill data before you go to the next step</h3>
    <div class="fillData-list">
      <div class="fillData-box">
        <h4>Personal Data</h4>
        <label for="name">Name</label>
        <input required name="name">
        <label  for="lastName">Last Name</label>
        <input required name="lastName">
        <label for="tel">Phone Number</label>
        <input required name="tel">
        <label for="email">Email</label>
        <input required name="email">
      </div>
      <div class="fillData-box">
        <h4>Address Data</h4>
        <label for="city">City</label>
        <input required name="city">
        <label for="postCode">Post Code</label>
        <input required name="postCode">
        <label for="address">Address</label>
        <input required name="address">
        <label class="switch">
          <input type="checkbox" v-model="checkIfBusiness">
          <span class="slider round"></span>
        </label>
        <div v-if="checkIfBusiness" class="fillData-city-data-business">
          <label for="business">Business Name</label>
          <input required name="business">
          <label for="nip">NIP</label>
          <input required name="nip">
        </div>
      </div>
    </div>
    <div class="checkout">
      <div class="checkout-buttons">
        <router-link to="/payment" class="button button-red button-large m0-15">
          Delivery and Payment
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import {ref} from "vue";

const checkIfBusiness= ref(false)
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
.fillData-city-data-business{
  display: flex;
  flex-direction: column;
}
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
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
  height: 26px;
  width: 26px;
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
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
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