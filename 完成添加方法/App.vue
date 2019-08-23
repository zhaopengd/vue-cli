<template>
  <div>
    <div class="todo-container">
      <div class="todo-wrap">
        <Header :addTodo='addTodo'></Header>
        <List :todos="todos"></List>
        <Footer></Footer>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
export default {
  data() {
    return {
      todos: [
        { id: 1, title: 'AAA', complete: false },
        { id: 2, title: 'BBB', complete: true },
        { id: 3, title: 'CCC', complete: false }
      ]
    }
  },
  methods: {
    addTodo (todo){
      this.todos.unshift(todo )
    }
  },
  components: {
    Header,
    List,
    Footer
  }
}
</script>

<style scoped>
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
