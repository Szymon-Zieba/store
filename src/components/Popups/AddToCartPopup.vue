<template>
  <div class="popup" id="addToCartPopup">
    <div class="popup-block">
      <h2 class="popup-block-title">Add To Cart</h2>
      <p>Are you sure to add {{newItem.product_name}} to cart?</p>
      <div class="popup-buttons">
        <button @click="addNewProduct()" class="button button-large button-red popup-block-button">Add Product</button>
        <button @click="" class="button button-large button-red popup-block-button">Back To Shop</button>
      </div>
    </div>
  </div>
</template>

<script>
import {useCartStore} from "@/stores/cart";
import {ref, toRef} from "vue";
export default {
  name: "AddToCartPopup.vue",
  props: {
    newItem: Object
  },
  setup(props){
    const cartStore = useCartStore()
    const { addProduct } = cartStore
    const newItem = toRef(props, 'newItem')
    const addNewProduct = () => {
      addProduct(newItem.value)
    }
    return {
      addNewProduct,
      newItem
    }
  }
}
</script>

<style >
.popup-buttons{
  display: flex;
}
</style>