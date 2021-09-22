<template>
  <div class="params">
    <h2>{{ message }}</h2>
    <!-- 接收传递过来的参数 -->
    <p>newsID：{{ $route.params.newsId }}</p>
    <p>newsTitle：{{ $route.params.newsTitle }}</p>
  </div>
</template>

<script>
export default {
  name: 'params',
  data() {
    return {
      message: '我是params页面'
    }
  }
}
</script>

<style scoped lang="scss"></style>
