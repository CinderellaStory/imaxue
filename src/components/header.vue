<template>
<div class="header">
    <div class="ov">
      <div class="nav-icon">
          <i class="iconfont icon-ego-menu"></i>
          <a href=""><img src="../assets/logo.png"></a>
      </div>
      <div class="mw ov">
        <div class="Search">
            <input type="text" placeholder="请输入搜索内容">
        </div>
        <div class="sign fr">
          <a href="">登录</a>
          <span>|</span>
          <a href="">注册</a>
        </div>
      </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fr{
  float: right;
}
.ov{
  overflow: hidden;
}
  .header{
    width: 100%;
    background: #000;
    height: 84px;
    display: flex;
    /* justify-content: center; 水平居中 */
    align-items: center;     /* 垂直居中 */
  }
  .nav-icon{
    float: left;
    width: 18%;
  }
  .nav-icon i.icon-ego-menu{
    display: inline-block;
  }
    .nav-icon a{
     display: inline-block;
  }
.Search{
  float: left;
  width: 40%;
}
.Search input{
  width: 700px;
  height: 35px;
  border-radius: 20px;
  outline: none;
  border: none;
  padding-left: 10px;
}
.sign{
     font-size: 14px;
}
</style>
