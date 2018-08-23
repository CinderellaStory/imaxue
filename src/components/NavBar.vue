<template>
 <div class="navbar">
      <!-- <h3>首页</h3> -->
     <ul>
       <router-link tag="li" to="follows">热门推荐</router-link>
       <router-link tag="li" to="follows">新手入门</router-link>
       <router-link tag="li" to="follows">经典课程</router-link>
       <router-link tag="li" to="follows">实战课程</router-link>
     </ul>
       <!-- <h3>个人中心</h3> -->
     <ul>
       <router-link tag="li" to="follows">我的主页</router-link>
       <router-link tag="li" to="follows">讲师主页</router-link>
       <router-link tag="li" to="../../settings/follows">我的关注</router-link>
       <router-link tag="li" to="../../settings/fans">我的粉丝</router-link>
       <router-link tag="li" to="../../settings/collect">我的收藏</router-link>
       <router-link tag="li" to="follows">个人信息</router-link>
       <router-link tag="li" to="follows">账号绑定</router-link>
       <router-link tag="li" to="follows">我的订单</router-link>
       <router-link tag="li" to="../../settings/study">最近学习</router-link>
     </ul>
 </div>
</template>

<script type="text/javascript">
  export default {
   data() {
     return {

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
