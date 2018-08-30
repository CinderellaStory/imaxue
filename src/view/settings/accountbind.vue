<template>
 <div class="accountbind">
    <Mheader></Mheader>
     <div class="warpper-box">
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
                <li class="unbound">
                  <i class="iconfont icon-qq-copy"></i>
                  <span class="bind-style">QQ</span>
                  <span>未绑定</span>
                  <button @click="jump">绑定</button>
                </li>
                <li class="unbound">
                  <i class="iconfont icon-weixin-copy"></i>
                  <span class="bind-style">微信</span>
                  <span class="unbound-text">未绑定</span>
                  <button  @click="wechat">绑定</button>
                </li>
                <li class="bound">
                  <i class="iconfont icon-weibo"></i>
                  <span class="bind-style">微博</span>
                  <span class="already-bind">已绑定</span>
                  <button @click="weibo">解绑</button>
                </li>
              </ul>
            </div>
        </div>
    </div>
    <Dialog></Dialog>
 </div>
</template>

<script type="text/javascript">
import Mheader from '@/components/Mheader'
import Dialog from '@/components/Dialog'

  export default {
   data() {
     return {

      }
  },
  methods:{
    jump(){
      window.open('https://graph.qq.com/oauth2.0/show?which=Login&display=pc&response_type=code&client_id=100522525&redirect_uri=https%3A%2F%2Fsegmentfault.com%2Fuser%2Foauth%2Fqq&scope=get_user_info');
    },
     wechat(){
       window.open("https://open.weixin.qq.com/connect/qrconnect?appid=wxd8936345ec1df5ac&redirect_uri=https%3A%2F%2Fsegmentfault.com%2Fuser%2Foauth%2Fweixin&response_type=code&scope=snsapi_login#wechat_redirect");
     },
     weibo(){
       window.open("https://api.weibo.com/oauth2/authorize?client_id=1742025894&redirect_uri=https%3A%2F%2Fsegmentfault.com%2Fuser%2Foauth%2Fweibo&scope=follow_app_official_microblog");
     }
  },
   components: {
     Mheader,Dialog
   }
 }
</script>

<style scoped lang="less">
.mw{
    width: 1000px;
    margin: 45px auto;
}
button{
    padding: 6px 16px;
    cursor: pointer;
    display: inline-block;
    font-size: 12px;
    border-radius: 5px;
  }
.title{
  width: 20%;
  margin-right: 100px;
  font-weight: bold;
}
.bound .already-bind{
  color: red;
}
.bound button{
    background: #FF9800;
    color: #fff;
    border: 1px solid #FF9800;
}
.unbound .unbound-text{
  color: #666;
}
.unbound button{
    border: 1px solid #FF9800;
    background: #fff;
    color: #FF9800;
}
.bind-style{
  width: 40px;
  text-align: center;
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
        margin: 10px 0;
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
          font-size: 30px!important;
          color: #E51C23;
        }
        span{
          margin: 0 30px;
        }
      }
    }
  }
</style>
