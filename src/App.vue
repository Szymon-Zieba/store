<script setup>
import MainNav from '@/components/Nav/MainNav'
import SideNav from '@/components/Nav/SideNav'
import SubscribeNewsletter from '@/components/SubscribeNewsletter'
import ContactInfo from '@/components/ContactInfo'
import {provide, ref} from "vue";

const isSideNavVisible = ref(false)
provide('isSideNavVisible', isSideNavVisible)
</script>

<template>
  <main id="main">
    <header>
      <MainNav></MainNav>
    </header>
    <SideNav></SideNav>
    <div class="whole">
      <div class="changeView">
        <RouterView/>
      </div>
      <SubscribeNewsletter></SubscribeNewsletter>
      <ContactInfo></ContactInfo>
    </div>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}
.nav{
  display: none;
}
.whole{
  margin-left: 260px;
  transition: margin-left .4s;
}
@media (max-width: 992px){
  .whole{
    margin-left: 0;
  }
}
</style>
