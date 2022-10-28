<template>
  <div>
    <input :style="style" style="width: 100%" :placeholder="placeholder" required  :value="modelValue.value" @focusout="updateInput">
    <label v-if="!modelValue.valid" class="label-error">{{ errorMessage }}</label>
  </div>
</template>

<script setup>
import {computed} from "vue";
const props = defineProps({
  modelValue: {
    Object,
    require: true
  },
  validator: {
    type: Function,
    default: () => true
  },
  placeholder: String,
  errorMessage: String,
})
const emit = defineEmits(['update:modelValue'])

const updateInput = (e) => {
  emit('update:modelValue', {
    value: e.target.value,
    valid: props.validator(e.target.value)
  })
}

const style = computed(() => ({
  border: !props.modelValue.valid ? '1px solid red' : ''
}))
</script>

<style scoped>
.label-error{
  color: red;
  padding: 10px;
}
</style>