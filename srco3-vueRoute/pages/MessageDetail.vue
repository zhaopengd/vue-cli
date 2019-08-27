<template>
  <div>
    <ul>
      <li>ID:{{$route.params.id}}</li>
      <li>title:{{messageDetail.title}}</li>
      <li>content:{{messageDetail.content}}</li>
    </ul>
  </div>
</template>

<script>
const messageDetails = [
  { id: 1, title: 'message001', content: 'messafads001' },
  { id: 3, title: 'message003', content: 'messafads003' },
  { id: 5, title: 'message005', content: 'messafads005' }
]
export default {
  data() {
    return {
      messageDetail: {} // 当前需要显示的消息详情对象
    }
  },
  mounted() {
    // 模拟发请求获取数据
    setTimeout(() => {
      // 得到当前请求的id
      const id = this.$route.params.id * 1
      const detail = messageDetails.find(detail => detail.id === id)
      // 更新数据
      this.messageDetail = detail
    }, 1000)
  },
  // 由于每次点击 router-link 时候 $route 对象都会被重新创建，组件并没有挂载
  watch: {
    $route(value) {
      // 说明路由请求参数 发生变化
      // 重新发请求 显示最新值 所对应的的数据
      setTimeout(() => {
        // 得到当前请求的id
        const id = value.params.id * 1
        const detail = messageDetails.find(detail => detail.id === id)
        // 更新数据
        this.messageDetail = detail
      }, 1000)
    }
  }
}
</script>

<style scoped>
</style>
