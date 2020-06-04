<template>
  <div id="app"  class="wrapper-box">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.wrapper-box{
    width: 1200px;
    margin: 0 auto;
    /* background-color: #fff; */
}
#app{
  height: 100%;
  width: 100%;
  /* background-image: linear-gradient( 0deg, #ABDCFF 10%, #0396FF 100%); */
}
</style>
