<template>
  <div>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header">
          <h2>Router Basic - 01</h2>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- 路由链接 -->
          <router-link to="/about" class="list-group-item">About</router-link>
          <router-link to="/home" class="list-group-item">Home</router-link>
        </div>
      </div>

      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <keep-alive>
              <!-- 标识在此显示当前路由组件界面 -->
              <!-- router-view 管理了上面路由连接的两个组件 -->
              <router-view msg="abc"></router-view>
            </keep-alive>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import About from './pages/About'
import Home from './pages/Home'
export default {
  components: {
    About,
    Home
  }
}
</script>

<style scoped>
</style>
