<template>
<div class="warp">
			<div class="box forgotPassword w">
				<div class="sign mb20">
					<div class="login-text fl">重置密码</div>
					<div class="fr return">
						<!-- <i class="iconfont icon-backward"></i> -->
						<router-link to="/login">登录</router-link>
            <b>●</b>
            <router-link to="/register">注册</router-link>
					</div>
				</div>
				<div class="container">
					<form action="" method="post">
						<div class="phone mb20">
							<input type="text"  placeholder="请输入手机号码">
						</div>
						<div class="identify mb20">
							<input type="text"  placeholder="短信验证码">
							<a class="sentcode" href="javascript:void(0);">发送验证码</a>
						</div>
						<div class="psd mb20">
							<input type="password" placeholder="请输入新密码">
						</div>
						<div class="againpwd mb20">
							<input type="password" placeholder="请确认新密码">
						</div>
						<div class="clear mb20">
							<button class="cursor btn login-btn">重置密码</button>
						</div>
					</form>
				</div>
			</div>
		</div>
</template>

<script type="text/javascript">
export default {
  data() {
    return {

    }
  },
  methods: {

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
.warp{ background: #f8f8f8; height: 100%;min-height: 750px;  }
.w{ width: 1200px; margin: 0 auto; text-align: center;}
.sentcode {
    background: #42c02e;
    height: 40px;
    width: 90px;
    position: absolute;
    top: 0;
    border-radius: 0 3px 3px 0;
    color: #fff;
    line-height: 40px;
    font-size: 12px;
    right: 0;
    text-align: center;
}
.login-btn{background: #59b0ff;  }
.login-btn:hover{ background: #1a90ff;}
.btn{    width: 100%;
    background: #59b0ff;
    border-radius: 5px;
    padding: 12px 0;
    color: #fff;
    border: 0;}
@orange: #fe7300;
@red: #ea6f5a;
@grey: #666;
@lightgrey: #c3c3c3;
@blue: #59b0ff;
.forgotPassword .psd{ position: relative; }
.forgotPassword .sentcode{ background: #2a8ddd}
.return a:hover{ color: #FE7300; border-bottom: 1px solid #FE7300; }
.return,.return a{ color: #40485b;font-size: 15px;}
.return b{ margin: 0 10px;}
.return i{margin-right: 8px;}


.warp .logo{text-align: left;padding: 80px; }
.box{ width: 340px; background: #fff; padding: 30px 30px 10px;    box-shadow: 0 0 8px rgba(0,0,0,.1);}
.sign{ height: 30px; line-height: 30px; }
.login-text{ font-size: 18px; color: #ea6f5a;font-weight: bold; }
.register-text a{ color: #FE7300; }
.container{ text-align: center; margin: 0 auto; }
.container label.text{ color: #666; width: 50px;display: inline-block; text-align: right; margin-right:10px;}
.container input[type="text"],.container input[type="password"]{outline: none; width: 96.4%; padding-left: 10px;height: 38px;border-radius: 3px;border: 1px solid #c3c3c3; }

.more-login{overflow: hidden; margin-top: 10px}
h6 span{ margin: 0 20px; color: #b5b5b5; font-size: 14px;}
h6 i{ width: 70px; height: 1px; background: #b5b5b5; vertical-align: middle;    display: inline-block;}

.more-login ul li{ float: left; margin-right: 27px;height: 50px; width: 50px;   line-height: 40px;}
.more-login ul li:last-child{ margin-right: 0;}
.more-login ul li a{ padding: 10px;    border-radius: 50%; }
.more-login ul li a i{ color: #fff; }
.weibo{ background-color: #e05244; }
.weixin{ background-color: #00bb29; }
.qq{ background-color: #498ad5; }
.other{ background-color: #CCCCCC; }
</style>
