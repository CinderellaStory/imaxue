<template>
<div>
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
 <div class="navbar" v-if="childValue">
     <ul>
       <router-link tag="li" to="../../settings/myhome">我的主页</router-link>
       <router-link tag="li" to="../../settings/teachers">讲师主页</router-link>
       <router-link tag="li" to="../../settings/follows">我的关注</router-link>
       <router-link tag="li" to="../../settings/fans">我的粉丝</router-link>
       <router-link tag="li" to="../../settings/collect">我的收藏</router-link>
       <router-link tag="li" to="../../settings/userinfo">个人信息</router-link>
       <router-link tag="li" to="../../settings/accountbind">账号绑定</router-link>
       <router-link tag="li" to="../../settings/order">我的订单</router-link>
       <router-link tag="li" to="../../settings/study">最近学习</router-link>
       <router-link tag="li" to="../../video">播放页</router-link>
       <router-link tag="li" to="../../search">搜索页</router-link>
       <router-link tag="li" to="../../list">列表页</router-link>
       <router-link tag="li" to="../../details">详情页</router-link>
       <router-link tag="li" to="../../sureorder">确认页</router-link>
       <router-link tag="li" to="../../cart">购物车</router-link>
     </ul>
 </div>
</div>
</template>

<script>
  export default{
    data(){
      return{
        childValue:true
      }
    },
    methods:{
      childClick () {
        this.childValue=!this.childValue
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
<style scoped lang="less">
body{
  position: relative;
}
.navbar{
  position: absolute;
  left: 0;
  background: #fff;
  width: 230px;
  height: 100%;
  ul{
    li{
      height: 40px;
      line-height: 40px;
      cursor: pointer;
      font-size: 12px;
      border-bottom:1px solid #ddd;
      &:hover{
        background: #d3d3d3;
        color: red;
      }
    }
  }
}

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
