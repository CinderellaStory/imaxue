<template>
 <div class="fans">
     <Mheader></Mheader>
     <div class="mw content">
         <div class="nav">
            <ul>
                <router-link tag="li" to="follows">我的关注</router-link>
                <router-link tag="li" to="fans" class="active">我的粉丝</router-link>
                <router-link tag="li" to="collect">我的收藏</router-link>
                <router-link tag="li" to="study">最近学习</router-link>
            </ul>
        </div>
        <div class="fansinfo ov">
            <ul>
                <li v-for="(fan,index) in fans" :key="index">
                    <div class="userlogo fl"><img src="../../assets/userlogo.png" alt=""></div>
                    <div class="fansright fl">
                        <p class="username">{{fan.username}}</p>
                        <p class="job">{{fan.job}}</p>
                        <p class="detail fl">
                            <span class="fl">关注{{fan.fllows}}</span>
                            <span class="fr">粉丝{{fan.fans}}</span>
                        </p>
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
                 username:'请叫我小任性',
                 job:'web前端工程师',
                 fllows:9,
                 fans:20,
                 btn:"互相关注"
             },
             {
                 username:'请叫我小任性',
                 job:'web前端工程师',
                 fllows:9,
                 fans:20,
                 btn:"互相关注"
             },
             {
                 username:'请叫我小任性',
                 job:'web前端工程师',
                 fllows:9,
                 fans:20,
                 btn:"互相关注"
             },
             {
                 username:'请叫我小任性',
                 job:'web前端工程师',
                 fllows:9,
                 fans:20,
                 btn:"互相关注"
             },
             {
                 username:'请叫我小任性',
                 job:'web前端工程师',
                 fllows:9,
                 fans:20,
                 btn:"互相关注"
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
.fansinfo{
    ul{
        li{
            width: 320px;
            background: #DDE5EC;
            display: flex;
            padding: 16px 20px;
            align-items: center;
            overflow: hidden;
            border-radius: 10px;
            margin: 0 0 20px 22px;
            float: left;
            .userlogo{
                img{
                    border-radius: 50%;
                    border: 3px solid #fff;
                    width: 80px;
                    height: 80px;
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
                &.username{
                    font-size: 15px;
                    font-weight: bold;
                 }
                }
            }
            .fansbtn{
                text-align: right;width: 40%;
                button{
                    border: 1px solid #BBBBBB;
                    padding: 6px 12px;
                    border-radius: 4px;
                    font-size: 12px;
                    color: #666666;
                    cursor: pointer;
                    background: #fff;
                }
            }
        }
    }
}
</style>
