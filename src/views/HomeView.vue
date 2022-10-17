<script >
import SideNav from "@/components/Nav/SideNav.vue";
import ShopMain from "@/components/ShopMain/ShopMain.vue"
import SubscribeNewsletter from "@/components/SubscribeNewsletter.vue"
import ContactInfo from "@/components/ContactInfo.vue"
import MainNav from "@/components/Nav/MainNav.vue"
import NewsletterPopup from "@/components/NewsletterPopup.vue"
import SideNavSmall from "@/components/Nav/SideNavSmall.vue";
import UserCart from "@/components/UserCart.vue"
import ProductInfo from "@/components/ProductInfo.vue"
export default {
  name: "HomeView.vue",
  components:{
    ProductInfo,
    UserCart,
    ShopMain,
    SideNav,
    SubscribeNewsletter,
    ContactInfo,
    NewsletterPopup,
    MainNav,
    SideNavSmall
  },
  setup(){

    return{

    }
  }
}

</script>

<template>
  <main id="main">
    <header>
      <MainNav></MainNav>
    </header>
    <SideNav></SideNav>
    <div class="whole">
      <div class="changeView">
<!--        <UserCart></UserCart>-->
        <ShopMain></ShopMain>
      </div>
      <SubscribeNewsletter></SubscribeNewsletter>
      <ContactInfo></ContactInfo>
      <NewsletterPopup></NewsletterPopup>
    </div>
  </main>
</template>

<style scoped>
main{

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
.changeView{

}
</style>
