<template>
  <ul class="todo-main">
    <Item v-for="(todo) in todos" :key="todo.id" :todo='todo'></Item>
  </ul>
</template>
<script>
import Item from './Item'
export default {
  // 声明接收标签属性：接收属性的属性名！！！
  props: ['todos'],
  components: {
    Item
  }
}
</script>

<style scoped>
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}
.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
