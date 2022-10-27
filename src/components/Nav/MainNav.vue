<template>
  <div class="main-nav">
    <router-link to="/"><h3 class="main-nav-logo">LOGO</h3></router-link>
    <p @click="close" class="main-nav-logo-menu"><i class="fa-solid fa-bars"></i></p>
  </div>
</template>

<script setup>

import {inject} from "vue";

const isSideNavVisible = inject('isSideNavVisible')
const close = () =>  {
  isSideNavVisible.value = !isSideNavVisible.value
}
</script>

<style scoped>

@media (min-width: 993px){
  .main-nav{
    display: none;
  }
}
.main-nav{
  background-color: black;
  color: white;
  font-size: 24px;
  position: sticky;
  width: 100%;
  top: 0;
  z-index: 1 ;
  overflow: hidden;
}
.main-nav-logo{
  letter-spacing: 4px;
  padding: 32px 16px;
  float: left;
  color: white;
}
.main-nav-logo-menu{
  float: right;
  padding: 10px 16px;
  cursor: pointer;
}
.fa-bars{
  color: white;
}
</style>