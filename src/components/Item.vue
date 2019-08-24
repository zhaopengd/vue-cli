<template>
  <!-- mouseover进入子元素会触发离开的事件 -->
  <li
    :style="{background:bgColor}"
    @mouseenter="handleEnter(true)"
    @mouseleave="handleEnter(false)"
  >
    <label>
      <input type="checkbox" />
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="remove">删除</button>
  </li>
</template>

<script>
export default {
  props: {
    todo: Object,
    del: Function,
    index: Number
  },
  data() {
    return {
      bgColor: 'white',
      isShow: false
    }
  },
  methods: {
    handleEnter(isEnter) {
      if (isEnter) {
        this.bgColor = '#ccccc'
        this.isShow = true
      } else {
        this.bgColor = 'white'
        this.isShow = false
      }
    },
    remove() {
      this.del(this.index)
    }
  }
}
</script>

<style scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>
