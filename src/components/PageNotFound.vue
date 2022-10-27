<template>
  <div class="page-not-found">
    <h1>ERROR 404</h1>
    <h2>PAGE NOT FOUND</h2>

    <h3>Go <router-link to="/" class="page-not-found-back"><b>back</b></router-link> to our shop</h3>
  </div>
</template>

<script>

</script>

<style>
.page-not-found{
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  height: 30vh;
}
.page-not-found-back:hover{
  background-color: #e8e5e5;
}
</style>