<template>
<div class="summary">
  <h1 class="summary-title">Summary</h1>
  <table class="styled-table">
    <thead>
    <tr>
      <th>Index</th>
      <th>Name</th>
      <th>Quantity</th>
      <th>Price</th>
    </tr>
    </thead>
    <tbody >
    <tr class="styled-table-tr" v-for="(item, index) in summaryCartList">
      <td>{{index+1}}</td>
      <td>{{ item.product.product_name }}</td>
      <td>{{item.quantity}}</td>
      <td>${{(item.product.price.split('$')[1] * item.quantity).toFixed(2)}}</td>
    </tr>
    <tr class="active-row">
      <td colspan="2" style="background-color: white"></td>
      <td>Products Quantity</td>
      <td>{{summaryLength}}</td>
    </tr>
    <tr class="active-row">
      <td colspan="2" style="background-color: white"></td>
      <td>Products Price</td>
      <td>${{cartValue}}</td>
    </tr>
    <!-- and so on... -->
    </tbody>
  </table>

  <div class="checkout">
    <div class="checkout-buttons">
      <router-link to="/cart" class="button button-black button-large m0-15">
        Back to Cart
      </router-link>
      <router-link to="/fillData" class="button button-red button-large m0-15">
        Delivery and Payment
      </router-link>
    </div>
  </div>
</div>
</template>

<script setup>
import {useCartStore} from "@/stores/cart";
import {storeToRefs} from "pinia";

const cartStore = useCartStore()
const {summaryCartList, cartValue, summaryLength} = storeToRefs(cartStore)

</script>

<style>
.summary{
  text-align: center;
}
.summary-title{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
}
.styled-table {
  border-collapse: collapse;
  margin: 25px 0;
  width: 100%;
  padding: 30px;
  text-align: left;
}
.styled-table thead tr {
  background-color: black;
  color: white;
}
.styled-table th,
.styled-table td {
  padding: 30px 15px;
}
.styled-table-tr{
  border-bottom: 1px solid #dddddd;
}
.styled-table-tr:nth-of-type(odd) {
  background-color: #f3f3f3;
}
.active-row {
  font-weight: bold;
  color: white;
  background-color: black;
  width: 50%;
}
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