<template>
  <div class="hi1">
    <h2>
      {{ message }}---{{ $route.params.username }}---{{ $route.params.id }}
    </h2>
  </div>
</template>

<script>
export default {
  name: 'hi1',
  data() {
    return {
      message: '我是hi1页面'
    }
  }
}
</script>

<style scoped lang="scss"></style>
