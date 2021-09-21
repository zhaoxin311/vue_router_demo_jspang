<template>
  <div class="hello">
    <h2>{{ message }}</h2>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      message: '我是hi页面'
    }
  }
}
</script>

<style scoped lang="scss"></style>
