<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <h4>** css过渡类名： **</h4>
    <br />
    <span>
      组件过渡过程中，会有四个CSS类名进行切换，这四个类名与transition的name属性有关，
      <br />
      比如name=”fade”,会有如下四个CSS类名：
    </span>
    <br />
    <span>
      1、fade-enter:进入过渡的开始状态，元素被插入时生效，只应用一帧后立刻删除。
      <br />
      2、fade-enter-active:进入过渡的结束状态，元素被插入时就生效，在过渡过程完成后移除。
      <br />
      3、fade-leave:离开过渡的开始状态，元素被删除时触发，只应用一帧后立刻删除。
      <br />
      、fade-leave-active:离开过渡的结束状态，元素被删除时生效，离开过渡完成后被删除。
    </span>
    <hr />
    <h3>过渡模式mode：</h3>
    <br />
    <span>默认的mode模式in-out模式(先进后出)</span>
    <br />
    <span>
      1. in-out(先进后出):新元素先进入过渡，完成之后当前元素过渡离开。
      <br />
      2. out-in(先出后进):当前元素先进行过渡离开，离开完成后新元素过渡进入。
    </span>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
