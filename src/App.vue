<template>
  <div id="app">
    
    <h1>{{ message }}</h1>
    <nav>
      <router-link to="/">Vue Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </div>
</template>
<!-- 模板部分，生成HTML代码 -->
<script>
export default {
  data() {
    return {
      message: "Hello Vue"
    }
  }
}
</script>
<!-- 控制模板数据来源和行为 -->
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<!-- css样式部分 -->
