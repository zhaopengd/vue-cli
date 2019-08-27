<template>
  <div>
    <div>click {{count}} times,count is {{evenOrOdd}}</div>
    <button @click="increment">+</button>
    <button @click="increment">-</button>
    <button @click="incrementIfOdd">increment if odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    }
  },
  computed: {
    evenOrOdd(){
      return this.count%2===1 ? '奇数' : '偶数'
    }
  },
}
</script>

<style scoped>
</style>
