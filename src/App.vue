<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  background: #d7d7d7;
}
.bg{
  background:#fff;
}
*{
  margin: 0;
  padding: 0;
}
.mw{
  width: 1200px;
  margin: 0 auto;
  /* border: 1px solid red; */
}
a{
  text-decoration: none;
  color: #fff;
}
ul{
  list-style: none;
}
.fr{
  float: right;
}
.fl{
   float: left;
}
.ov{
  overflow: hidden;
}
</style>
