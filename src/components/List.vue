<template>
  <ul class="todo-main">
    <!-- 此时的todo是每一条数据  根据数据条数生成多个item 组件 然后把数据传到item 进行显示 -->
    <Item v-for="(todo) in todos" :key="todo.id" :todo="todo"></Item>
  </ul>
</template>
<script>
import Item from './Item'
export default {
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
