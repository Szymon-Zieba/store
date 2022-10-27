<template>
  <section id="shopList">
    <p class="counter">
      {{products.length}} items
    </p>
    <div class="list">
      <div class="item"
           v-for="(item, index) in products"
           :key="item.id"
      >
        <div class="item-photo">
          <div class="item-button">
            <button @click="clickBuyProduct(item)" class="button button-black">
              Buy now
              <i class="fa fa-shopping-cart"></i>
            </button>
          </div>
          <router-link @click="scrollToTop" :to="{ name: 'product', params: { id: item.id}}"> <img class="item-img" :src="item.image" :alt="'item' + index"></router-link>
        </div>
        <p>
          {{item.product_name}}
        </p>
        <div class="item-price-button">
          <p>
            <b>{{item.price}}</b>
          </p>
          <p>
            <router-link @click="scrollToTop" :to="{ name: 'product', params: { id: item.id}}" class="button button-black">More</router-link>
          </p>
        </div>
      </div>
    </div>
  </section>
  <Modal v-model="isModalVisible" ><AddToCartPopup v-model="isModalVisible" :newItem="newItem"></AddToCartPopup></Modal>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {useProductsStore} from "@/stores/products"
import {storeToRefs} from "pinia";
import AddToCartPopup from "@/components/Popups/AddToCartPopup"
import Modal from "@/components/Modal"
import useModal from "@/composables/modal";
  const productsStore = useProductsStore()
  const { products } = storeToRefs(productsStore)
  const { getProducts } = productsStore

  const { openModal, isModalVisible } = useModal()
  const newItem = ref(null)
  const clickBuyProduct = (item) => {
    openModal()
    newItem.value = item
  }

  const scrollToTop = () => {
    window.scrollTo(0,0);
  }
  onMounted(async() => {
     await getProducts()
  })
</script>

<style>
.counter{
  color: grey;
  padding: 0 16px;
}
.list{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
.item{
  padding: 0 16px;
}
.item-photo{
  position: relative;
}
.item-photo:hover > .item-button{
  display: block;
}
.item-img{
  width: 100%;
}
.item-button{
  display: none;
  position: absolute;
  top:50%;
  left: 50%;
  transform: translate(-50%, -50%);
  white-space: nowrap;
}
.item-price-button{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
@media (max-width: 992px) {
  .list{
    grid-template-columns: 1fr 1fr;
  }
}
</style>