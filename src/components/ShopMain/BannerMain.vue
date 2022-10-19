<template>
  <section class="banner-main" id="banner-main">
      <img class="banner-main-img" src="../../assets/jeans.jpg">
      <div class="banner-main-text">
        <h1 class="banner-main-text-h1">
          New arrivals
        </h1>
        <h1 class="banner-main-600">
          COLLECTION 2016
        </h1>
        <p class="banner-main-button">
          <a class="banner-main-button-text" href="#shopList" >SHOP NOW</a>
        </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "BannerMain.vue"
}
</script>

<style scoped>
.banner-main{
  color: #fff;
  position: relative;
  font-weight: normal;
  padding: 0 16px;
}
.banner-main-img{
  width: 100%;
  vertical-align: center;
}
.banner-main-text{
  position: absolute;
  top:0;
  left:0;
  padding: 24px 48px;
}
.banner-main-text-h1 {
  font-size: 64px;
}
@media (max-width: 600px) {
  .banner-main-text-h1 {
    font-size: 30px;
  }
}
.banner-main-button{
  margin-top: 30px;
}
.banner-main-button-text{
  background: black;
  color: white;
  padding: 12px 24px;
  font-size: 18px;
}
.banner-main-button-text:hover{
  background: #ccc;
  color: black;
}
@media (max-width: 600px) {
  .banner-main-600 {
    display: none;
  }
}
h1{
  margin: 10px 0;
}
</style>