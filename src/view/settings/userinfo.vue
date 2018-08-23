<template>
 <div class="userinfo">
    <Mheader></Mheader>
    <div class="mw content">
      <div class="nav">
          <ul>
              <router-link tag="li" to="userinfo" class="active">基本信息</router-link>
              <router-link tag="li" to="accountbind">绑定账户</router-link>
              <router-link tag="li" to="modifypsd">修改密码</router-link>
          </ul>
      </div>
      <div class="userinfo-into">
        <ul>
          <li class="items">
            <span class="fl title">头像</span>
            <div class="avatar fl">
              <img src="../../assets/userlogo.png" alt="">
            </div>
              <div class="avatar_info fl">
                <p>支持 jpg、png 格式大小 5M 以内的图片</p>
                <button>点击上传</button>
              </div>
          </li>
          <li>
            <span class="title">昵称</span>
            <div class="info">请叫我小任性</div>
          </li>
          <li>
            <span class="title">性别</span>
            <div class="info">女</div>
          </li>
          <li>
            <span class="title">城市</span>
            <div class="info">广东</div>
          </li>
          <li>
            <span class="title">职位</span>
            <div class="info">Web前端开发</div>
          </li>
          <li>
            <span class="title">个性签名</span>
            <div class="info">学无止境，回头是岸。</div>
          </li>
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
    margin: 45px auto;
}
.nav{
    margin: 10px 0 0 0;
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

.content{
  background: #fff;
  box-shadow: 0 2px 8px 2px rgba(0, 0, 0, 0.1);
  padding: 20px 30px 60px 30px;
  }
  .userinfo-into{
    ul{
      li{
          display: flex;
          align-items: center;
          border-bottom: 1px solid #d9dde1;
          overflow: hidden;
          height: 90px;
          &.items{
            height: 150px;
          }
        .title{
          width: 20%;
          text-align: center;
          font-weight: bold;
        }
        .avatar{
          width: 20%;
          text-align: center;
           img{
              border-radius: 100%;
            }
          }
          .avatar_info{
            text-align: left;
            p{
              line-height: 30px;
              font-size: 12px;
              color: #BBBBBB;
            }
            button{
              background: #FF9800;
              border: none;
              color: #fff;
              padding: 6px 16px;
              font-size: 12px;
              border-radius: 5px;
            }
        }
      }
    }
  }
</style>
