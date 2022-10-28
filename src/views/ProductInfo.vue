<template>
  <div class="page-not-found" v-if="!product">
    <h1>ERROR 404</h1>
    <h2>PRODUCT NOT FOUND</h2>

    <h3>Go <router-link to="/" class="page-not-found-back"><b>back</b></router-link> to our shop</h3>
  </div>
  <section class="product" v-if="product">
    <TopNav></TopNav>
    <div class="product-small">
      <div class="product-box">
        <div class="product-box-image">
          <img class="product-box-img" :src="product.image" alt="product-img">
        </div>
        <div class="product-info">
          <div class="product-info-list">
            <h4 class="product-info-title"><b>{{product.product_name}}</b></h4>
            <h4 class="product-info-company">{{product.company}}</h4>
            <h4 class="product-info-price">{{product.price}}</h4>
          </div>
          <button @click="openModal()" class="button button-red button-large">Add to Card</button>
        </div>
      </div>
      <div class="product-description">
        <h2>Description</h2>
        <br>
        {{product.description}}
      </div>
    </div>
    <Modal v-model="isModalVisible" ><AddToCartPopup v-model="isModalVisible" :newItem="product"></AddToCartPopup></Modal>
  </section>
</template>

<script setup>
  import Modal from "@/components/Modal"
  import AddToCartPopup from "@/components/Popups/AddToCartPopup"
  import TopNav from "@/components/Nav/TopNav"
  import {onMounted, ref} from "vue";
  import {useRoute} from "vue-router";
  import {useProductsStore} from "@/stores/products"
  import useModal from "@/composables/modal";
  import {storeToRefs} from "pinia";

  const {openModal, isModalVisible }  = useModal()
  const productsStore = useProductsStore()
  const {product} = storeToRefs(productsStore)
  const {getProduct} = productsStore
  const route = useRoute()
  const id = ref(route.params.id)

  onMounted(async() => {
    await getProduct(id.value)
  })
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
  padding: 15px;
}
.product-box-image{
  width: 100%;
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
.product-info-list{
  text-align: right;
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
  padding: 15px;
}

@media (max-width: 768px){
  .product-box{
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .product-box-image{
    width: 80%;
  }
  .product-info{
    justify-content: space-between;
    align-items: center;
    height: 300px;
  }
  .product-info-list{
    text-align: center;
  }
}
</style>