<template>
  <div id="app">
    <!-- 传值的第一种方式   类似于面包屑的功能   -->
    <!-- <p>{{ $route.name }}</p> -->
    <!-- 传值的第二种方式，name对应router中的name，params是要传递的参数，可以传多个参数 -->
    <!-- 
       传递： <router-link :to="{ name: 'hi1', params: { username: 'jspang', id: 22 } }" >hi1</router-link> 
      接收：{{ message }}---{{ $route.params.username }}---{{ $route.params.id }}
        -->
    <router-view />
    <router-view name="left" class="left" />
    <router-view name="right" class="right" />
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
.left {
  float: left;
  width: 50%;
  height: 300px;
  background: #bbb;
}
.right {
  float: left;
  width: 50%;
  height: 300px;
  background: #999;
}
</style>
