<template>
  <a  v-if="!item.more"
      class="side-nav__item"
  >
    {{item.category}}
  </a>

  <a  v-else
      @click="isHidden = !isHidden"
      class="side-nav__item side-nav__item-more"
  >
    {{item.category}}
    <font-awesome-icon :icon="isHidden ? 'fa fa-caret-down' : 'fa fa-caret-right'" />
  </a>
  <div v-if="isHidden" class="side-nav__item-categories" >
    <a v-for="(more, index) in item.more"
       :key="index"
        class="side-nav__item side-nav__item-new">
      {{more}}
    </a>
  </div>
</template>

<script setup>
  import {ref} from "vue";
  const props = defineProps({
    item:{
      type:Object,
      required: true
    },
    index:{
      type: Number,
      required: true
    }
  })
  const item = props.item
  const index = props.index
  let isHidden = ref(false)

</script>

<style scoped>
  .side-nav__item{
    color: grey;
    font-size: 17px;
    width: 100%;
    padding: 12px 32px;
    text-align: left;
    white-space: normal;
    overflow: hidden;
    text-decoration: none;
    cursor: pointer;
  }
  .side-nav__item:hover{
    color: #000;
    background-color: #ccc;
  }
  .side-nav__item-more{
    color: black;
  }
  .side-nav__item-categories{
    color: #757575;
    padding: 10px 24px;
    text-align: left;
    display: flex;
    flex-direction: column;
  }
  .side-nav__item-new{
    font-size: 15px;
  }
</style>