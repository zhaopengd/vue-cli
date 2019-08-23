<template>
  <div>
     <h1>{{msg}}</h1>
     <img src="../assets/logo.png" alt="">
  </div>
</template>

<script>

export default {
  data () {
    return {
      msg: '垃圾'
    }
  }
}
 </script>

<style>
  img {
    width: 300px;
    height: 300px;
  }
</style>
