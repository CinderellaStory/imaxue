<template>
    <div class="registercontent mw">
        <div class="sign mb20 ov">
            <div class="fl text-one">注册</div>
            <div class="fr text-two">已有账户？<router-link to="/login">登录</router-link></div>
        </div>
        <form action="" method="">
            <div class="content" :model="RegisterForm">
                <div class="group">
                    <input type="text" placeholder="请输入用户名" v-model="RegisterForm.username">
                    <span class="text" v-bind:class="{unametext:isUNameText}">用户名不能为空</span>
                </div>
                <div class="group">
                    <input type="text" placeholder="请输入手机号码或邮箱" v-model="RegisterForm.phonenumber">
                    <span class="text" v-bind:class="{numbertext:isNumberText}">手机号码或邮箱不能为空</span>
                </div>
                <div class="group">
                    <input type="password" placeholder="请输入密码" v-model="RegisterForm.password">
                    <span class="text" v-bind:class="{passtext:isPassText}">密码不能为空</span>
                </div>
                <div class="group">
                    <input type="password" placeholder="请确认密码" v-model="RegisterForm.password">
                </div>
                <div class="group identify">
                    <input type="text" name="" id="" value="" placeholder="短信验证码" />
					<a class="sentcode" href="javascript:void(0);">发送验证码</a>
                </div>
                <div class="group ov">
                        <input type="checkbox" name="remember" id="remember" checked class="vm">
                        <label for="remember">已阅读并同意</label>
                        <router-link to="" class="usererms">使用条款</router-link>
                </div>
                <div class="group">
                    <button class="btn registerbtn" @click="handleRegister('RegisterForm')">注册</button>
                </div>
                <div class="group">
                    <h6>
                        <i></i>
                        <span>其他方式注册</span>
                        <i></i>
                    </h6>
                </div>
                <div class="group"> 
                     <ul>
                         <li><i class="iconfont icon-qq-copy"></i></li>
                         <li><i class="iconfont icon-weixin-copy"></i></li>
                         <li><i class="iconfont icon-weibo"></i></li>
                     </ul>
                </div>
             </div>
        </form>
        <div class="tooltip" v-bind:class="{active:isActive}">
            <span>请输入密码长度为6~16，且必须输入数字和字母（至少一位）</span>
        </div>
        <div class="tooltip" v-bind:class="{Number:isNumber}">
            <span>请输入正确的手机号码或邮箱</span>
        </div>
        <div class="tooltip" v-bind:class="{UserName:isUserName}">
            <span>请输入用户名必须2-10个字符</span>
        </div>
    </div>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
      isActive: false, //提示输入密码必须为6位
      isPassText: false, //输入密码不能为空
      isUserName:false,//输入用户名不能为空
      isUNameText:false,//提示用户名必须2-10个字符
      isNumber: false, //提示输入手机号码或邮箱
      isNumberText: false, //手机号码或邮箱不能为空
      RegisterForm: {
        userName: "",
        password: "",
        phonenumber:""
      }
    };
  },
  methods: {
    handleRegister(formName) {
      var name = this.RegisterForm.userName;
      var pass = this.RegisterForm.password;
      var regexpPsd = /(?=^.*?\d)(?=^.*?[a-zA-Z])^[0-9a-zA-Z]{6,16}$/; //密码长度为6~16，且必须输入数字和字母（至少一位）
      var regexpNumber = /^[1][3,4,5,7,8][0-9]{9}$/; //手机号正则
      var regexpEmil = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/; //邮箱正则
      var pwd = pass.match(regexpPsd);
      var number = name.match(regexpNumber);
      var emil = name.match(regexpEmil);

      if (name == "") {
        // console.log("手机号码邮箱不能为空");
        this.isNumberText = true;
        this.isNumber = false;
        return false;
      } else if (name.indexOf("@") > -1) {
        if (emil == null) {
          // console.log("请输入正确的邮箱");
          this.isNumber = true;
          this.isNumberText = false;
          return false;
        } else {
          if (pass == "") {
            this.isPassText = true;
            this.isNumberText = false;
            this.isNumber = false;
            // console.log("密码不能为空");
            return false;
          } else if (pwd == null) {
            this.isActive = true;
            this.isPassText = false;
            this.isNumberText = false;
            this.isNumber = false;
            // console.log("密码必须为6伟");
            return false;
          } else {
            // console.log("邮箱验证成功");
            this.isActive = false;
            this.isPassText = false;
            this.isNumberText = false;
            this.isNumber = false;
            alert("恭喜邮箱验证成功");
            console.log("邮箱为：" + emil + "密码为：" + pwd);
            this.$router.push({ path: "/home" });
          }
        }
      } else {
        if (number == null) {
          // console.log("请输入正确的手机号码");
          this.isNumber = true;
          this.isNumberText = false;
          this.isPassText = true;
          return false;
        } else {
          if (pass == "") {
            // console.log("密码不能为空");
            this.isPassText = true;
            this.isNumberText = false;
            this.isNumber = false;
            return false;
          } else if (pwd == null) {
            this.isActive = true;
            this.isPassText = false;
            this.isNumberText = false;
            this.isNumber = false;
            // console.log("密码必须为6伟");
            return false;
          } else {
            // console.log("手机号码验证成功");
            this.isActive = false;
            this.isPassText = false;
            this.isNumberText = false;
            this.isNumber = false;
            alert("恭喜手机号码验证成功");
            console.log("邮箱为：" + number + "密码为：" + pwd);
            this.$router.push({ path: "/home" });
          }
        }
      }
    }
  }
};
</script>

