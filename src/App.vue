<template>
  <!-- router-link 定义点击后导航到哪个路径下 -->
  <div id="nav">
    <router-link to="/index">Index</router-link> |
    <router-link to="/home">Home</router-link> |
    <router-link to="/about">About</router-link>
    
  </div>
  <!-- 展示数据的三种方法 -->
  <!-- <div id="title">{{title1}}</div>
  <div id="app2" v-text="title2"></div>
  <div id="app3" v-html="title3"></div> -->
  <!-- 对应的组件内容渲染到router-view中 -->
  <router-view />
</template>

<script>

  export default {
    name: 'App',
    components: {},
    //el:"msg",
    data() {
      //const { title } = this.$route.meta

      return { title1:'hello world',title2:'<h1>hello world</h1>',title3:'<h1>hello world</h1>' }
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>