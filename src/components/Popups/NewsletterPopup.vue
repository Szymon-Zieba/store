<template>
  <div class="popup">
    <div class="popup-block">
      <h2 class="popup-block-title">NEWSLETTER</h2>
      <p>Join our mailing list to receive updates on new arrivals and special offers.</p>
      <p><input class="width100" type="text" placeholder="Enter e-mail"></p>
      <button @click="close" class="button button-large button-red popup-block-button">Subscribe</button>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    modelValue: Boolean
  })

  const emit = defineEmits(["update:modelValue"])
  const close = () => {
    emit("update:modelValue", false)
  }

</script>

<style>
.popup-block{
  width: 700px;
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
    width: 70vw;
  }
}
.popup-block-title{
  letter-spacing: 4px;
  text-align: center;
}
.popup-block-button{
  margin: 0 auto;
}
</style>