<style scoped lang="less">
.mr10 {
  margin-right: 10px;
}
.mb20 {
  margin-bottom: 20px;
}
.icont-font{
  font-size: 20px;
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
  
.identify {
  position: relative;
}

.sentcode {
    background: #42c02e;
    height: 42px;
    width: 90px;
    position: absolute;
    top: 0;
    border-radius: 0 3px 3px 0;
    color: #fff;
    line-height: 42px;
    right: 0;
    text-align: center;
    font-size: 12px;
}

@orange: #fe7300;
@red: #ea6f5a;
@grey: #666;
@lightgrey: #c3c3c3;
@blue: #59b0ff;
.registercontent {
  width: 340px;
  margin-bottom: 60px;
  position: relative;
  background: #fff;
  padding: 30px 30px 10px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  .sign {
    .text-one {
      color: @red;
      font-weight: bold;
      font-size: 18px;
    }
    .text-two {
      cursor: pointer;
      a{
          color: @orange;
      }
    }
  }
  .content {
    .group {
      text-align: left;
      margin-bottom: 20px;
      display: block;
      input[type="text"] {
        outline: none;
        width: 96.4%;
        padding-left: 10px;
        height: 40px;
        border-radius: 3px;
        border: 1px solid #c3c3c3;
        &:focus {
          border: 1px solid @orange;
        }
      }
      .text {
        color: red;
        display: none;
        margin-top: 10px;
      }
      .passtext,.UserName
      .numbertext {
        display: block;
      }
      input[type="password"] {
        outline: none;
        width: 96.4%;
        padding-left: 10px;
        height: 40px;
        border-radius: 3px;
        border: 1px solid #c3c3c3;
        &:focus {
          border: 1px solid @orange;
        }
      }
      .usererms{
          text-decoration: underline;
      }
      .registerbtn {
        width: 100%;
        background: @blue;
        border-radius: 5px;
        padding: 12px 0;
        color: #fff;
        border: 0;
      }
      h6 {
        span {
          margin: 0 20px;
          color: #b5b5b5;
          font-size: 14px;
        }
        i {
          width: 30%;
          height: 1px;
          background: #b5b5b5;
          vertical-align: middle;
          display: inline-block;
        }
      }
      ul {
        li {
         display: inline-block;
         margin: 0 36px;
        }
      }
    }
  }
  .tooltip {
    border: 1px solid #efefef;
    box-shadow: 1px 1px 1px #efefef;
    position: absolute;
    display: none;
    padding: 10px;
    background: #fff;
    border-radius: 4px;
    width: 196px;
    left: 400px;
  }
  .active {
    display: block;
    top: 124px;
  }
  .Number {
    display: block;
    top: 70px;
  }
}
</style>
