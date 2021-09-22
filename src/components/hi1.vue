<template>
  <div class="hi1">
    <p>hi1 和 hello 是alias 别名的例子</p>
    <h2>** redirect和alias的区别 **</h2>
    <span>
      redirect：仔细观察URL，redirect是直接改变了url的值，把url变成了真实的path路径。
    </span>
    <br />
    <span>
      alias：URL路径没有别改变，这种情况更友好，让用户知道自己访问的路径，只是改变了
      router-view 中的内容。
    </span>
    <br />

    <span>
      <strong>
        ** 填个小坑： ** 别名请不要用在path为’/’中别名是不起作用的。
      </strong>
    </span>
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
