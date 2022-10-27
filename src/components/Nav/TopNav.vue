<template>
  <div class="main">
    <div class="main__top">
      <p class="main__top-left">
        Jeans
      </p>
      <p class="main__top-right">
        <router-link to="/cart" class="margin-right16 click main__top-right-cart">
          <font-awesome-icon icon="fa fa-shopping-cart"/>
          <span class="main__top-right-cart-length" v-if="cartLength !== 0"> {{cartLength}}</span>
        </router-link>
        <font-awesome-icon icon="fa fa-search"/>
      </p>
      <router-link to="/cart"></router-link>
    </div>
  </div>
</template>

<script setup>
import {storeToRefs} from "pinia";
import {useCartStore} from "@/stores/cart";
const cartStore = useCartStore()
const {cartLength} = storeToRefs(cartStore)
</script>

<style scoped>
.main__top {
  padding: 0 16px;
  font-size: 24px;
  height: 80px;
}

.main__top-left {
  float: left;
}

.main__top-right {
  float: right;
}
.main__top-right-cart{
  position: relative;
}
.main__top-right-cart-length{
  position: absolute;
  bottom: 0;
  right: -5px;
  color: black;
  background: red;
  font-size: 14px;
  width: 20px;
  display: flex;
  justify-content: center;
  border-radius: 50%;
}
</style>