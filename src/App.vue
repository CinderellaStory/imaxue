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
.ml15{
  margin-left: 15px;
}
button{
  outline: none;
}
a,p,body{
   font-family: 'Avenir', Helvetica, Arial, sans-serif;
   font-size: 14px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  background: #f7f7f7;
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
