<template>
 <div class="accountbind">
    <Mheader></Mheader>
    <div class="mw content">
         <div class="nav">
            <ul>
              <router-link tag="li" to="userinfo">基本信息</router-link>
              <router-link tag="li" to="accountbind">绑定账户</router-link>
              <router-link tag="li" to="modifypsd" class="active">修改密码</router-link>
          </ul>
        </div>
        <div class="modify">
            <ul>
                <li>
                    <label for="">旧密码</label>
                    <input type="text" placeholder="请输入旧密码">
                </li>
                <li>
                    <label for="">新密码</label>
                    <input type="text" placeholder="请输入新密码">
                </li>
                <li>
                    <label for="">确认密码</label>
                    <input type="text" placeholder="请确认密码">
                </li>
            </ul>
        </div>
        <button>提交</button>
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

.modify{
    margin-top: 45px;
    ul{
        li{
            margin-bottom: 30px;
            label{
                width: 100px;
                text-align: right;
                display: inline-block;
                margin-right: 10px;
            }
            input{
                width: 400px;
                border: 1px solid #BBBBBB;
                padding-left: 15px;
                height: 32px;
            }
        }
    }
}
button{
    padding: 8px 50px;
    border: 0;
    border-radius: 20px;
    background: #FF9800;
    color: #fff;
    font-size:14px;
}
</style>
