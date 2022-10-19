<template>
  <Teleport to="body">
    <div v-if="modelValue" class="modal" @click="close()">
      <div class="modal-content">
        <slot></slot>
      </div>
    </div>
  </Teleport>
</template>

<script >
import { ref } from 'vue'
  export default {
    props: {
      modelValue: Boolean,
    },
    emits: ["update:modelValue"],
    setup(props, {emit}){
      const close = () => {
        emit("update:modelValue", false)
      }
      return{
        close
      }
    }
  }


</script>

<style scoped>
.modal{
  z-index: 5;
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgba(0,0,0,0.4);
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
}
.modal-content{
  background-color: white;
  padding: 40px;
}
</style>