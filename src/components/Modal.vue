<template>
  <Teleport to="body">
    <div v-if="props.modelValue" class="modal-main">
      <div  class="modal">
        <div @click="close()" class="modal-close">
          <i class="fa-solid fa-x"></i>
        </div>
        <div class="modal-content">
          <slot></slot>
        </div>
      </div>
    </div>
  </Teleport>
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

<style scoped>
.modal-main{
  position: fixed;
  background-color: rgba(0,0,0,0.4);
  width: 100vw;
  height: 100vh;
  z-index: 5;
  top: 0;
  left: 0;
}
.modal{
  position: absolute;
  overflow: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
}
.modal-content{

}
.modal-close{
  position: absolute;
  cursor: pointer;
  right: 20px;
}
@media (max-width: 350px){
  .modal-close{
    right: 10px;
    top: 10px;
  }
}
</style>