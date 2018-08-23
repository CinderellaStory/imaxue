<template>
 <div class="order">
     <Mheader></Mheader>
     <div class="mw">
         <div class="nav">
            <ul>
                <router-link tag="li" class="active" to="">全部</router-link>
                <router-link tag="li" to="">已购买</router-link>
                <router-link tag="li" to="">未支付</router-link>
                <router-link tag="li" to="">已取消</router-link>
            </ul>
        </div>
        <div class="followsinfo">
            <ul>
                <li v-for="(fan,index) in fans" :key="index">
                    <p class="times ov">
                        <span class="fl">购买时间：{{fan.times}}</span>
                        <span class="fr del">删除</span>
                    </p>
                    <div class="orderinfo">
                        <div class="userlogo fl"><img src="../../assets/1.jpg" alt=""></div>
                        <div class="fansright fl">
                            <p class="coursename">{{fan.coursename}}</p>
                            <p class="username">讲师：{{fan.username}}</p>
                            <p class="videotime">视频时长：{{fan.videotime}}</p>
                        </div>
                        <div class="price fl">￥{{fan.price}}</div>
                        <div class="fansbtn fr">
                            <button>{{fan.btn}}</button>
                            <p class="cancelbtn">{{fan.cancelbtn}}</p>
                        </div>
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
                 times:"2018-08-03",
                 coursename:'Vue2.0新手构建单页面应用',
                 username:'请叫我小任性',
                 videotime:'1小时43分钟',
                 price:19.99,
                 btn:"立即购买",
                 cancelbtn:"取消订单"
             },
             {
                 times:"2018-08-03",
                 coursename:'Vue2.0新手构建单页面应用',
                 username:'请叫我小任性',
                 videotime:'1小时43分钟',
                 price:19.99,
                 btn:"立即购买",
                 cancelbtn:"取消订单"
             },
             {
                 times:"2018-08-03",
                 coursename:'Vue2.0新手构建单页面应用',
                 username:'请叫我小任性',
                 videotime:'1小时43分钟',
                 price:19.99,
                 btn:"立即购买",
                 cancelbtn:"取消订单"
             },
             {
                 times:"2018-08-03",
                 coursename:'Vue2.0新手构建单页面应用',
                 username:'请叫我小任性',
                 videotime:'1小时43分钟',
                 price:19.99,
                 btn:"立即购买",
                 cancelbtn:"取消订单"
             },
             {
                 times:"2018-08-03",
                 coursename:'Vue2.0新手构建单页面应用',
                 username:'请叫我小任性',
                 videotime:'1小时43分钟',
                 price:19.99,
                 btn:"立即购买",
                 cancelbtn:"取消订单"
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
}
.nav{
    margin: 50px 0 30px 0;
    ul{
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
            box-shadow: 0 2px 8px 2px rgba(0,0,0,.1);
           margin-bottom: 20px;
            padding: 20px;
            overflow: hidden;
            .times{
                 width: 100%;
                 text-align: left;
                 margin-bottom: 20px;
                border-bottom:1px solid #BBBBBB;
                padding-bottom: 10px; 
                .del{
                    font-size: 12px;
                    cursor: pointer;
                    &:hover{
                        color: red;
                    }
                }
            }
            .orderinfo{
                width: 100%; 
                display: flex;
                align-items: center;
                height: 90px;
                .userlogo{
                    img{
                        width: 160px;
                        height: 90px;
                    }
                }
                .fansright{
                    text-align: left;
                    margin-left: 20px;
                    border-right: 1px solid #d9dde1;
                    width: 40%;
                    p{
                        width: 100%;
                        line-height: 30px;
                    &.coursename{
                        font-size: 15px;
                        font-weight: bold;
                    }
                    }
                }
                .price{
                    text-align: center;
                    color: red;
                    width: 40%;
                    font-size: 16px;
                }
                .fansbtn{
                    border-left: 1px solid #d9dde1;
                    text-align: center;
                    width: 40%;
                    button{
                        border: 1px solid red;
                        padding: 8px 22px;
                        font-size: 12px;
                        color: #fff;
                        background: red;
                        border-radius: 20px;
                        cursor: pointer;
                    }
                    p{
                        margin-top: 10px;
                        color: #93999f;
                        cursor: pointer;
                        font-size: 12px;
                    }
                }
            }
        }
    }
}
</style>
