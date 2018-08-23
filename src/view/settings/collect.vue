<template>
 <div class="collect">
     <Mheader></Mheader>
     <div class="mw content">
         <div class="nav">
            <ul>
                <router-link tag="li" to="follows">我的关注</router-link>
                <router-link tag="li" to="fans">我的粉丝</router-link>
                <router-link tag="li" to="collect" class="active">我的收藏</router-link>
                <router-link tag="li" to="study">最近学习</router-link>
            </ul>
        </div>
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
</style>
