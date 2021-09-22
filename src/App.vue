<template>
  <div id="app">
    <!-- 传值的第一种方式   类似于面包屑的功能   -->
    <!-- <p>{{ $route.name }}</p> -->
    <!-- 传值的第二种方式，name对应router中的name，params是要传递的参数，可以传多个参数 -->
    <!-- 
       传递： <router-link :to="{ name: 'hi1', params: { username: 'jspang', id: 22 } }" >hi1</router-link> 
      接收：{{ message }}---{{ $route.params.username }}---{{ $route.params.id }}
        -->
    <router-link to="/home">Home</router-link>
    |
    <router-link to="/">about</router-link>
    |
    <!-- 加入了正则，我们再传递数字之外的其他参数，params.vue组件就没有办法接收到 -->
    <router-link to="/params/189/this is a title">params</router-link>
    |
    <router-link to="/goAbout">goAbout</router-link>
    |
    <router-link to="/goparams/18449/this is a goparams">goparams</router-link>
    |
    <router-link to="/hi1">hi1</router-link>
    |
    <router-link to="/hello">hello</router-link>
    |
    <router-link to="/sss">瞎写的</router-link>

    <transition name="fade" mode="out-in">
      <router-view />
    </transition>

    <!-- <router-view name="left" class="left" />
    <router-view name="right" class="right" /> -->
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
.fade-enter {
  opacity: 0; //透明度为完全透明
}
.fade-leave {
  opacity: 1; //透明度为不透明
}
.fade-enter-active {
  transition: opacity 0.5s; //
}
.fade-leave-active {
  opacity: 0;
  transition: opacity 0.5s;
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
