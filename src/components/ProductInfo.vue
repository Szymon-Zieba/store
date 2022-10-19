<template>
  <section class="product">
    product Info
    <router-link to="/">das</router-link>
    <button @click="cos()">dsadas</button>
    <router-link to="/cart">dasdsa</router-link>
  </section>
</template>

<script>
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";

export default {
  name: "ProductInfo.vue",
  setup(){
    const route = useRoute()
    const id = ref('')
    id.value = route.params.id;
    const cos = () => {
      console.log(id.value)
    }
    return{
      id,
      cos
    }
  }
}
</script>

<style scoped>

</style>