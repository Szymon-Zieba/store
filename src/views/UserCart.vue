<template xmlns="http://www.w3.org/1999/html">
  <section id="cart" class="cart"  >
    <h1 class="cart-title" v-if="isCartEmpty">Your cart</h1>
    <div class="cart-title-empty" v-if="!isCartEmpty"><h1 class="cart-title" >Your cart is empty</h1></div>
    <p class="counter">
      {{ cartList.length }}  items
    </p>
    <div
        class="cart-item"
        v-for="(item, index) in cartList"
        :key="item.product.id"
        v-if="isCartEmpty"
    >
      <div class="cart-item-center">
        <div class="cart-img-button">
          <button @click="removeProduct(item.product.id)" class="button button-red">
            Remove
            <i class="fa fa-trash"></i>
          </button>
        </div>
        <router-link :to="{ name: 'product', params: { id: item.product.id}}">
          <img class="cart-img pd0-10" :src="item.product.image" alt="product-image">
        </router-link>
      </div>
      <div class="cart-item-center cart-item-center1">
        <div class="pd0-10 cart-item-title mt-30-small">
          <router-link :to="{ name: 'product', params: { id: item.product.id}}">
            {{ item.product.product_name }}
          </router-link>
        </div>
        <div class="cart-item-small mt-30-small">
          <div class="cart-counter pd0-10">
            <button class="button cart-counter-button" @click="minusCounter(index)">
              -
            </button>
            <input class="cart-counter-input" type='tel' name="quantity" @change="checkInput(item.quantity)" v-model="item.quantity">
            <button class="button cart-counter-button" @click="plusCounter(index)">
              +
            </button>
          </div>
          <div class="cart-counter-price">
            <span  >
            ${{(item.product.price.split('$')[1] * item.quantity).toFixed(2)}}
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="cart-checkout" v-if="isCartEmpty">
        <div class="cart-checkout-price">
          <span>Wartość produktów  <b>${{ cartValue }}</b></span>
      </div>
      <div class="cart-checkout-buttons">
        <router-link class="button button-black button-large" to="/">Continue Shopping</router-link>
        <router-link
            class="button button-red cart-checkout-button button-large"
            to="/summary"
        >
          Summary
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import {useCartStore} from "@/stores/cart";
import {storeToRefs} from "pinia";
import {computed} from "vue";

const cartStore = useCartStore()
const {cartList, cartValue} = storeToRefs(cartStore)
const {removeProduct} = cartStore
const minusCounter = (index) => {
  if(cartList.value[index].quantity){
    cartList.value[index].quantity -= 1
  }
}
const plusCounter = (index) => {
  if(cartList.value[index].quantity < 10){
    cartList.value[index].quantity += 1
  }
}
const cos = 2
const isCartEmpty = computed(() => cartList.value.length !== 0)

const checkInput = (input) => {
  const reg = new RegExp('/d{2}');
  console.log(reg.test(input));
}
</script>

<style scoped>
.cart{
  position: relative;
  padding: 20px 0;
}
.cart-title{
  padding: 30px;
  text-align: center;
}
.cart-title-empty{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30vh;
  color: red;
  transition: color 1s;
}
.cart-item{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 10px 100px;
  border-bottom: 1px solid #e3e1e1;
}
.cart-item:hover .cart-img-button{
  display: block;
}
.cart-item-center{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  width: 40%;
  position: relative;
  text-align: justify;
}
.cart-item-center1{
  justify-content: flex-end;
  width: 100%;
}
.cart-checkout-price{
  display: flex;
  flex-direction: column;
}
.cart-img{
  max-width: 150px;
}
.cart-img-button{
  display: none;
  position: absolute;
}
.cart-counter{
  display: flex;
}
.cart-counter-input{
  max-width: 50px;
  text-align: center;
}
.cart-item-small{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
}
.cart-item-title{
  width: 70%;
}
.cart-counter-price{
  width: 70px;
  text-align: right;
}
.pd0-10{
  padding: 0 10px;
}
.cart-checkout{
  z-index: 1;
  position: sticky;
  height: 100px;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: white;
  border-top: 1px solid #f4f4f4;
}
.cart-checkout-price{
  margin: 0 10px;
}
.cart-checkout-buttons{
  display: flex;
}
.cart-checkout-button{
  margin: 0 10px;
}
@media (max-width: 992px) {
  .cart-checkout{
    margin-left: 0;
    width: 100%;
    justify-content: center;
  }
}
@media (max-width: 802px) {
  .cart-item{
    padding: 10px 50px;
  }
}
@media (max-width: 602px) {
  .cart-item{
    flex-direction: column;
    padding: 10px 0;
  }
  .cart-item-center {
    flex-direction: column;
    text-align: center;
  }
  .cart-item-title{
    flex-direction: column;
  }
  .cart-checkout{
    flex-direction: column;
    justify-content: space-around;
  }
  .mt-30-small{
    margin-top: 30px;
  }
}
</style>