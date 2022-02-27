<template>
  <div class="hello" id="hello">
    <h1>{{ msg }}</h1>
    <div>
      Spring Cloud 中文网：
      <a href="https://www.springcloud.cc/" target="_blank" rel="noopener">springcloud documentation</a>.
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#hello {
  text-align: left;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
