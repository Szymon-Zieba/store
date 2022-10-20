<template>
  <section class="product" v-if="product[0]">
    <div class="product-top">
      <p class="">
        Product
      </p>
      <p class="">
        <router-link to="/cart"  class="margin-right16 click">
          <font-awesome-icon  icon="fa fa-shopping-cart"  />
        </router-link>
        <font-awesome-icon icon="fa fa-search" />
      </p>
    </div>
    <div class="product-small">
      <div class="product-box">
        <div class="product-box-image">
          <img class="product-box-img" :src="product[0].image" alt="product-img">
        </div>
        <div class="product-info">
          <div class="product-info-list">
            <h4 class="product-info-title"><b>{{product[0].product_name}}</b></h4>
            <h4 class="product-info-company">{{product[0].company}}</h4>
            <h4 class="product-info-price">{{product[0].price}}</h4>
          </div>
          <button @click="openModal()" class="button button-red button-large">Add to Card</button>
        </div>
      </div>
      <div class="product-description">
        <h2>Description</h2>
        <br>
        {{product[0].description}}
      </div>
    </div>
    <Modal v-model="isModalVisible" ><AddToCartPopup v-model="isModalVisible" :newItem="product[0]"></AddToCartPopup></Modal>
  </section>
</template>

<script>
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import {useProductsStore} from "@/stores/products"
import Modal from "@/components/Modal"
import AddToCartPopup from "@/components/Popups/AddToCartPopup"
import useModal from "@/composables/modal";
export default {
  name: "ProductInfo.vue",
  components: {Modal, AddToCartPopup},
  setup(){
    const {product, getProduct} = useProductsStore()
    const route = useRoute()
    const id = ref(route.params.id)

    onMounted(async() => {
      console.log(id.value)
      await getProduct(id.value)
    })
    return{
      ...useModal(),
      id,
      product,
      getProduct
    }
  }
}
</script>

<style scoped>
.product{
  padding: 16px 32px;
}
.product-top{
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
  height: 120px;
}
.product-box{
  display: flex;
  padding: 15px 15px;
}
@media (max-width: 768px){
  .product-box{
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
}
.product-box-image{
  width: 100%;
}
@media (max-width: 768px){
  .product-box-image{
    width: 80%;
  }
}
.product-box-img{
  width: 100%;
}
.product-info{
  padding: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  text-align: center;
  width: 100%;
}
@media (max-width: 768px){
  .product-info{
    justify-content: space-between;
    align-items: center;
    height: 300px;
  }
}
.product-info-list{
  text-align: right;
}
@media (max-width: 768px){
  .product-info-list{
    text-align: center;
  }
}
.product-info-title{
  align-items: center;
  white-space: nowrap;
  margin-bottom: 50px;
}
.product-info-company{
  margin-bottom: 30px;
}
.product-info-price{
  margin-bottom: 30px;
}
.product-description{
  text-align: justify;
  padding: 15px 15px;
}
</style>