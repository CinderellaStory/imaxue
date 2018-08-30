<template>
 <div class="myhome">
     <Mheader></Mheader>
     <div class="myhome-header">
        <div class="mw ov">
             <div class="myhome-left fl">
                <div class="logo fl"><img src="../../assets/userlogo.png" alt=""></div>
                <div class="myhome-infot fl">
                    <p class="username">请叫我小任性</p>
                    <p class="address">
                        <i class="iconfont icon-zuihoudinggao-"></i>
                        <!-- <i class="iconfont icon-nanxing"></i> -->   
                        <!-- 男性icon -->
                        <span>广东-深圳市</span>
                        <span>Web前端工程师</span>
                    </p>
                    <p class="intr">学无止境，回头是岸。</p>
                </div>
            </div>
            <div class="myhome-right fr">
                <router-link to="follows" class="items">
                    <p class="nummber">20</p>
                    <p>关注</p>
                </router-link>
                <router-link to="fans" class="items">
                    <p class="nummber">20</p>
                    <p>粉丝</p>
                </router-link>
                <div class="items setting-btn">
                    <router-link to='userinfo'>
                        <i class="iconfont icon-msnui-conf-bold"></i>
                        <span>个人设置</span>
                    </router-link>
                </div>
            </div>
         </div>
     </div>
     <div class="mw content">
         <div class="title">最近学习</div>
        <div class="followsinfo ov">
            <ul>
                <li v-for="(fan,index) in fans" :key="index">
                    <div class="userlogo fl"><img src="../../assets/1.jpg" alt=""></div>
                    <div class="fansright fl">
                        <p class="coursename">{{fan.coursename}}</p>
                        <p class="username">
                            <span>讲师：{{fan.username}}</span>
                            <button>关注</button>
                        </p>
                        <p class="videotime">
                            <span class="fl">视频时长：{{fan.videotime}}</span>
                            <span class="fr">已观看：{{fan.viewed}}</span>
                        </p>
                        <p class="collectnumber fl">收藏人数：{{fan.collectnumber}}人</p>
                    </div>
                    <div class="fansbtn fr">
                        <button>{{fan.btn}}</button>
                    </div>
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
         fans:[
             {
                 coursename:'Vue2.0新手构建单页面应用',
                 username:'请叫我小任性',
                 videotime:'1小时43分钟',
                 viewed:'20分钟',
                 collectnumber:9,
                 btn:"继续学习"
             },
             {
                 coursename:'Vue2.0新手构建单页面应用',
                 username:'请叫我小任性',
                 videotime:'1小时43分钟',
                 viewed:'20分钟',
                 collectnumber:9,
                 btn:"继续学习"
             },
             {
                 coursename:'Vue2.0新手构建单页面应用',
                 username:'请叫我小任性',
                 videotime:'1小时43分钟',
                 viewed:'20分钟',
                 collectnumber:9,
                 btn:"继续学习"
             },
             {
                 coursename:'Vue2.0新手构建单页面应用',
                 username:'请叫我小任性',
                 videotime:'1小时43分钟',
                 viewed:'20分钟',
                 collectnumber:9,
                 btn:"继续学习"
             },
             {
                 coursename:'Vue2.0新手构建单页面应用',
                 username:'请叫我小任性',
                 videotime:'1小时43分钟',
                 viewed:'20分钟',
                 collectnumber:9,
                 btn:"继续学习"
             }
         ]
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
.content{
  background: #fff;
  box-shadow: 0 2px 8px 2px rgba(0, 0, 0, 0.1);
  padding: 20px 30px 60px 30px;
  }
.myhome{
    .myhome-header{
        color: #fff;
        background: url(../../assets/temp1.png)center top no-repeat;background-size: cover;
        height: 150px;
        width: 100%;
        display: flex;
        align-items: center;
        .myhome-left{
        .logo{
            margin-right: 30px;
            img{
                border: 3px solid #fff;
                border-radius: 50%;
                width: 90px;
                height: 90px;
            }
            }
            p{
                line-height: 32px;
                text-align: left;
            }
            span{
                margin-left: 10px;
            }
        }
        .myhome-right{
            width: 34%;
            height: 90px;
            display: flex;
            align-items: center;
            .items{
                float: left;
                margin-left: 50px;
                p{
                    line-height: 26px;
                    &.nummber{
                        font-weight: bold;
                        font-size: 20px;
                    }
                }
            }
            .setting-btn{
                border: 1px solid #fff;
                width: 120px;
                height: 34px;
                line-height: 34px;
                border-radius: 20px;
                .icon-msnui-conf-bold{
                   margin-left: -5px;
                   margin-right: 5px;
                }
            }
        }
    }

.title{
    color: #101010;
    text-align: left;
    font-size: 16px;
    border-bottom:1px solid #BBBBBB; 
    padding-bottom: 20px;
}

.followsinfo{
    ul{
        li{
            width: 1000px;
            display: flex;
            padding: 16px 20px;
            align-items: center;
            overflow: hidden;
            border-bottom:1px solid #BBBBBB; 
            margin: 0 0 20px 22px;
            float: left;
            .userlogo{
                img{
                    width: 240px;
                    height: 140px;
                }
            }
            .fansright{
                text-align: left;
                margin-left: 20px;
                width: 40%;
                p{
                     width: 100%;
                     line-height: 30px;
                &.detail{
                    color: #666;
                }
                &.coursename{
                    font-size: 15px;
                    font-weight: bold;
                 }
                 &.username{
                  button{
                         margin-left: 170px;
                        border: 1px solid #BBBBBB;
                        padding: 4px 14px;
                        border-radius: 4px;
                        font-size: 12px;
                        color: #666666;
                        cursor: pointer;
                        background: #fff;
                     }
                 }
                }
            }
            .fansbtn{
                text-align: right;
                width: 28%;
                button{
                    border: 1px solid red;
                    padding: 6px 12px;
                    font-size: 12px;
                    color: red;
                    background: #fff;
                    cursor: pointer;
                }
            }
        }
    }
}
}

</style>
