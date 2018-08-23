<template>
 <div class="accountbind">
    <Mheader></Mheader>
    <div class="mw content">
         <div class="nav">
            <ul>
              <router-link tag="li" to="userinfo">基本信息</router-link>
              <router-link tag="li" to="accountbind" class="active">绑定账户</router-link>
              <router-link tag="li" to="modifypsd">修改密码</router-link>
          </ul>
        </div>
        <div class="userinfo-into">
          <ul>
            <li>
              <div class="items">
                <span class="title">密码</span>
                <button>设置密码</button>
              </div>
              <p>用于保护账号信息和登录安全</p>
            </li>
            <li>
              <div class="items">
                <span class="title">邮箱</span>
                <button>绑定邮箱</button>
              </div>
              <p>可用邮箱加密码登录，可用邮箱找回密码</p>
            </li>
            <li>
              <div class="items">
                <span class="title">手机</span>
                <button>绑定手机</button>
              </div>
              <p>可用手机号加密码登录，可通过手机号找回密码</p>
            </li>
            <li>
              <div class="items">
                <span class="title">密码</span>
                <button>设置密码</button>
              </div>
              <p>用于保护账号信息和登录安全</p>
            </li>
            <!-- <li>
              <div class="items">
                <span class="title">绑定第三方账号</span>
              </div>
              <p>用于保护账号信息和登录安全</p>
            </li> -->
          </ul>
        </div>
        <div class="bind">
          <div class="title">绑定第三方账号</div>
          <ul>
            <li>
              <i class="iconfont icon-qq-copy"></i>
              <span>QQ</span>
              <span>未绑定</span>
              <button>解绑</button>
              <!-- <button>解绑</button> -->
            </li>
            <li>
              <i class="iconfont icon-weixin-copy"></i>
              <span>微信</span>
              <span>未绑定</span>
              <button>解绑</button>
              <!-- <button>解绑</button> -->
            </li>
            <li>
              <i class="iconfont icon-weibo"></i>
              <span>微博</span>
              <span>未绑定</span>
              <button>解绑</button>
              <!-- <button>解绑</button> -->
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

.title{
  width: 20%;
  margin-right: 100px;
  font-weight: bold;
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
          // display: flex;
          // align-items: center;
            text-align: left;
          border-bottom: 1px solid #d9dde1;
          height: 90px;
          margin-top: 20px;
          padding-left: 50px;
          p{
            display: block;
            margin-top: 10px;
            color: #BBBBBB;
            font-size: 12px;
          }
          .items{
            display: block;
              button{
              border: 1px solid #FF9800;
              background: #fff;
              color: #FF9800;
              padding: 6px 16px;
              display: inline-block;
              font-size: 12px;
              border-radius: 5px;
            }
        }
      }
    }
  }
  .bind{
    text-align: left;
    padding-left: 50px;
       margin-top: 20px;
    border-bottom: 1px solid #d9dde1;
    ul{
      li{
       height: 50px;
          display: flex;
          align-items: center;
          .iconfont{
          vertical-align: middle;
        }
        .icon-weixin-copy{
          color: #259B24;
          font-size: 30px!important;
        }
        .icon-qq-copy{
          color: #1188B0;
          font-size: 30px!important;
        }
        .icon-weibo{
          font-size: 28px!important;
          color: #E51C23;
        }
        span{
          margin: 0 40px;
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
</style>
