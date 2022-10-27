<template>
  <div :class="isVisibleBackground"></div>
  <div class="side-nav"
       :class="isVisible"
  >
    <div class="logo">
      <a
         class="side-nav-close"
          @click="close()"
      >
        <i class="fa fa-remove"></i>
      </a>
      <router-link to="/">
        <h3 class="logo-text">
         <b>LOGO</b>
        </h3>
      </router-link>

    </div>
    <div class="side-nav__list">
      <ItemSideNav v-for="(item, index) in categories" :key="index" :index="index" :item="item"></ItemSideNav>
    </div>
    <div class="side-nav__info">
      <a href="#contact" class="button">Contact</a>
      <a @click="openModal()" class="button">Newsletter</a>
      <a href="#newsletter" class="button">Subscribe</a>
    </div>
  </div>
  <Modal v-model="isModalVisible" ><NewsletterPopup v-model="isModalVisible"></NewsletterPopup></Modal>
</template>

<script setup>
import ItemSideNav from "@/components/Nav/ItemSideNav.vue";
import Modal from "@/components/Modal"
import NewsletterPopup from "@/components/Popups/NewsletterPopup";
import useModal from "@/composables/modal";
import {categories} from "@/components/Nav/category"
import {computed, inject} from "vue";
const {openModal, isModalVisible } = useModal()

const isSideNavVisible = inject('isSideNavVisible')

const isVisible = computed(() => isSideNavVisible.value ? 'side-nav-onclick' : 'side-nav-change')
const isVisibleBackground = computed(() => isSideNavVisible.value ? 'side-nav-background' : '')

const close = () => {
  isSideNavVisible.value = false
}

</script>

<style scoped>
.side-nav{
  height: 100%;
  width: 250px;
  display: block;
  z-index: 5;
  position: fixed;
  background-color: white;
}
.logo{
  width: 100%;
  padding: 26px 16px;
  position: relative;
}
.logo-text{
  letter-spacing: 4px;
  font-size: 24px;
  font-weight: 400;
}
.side-nav__list{
  color: #757575;
  padding: 64px 0;
  font-weight: bold;
  display: flex;
  flex-direction: column;
}
.side-nav__info{
  display: flex;
  flex-direction: column;
}
.side-nav-close {
  display: none;
}
.side-nav-background{
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.5);
  z-index: 2;
  cursor: pointer;
}
@media (max-width: 992px){
  .side-nav-close {
    display: block;
    float: right;
    cursor: pointer;
    top: 0;
  }
  .side-nav-change{
    display: none;
  }
  .side-nav-onclick{
    display: block;
    margin-top: -107px;
  }
}
@media (min-width: 993px){
  .side-nav-change{
    display: block;
    margin-top: 0px;
  }
  .side-nav-background{
    display: none;
  }
}
</style>