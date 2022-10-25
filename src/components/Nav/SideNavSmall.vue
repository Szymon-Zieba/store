<template>
  <div @click="" id="small-side-nav">
    <SideNav></SideNav>
    <div class="background"></div>
  </div>
</template>

<script setup>
import SideNav from "./SideNav.vue"
</script>

<style scoped>
#small-side-nav{
  width: 100%;
  height: 100%;
  z-index: 2;
  position: fixed;
  top: 0;
}
.background{
  display: block;
  background-color: rgba(0,0,0,0.9);
  cursor: pointer;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 2;
}
</style>