<template>
  <div>
     <h1>根组件</h1>
     <HelloWorld></HelloWorld>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
 </script>

<style scoped>
    h1 {
      color: rebeccapurple;
    }
</style>
