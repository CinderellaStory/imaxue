<template>
<div class="header ov">
    <div class="logo">
      <div class="nav-icon fl">
          <i class="iconfont icon-ego-menu" @click="childClick"></i>
          <router-link to="../../home"><img src="../assets/logo.png"></router-link>
      </div>
    </div>
      <div class="Search ov">
          <div class="search-input fl">
            <input type="text" placeholder="请输入搜索内容">
            <i class="iconfont icon-sousuo"></i>
          </div>
          <div class="sign fr">
            <a href="" @click="GoLogin">登录</a>
            <span>|</span>
            <a href="" @click="GoRegister">注册</a>
          </div>
      </div>
</div>
</template>

<script>
  export default{
    data(){
      return{
        childValue:false
      }
    },
    methods:{
      childClick () {
        // childByValue是在父组件on监听的方法
        // 第二个参数this.childValue是需要传的值
        this.$emit('childByValue', this.childValue)
      },
      GoLogin(){
      var _this = this
      _this.$router.push({
        path:'/login'
      })
    },
    GoRegister(){
      var _this = this
      _this.$router.push({
        path:'/register'
      })
    }
    }
  }
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
    height: 84px;    min-width: 1200px;
    display: flex;
    align-items: center;
  }
  .logo{
    width: 20%;
    float: left;
  }
  .nav-icon{
    cursor: pointer;
  }
  .nav-icon i.icon-ego-menu{
    float: left;
    margin: 4px;
    font-size: 30px;
  }
    .nav-icon a{
    float: left;
  }
.Search{
  float: left;
  width: 1200px;
  display: flex;
  align-items: center;
}
.search-input{
  width: 64%;
  position: relative;
}
.search-input input{
  width: 100%;
  height: 35px;
  border-radius: 20px;
  outline: none;
  border: none;
  padding-left: 10px;
}
.icon-sousuo{
  position: absolute;
  top: 6px;
  font-size: 20px;
  right: 1px;
}
.sign{
     font-size: 14px;
     width: 40%;
     text-align: right;
     line-height: 84px;
}

</style>
