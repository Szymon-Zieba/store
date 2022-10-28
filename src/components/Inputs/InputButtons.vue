<template>
  <div class="cart-counter">
    <button class="button cart-counter-button" @click="input--">
      -
    </button>
    <input class="cart-counter-input" v-model="input" @focusout="input = modelValue">
    <button class="button cart-counter-button" @click="input++">
      +
    </button>
  </div>
</template>

<script setup>
import {ref, watchEffect} from "vue";
  const props = defineProps({
    modelValue: Number,
  })
  const emit = defineEmits(['update:modelValue'])

  const validators = [
    (v) => v <= 100,
    (v) => v >= 0,
    (v) => v !== '',
  ]
  const input = ref(props.modelValue)
  watchEffect(() => {
    if(validators.every((v) => v(input.value))){
      emit("update:modelValue", input.value)
    }
    else if(input.value !== ''){
      input.value = props.modelValue
    }
  })
</script>

<style scoped>
.cart-counter-input{
  max-width: 50px;
  text-align: center;
}
.cart-counter-input:invalid{
  border-color: red;
}
.cart-counter{
  display: flex;
}
</style>