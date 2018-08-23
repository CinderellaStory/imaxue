<template>
 <div class="accountbind">
    <Mheader></Mheader>
    <div class="mw">
         <div class="nav">
            <ul>
                <router-link tag="li" class="active">全部</router-link>
                <router-link tag="li">已购买</router-link>
                <router-link tag="li">未支付</router-link>
                <router-link tag="li">已取消</router-link>
            </ul>
        </div>
    </div>
 </div>
</template>

<script type="text/javascript">
import Mheader from '@/components/Mheader'

  export default {
   data() {
     return {

      }
  },
   components: {
     Mheader
   }
 }
</script>

<style scoped lang="less">
.mw{
    width: 1000px;
}
.nav{
    margin: 50px 0 30px 0;
    ul{
        overflow: hidden;
        border-bottom:1px solid #BBBBBB; 
        li{
            float: left;
            width: 100px;
            cursor: pointer;
            padding-bottom: 10px;
            &.active{
                border-bottom: 2px solid red;
            }
        }
    }
}

</style>
