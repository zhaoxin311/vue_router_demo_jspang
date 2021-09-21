<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
      |
      <router-link to="/hi">hi</router-link>
      |
      <!-- 传值的第二种方式，name对应router中的name，params是要传递的参数，可以传多个参数 -->
      <router-link
        :to="{ name: 'hi1', params: { username: 'jspang', id: 22 } }"
      >
        hi1
      </router-link>
      |
      <router-link to="/hi/hi2">hi2</router-link>
      |
    </div>
    <!-- 类似于面包屑的功能  传值的第一种方式 -->
    <p>{{ $route.name }}</p>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
