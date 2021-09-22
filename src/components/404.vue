<template>
  <div class="hello">
    <h2>{{ message }}</h2>
    页面不存在！！
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      message: '404 ERROR'
    }
  }
}
</script>

<style scoped lang="scss"></style>
