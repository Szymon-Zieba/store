<template>
  <section id="shopList">
    <p class="counter">
      {{products.length}} items
    </p>
    <div class="list">
      <div class="item"
           v-for="(item, index) in products"
           :key="index"
           @mouseover="mouseOn(index)"
           @mouseleave="mouseOff()"
      >
        <div class="item-photo">
          <div class="item-button" :style="mouseId === index ?  'display: block' : 'display: none'">
            <button class="button button-black">
              Buy now
              <i class="fa fa-shopping-cart"></i>
            </button>
          </div>
          <img class="item-img" :src="item.image">
        </div>
        <p>
          {{item.product_name}}
        </p>
        <p>
          <b>{{item.price}}</b>
        </p>

      </div>
    </div>
  </section>
</template>

<script>
import {fetchData, link} from '@/api'
import {onMounted, reactive, ref} from "vue";
export default {
  name: "ShopList.vue",
  setup(){
    let isButtonVisible = ref(false)
    let products = ref([])
    let mouseId = ref(null)

    const mouseOn = (index) => {
      isButtonVisible = true
      mouseId.value = index
    }

    const mouseOff = () => {
      isButtonVisible = false
      mouseId.value = -1
    }


    onMounted(async () => {
      products.value = await fetchData(link)

    })
    return{
      products,
      isButtonVisible,
      mouseId,
      mouseOn,
      mouseOff,
    }
  }
}
</script>

<style>
.counter{
  color: grey;
  padding: 0 16px;
}
.list{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
@media (max-width: 992px) {
  .list{
    grid-template-columns: 1fr 1fr;
  }
}
.item{
  padding: 0 16px;
}
.item-photo{
  position: relative;
}
.item-img{
  width: 100%;
}
.item-button{
  position: absolute;
  top:50%;
  left: 50%;
  transform: translate(-50%, -50%);
  white-space: nowrap;
}
.display-none{
  display: none;
}
</style>