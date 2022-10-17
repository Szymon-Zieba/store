<template>
  <div class="shop-main">
    <div class="shop-main__top">
      <p class="shop-main__top-left">
        Jeans
      </p>
      <p class="shop-main__top-right">
        <router-link to="/"  class="margin-right click">
          <font-awesome-icon  icon="fa fa-shopping-cart"  />
        </router-link>
        <font-awesome-icon icon="fa fa-search" />
      </p>
      <router-link to="/cart"></router-link>
    </div>
    <BannerMain></BannerMain>
    <ShopList></ShopList>
  </div>
</template>

<script>
import BannerMain from "./BannerMain.vue"
import ShopList from "../ShopList/ShopList.vue"
import SubscribeNewsletter from "../SubscribeNewsletter.vue"
import ContactInfo from "../ContactInfo.vue"
import NewsletterPopup from "../NewsletterPopup.vue"
export default {
  name: "ShopMain.vue",
  components: {NewsletterPopup, ContactInfo, ShopList, BannerMain, SubscribeNewsletter}
}
</script>

<style scoped>
.shop-main{
}
.shop-main__top{
  padding: 0 16px;
  font-size: 24px;
  height: 80px;
}
.shop-main__top-left{
  float: left;
}
.shop-main__top-right{
  float: right;
}
.margin-right{
  margin-right: 16px;
}
</style>