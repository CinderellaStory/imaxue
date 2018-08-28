<template>
 <div class="navbar">
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
</template>

<script type="text/javascript">
export default {
  data(){
    return{
      
    }
  },
   components: {

   }
 }
</script>

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
</style>
