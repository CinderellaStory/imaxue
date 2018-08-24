<template>
<div class="header ov">
    <div class="nav-icon fl">
        <i class="iconfont icon-ego-menu"></i>
        <router-link to="../../home"><img src="../assets/logo.png"></router-link>
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
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h3{
  color: #333;
  font-weight: normal;
  margin: 20px 0;
}
  .header{
    width: 100%;
    background: #000;
    height: 84px;
    display: flex;
    /* justify-content: center; 水平居中 */
    align-items: center;     /* 垂直居中 */
    position: relative;
  }
  .nav-icon{
    position: absolute;
    width: 8%;
    left: 30px;
  }
  .nav-icon i.icon-ego-menu{
    display: inline-block;
  }
    .nav-icon a{
     display: inline-block;
  }
.Search{
  float: left;
  line-height: 84px;
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
     width: 200px;
     text-align: right;
     line-height: 84px;
}

</style>
