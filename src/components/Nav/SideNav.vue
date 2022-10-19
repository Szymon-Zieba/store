<template>
  <div id="side-nav-background" class="side-nav-background"></div>
  <div class="side-nav side-nav-change" id="side-nav">
    <div class="logo">
      <a
         class="side-nav-close"
          @click="closeSideNav()"
      >
        <i class="fa fa-remove"></i>
      </a>
      <a href="/">
        <h3 class="logo-text">
         <b>LOGO</b>
        </h3>
      </a>

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
  <Modal v-model="isModalVisible" ><NewsletterPopup></NewsletterPopup></Modal>
</template>

<script>
import ItemSideNav from "@/components/Nav/ItemSideNav.vue";
import Modal from "@/components/Modal"
import NewsletterPopup from "@/components/Popups/NewsletterPopup";
import {closeSideNav} from "@/composables/displayIdStyle";
import {ref} from "vue";
import useModal from "@/composables/modal";
export default {
  name: "SideNav.vue",
  components: {ItemSideNav, Modal, NewsletterPopup},
  setup(){
    const categories = ref([
      {
        category: "Shirts",
      },
      {
        category: "Dresses",
      },
      {
        category: "Jeans",
        more: [
            "Skinny",
            "Relaxed",
            "Bootcut",
            "Straight",
        ]
      },
      {
        category: "Jackets",
      },
      {
        category: "Gymwear",
      },
      {
        category: "Blazers",
      },
      {
        category: "Shoes",
      }
    ])

    return {
      ...useModal(),
      categories,
      closeSideNav
    }
  }
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

@media (max-width: 992px){
  .side-nav-change{
    display: none;
  }
}
.side-nav-onclick{
  display: block;
  margin-top: -95px;
}
@media (min-width: 993px){
  .side-nav-change{
    display: block;
    margin-top: 0;
  }
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
@media (max-width: 992px) {
  .side-nav-close {
    display: block;
    float: right;
    cursor: pointer;
    top: 0;
  }
}
.side-nav-background{
  display: none;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.5);
  z-index: 2;
  cursor: pointer;
}
</style>