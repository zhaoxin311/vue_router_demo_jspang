<template>
  <div class="params">
    <h2>{{ message }}</h2>
    <!-- 接收传递过来的参数 -->
    <p>newsID：{{ $route.params.newsId }}</p>
    <p>newsTitle：{{ $route.params.newsTitle }}</p>
    <p>params 和 goparams 是带参数的重定向</p>
    <hr />
    <h3>** 路由配置文件中的钩子函数 **</h3>
    <span>
      三个参数：
      <strong>(路由配置文件中的钩子函数只能写进入beforeEnter不能写离开)</strong>
      <br />
      1、to:路由将要跳转的路径信息，信息是包含在对像里边的。
      <br />
      2、from:路径跳转前的路径信息，也是一个对象的形式。
      <br />
      3、next:路由的控制参数，常用的有next(true)和next(false)。
      <br />
    </span>
    <h3>** 写在模板中的钩子函数 **</h3>
    <span>
      在配置文件中的钩子函数，只有一个钩子-beforeEnter，
      <br />
      如果我们写在模板中就可以有两个钩子函数可以使用：
      <br />
      1. beforeRouteEnter：在路由进入前的钩子函数。
      <br />
      2. beforeRouteLeave：在路由离开前的钩子函数。
    </span>
    <hr />
  </div>
</template>

<script>
export default {
  name: 'params',
  data() {
    return {
      message: '我是params页面'
    }
  },
  // 写在模板中的钩子函数
  beforeRouteEnter: (to, from, next) => {
    console.log('准备进入params路由模板')
    next()
  },
  beforeRouteLeave: (to, from, next) => {
    console.log('准备离开params路由末班')
    next()
  }
}
</script>

<style scoped lang="scss"></style>
