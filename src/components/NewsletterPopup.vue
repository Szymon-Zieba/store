<template>
  <div class="popup" id="popup">
    <div class="popup-block">
      <div @click="displayIdStyle('popup', 'none')">
        <i class="fa fa-remove popup-block-icon"></i>
      </div>

      <h2 class="popup-block-title">NEWSLETTER</h2>
      <p>Join our mailing list to receive updates on new arrivals and special offers.</p>
      <p><input class="width100" type="text" placeholder="Enter e-mail"></p>
      <button class="button button-large button-red popup-block-button">Subscribe</button>
    </div>
  </div>
</template>

<script>

import { displayIdStyle } from '@/functions/displayIdStyle'
export default {
  name: "NewsletterPopup.vue",
  setup(){

    return {
      displayIdStyle
    }
  }
}
</script>

<style scoped>
.popup{
  display: none;
  z-index: 10;
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgba(0,0,0,0.4);
  top: 0;
  left: 0;
  padding: 100px 0;
}

.popup-block{
  margin: auto;
  background-color: white;
  width: 900px;
  text-align: center;
  padding: 64px;
}
@media (max-width: 992px) {
  .popup-block{
    width: 600px;
  }
}
@media (max-width: 768px){
  .popup-block{
    width: 500px;
  }
}
@media (max-width: 600px){
  .popup-block{
    width: auto;
    margin: 10px 0;
  }
}
.popup-block-title{
  letter-spacing: 4px;
}
.popup-block-icon{
  font-size: 36px;
  float: right;
  cursor: pointer;
}
.popup-block-button{
  margin: 0 auto;
}
</style>