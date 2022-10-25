<template>
  <div class="popup" id="addToCartPopup">
    <div class="popup-block">
      <h2 class="popup-block-title">Add To Cart</h2>
      <p class="popup-block-text">Are you sure to add <b>{{newItem.product_name}}</b> to cart?</p>
      <div class="popup-buttons">
        <button @click="addNewProduct()" class="button button-large button-red popup-block-button">Add Product</button>
        <button @click="close()" class="button button-large button-red popup-block-button">Back To Shop</button>
      </div>
    </div>
  </div>
</template>

<script setup >
import {useCartStore} from "@/stores/cart";
import { toRef} from "vue";
  const props = defineProps({
    modelValue: Boolean,
    newItem: Object
  })

  const emit = defineEmits(["update:modelValue"])
  const cartStore = useCartStore()
  const { addProduct} = cartStore
  const newItem = toRef(props, 'newItem')
  const close = () => {
    emit("update:modelValue", false)
  }
  const addNewProduct = () => {
    addProduct(newItem.value)
    close()
  }

</script>

<style >
.popup-buttons{
  display: flex;
}
.popup-block-text{
  text-align: center;
}
@media (max-width: 600px) {
  .popup-buttons {
    flex-direction: column;
    height: 100px;
    justify-content: space-between;
  }
}
.popup-block-button{
  padding: 10px;
}
</style>