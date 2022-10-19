<template>
  <div class="popup" id="popup">
    <div class="popup-block">
      <h2 class="popup-block-title">NEWSLETTER</h2>
      <p>Join our mailing list to receive updates on new arrivals and special offers.</p>
      <p><input class="width100" type="text" placeholder="Enter e-mail"></p>
      <button class="button button-large button-red popup-block-button">Subscribe</button>
    </div>
  </div>
</template>

<script>

export default {
  name: "NewsletterPopup.vue",
  setup(){

    return {

    }
  }
}
</script>

<style>
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