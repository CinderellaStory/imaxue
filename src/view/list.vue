<template>
 <div class="list">
     <Mheader></Mheader>
     <div class="mw">
        <div class="list-container fl">
            <h3>Vue2.0相关课程</h3>
            <ul class="ov">
                <router-link tag="li" v-for="(list,index) in lists" :key="index" to="to">
                    <div class="fl">
                        <img src="../assets/web.png" alt="">
                    </div>
                    <div class="fr">
                        <p>{{list.name}}</p>
                        <p>{{list.user}}</p>
                        <p class="ov">
                            <span class="price fl">￥{{list.price}}</span>
                            <span class="fr">{{list.number}}人参与</span>
                        </p>
                    </div>
                </router-link>
            </ul>
        </div>
        <div class="aside-course fl">
            <h3>推荐课程</h3>
            <ul>
                <li v-for="(item,index) in items" :key="index">
                    <div class="course-img">
                      <img src="../assets/web.png" alt="">
                    </div>
                    <div class="course-detail">
                      <p class="course-name">{{item.coursename}}</p>
                      <p class="ov">
                        <span class="fl price">￥{{item.courseprice}}</span>
                        <span class="fr">{{item.number}}人参与</span>
                      </p>
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
        lists:[
            {
            user:'小任性',
            name:'Vue组件之间的通信',
            price:'19.99',
            number:'1200'
            },
            {
            user:'小任性',
            name:'Vue组件之间的通信',
            price:'19.99',
            number:'1200'
            },
            {
            user:'小任性',
            name:'Vue组件之间的通信',
            price:'19.99',
            number:'1200'
            },
           {
            user:'小任性',
            name:'Vue组件之间的通信',
            price:'19.99',
            number:'1200'
            },
           {
            user:'小任性',
            name:'Vue组件之间的通信',
            price:'19.99',
            number:'1200'
            },
           {
            user:'小任性',
            name:'Vue组件之间的通信',
            price:'19.99',
            number:'1200'
            },
           {
            user:'小任性',
            name:'Vue组件之间的通信',
            price:'19.99',
            number:'1200'
            },
           {
            user:'小任性',
            name:'Vue组件之间的通信',
            price:'19.99',
            number:'1200'
            }
        ],
        items:[
            {
            coursename:'Vue组件之间的通信',
            courseprice:'19.99',
            number:'1200'
            },
            {
            coursename:'Vue组件之间的通信',
            courseprice:'19.99',
            number:'1200'
            },
            {
            coursename:'Vue组件之间的通信',
            courseprice:'19.99',
            number:'1200'
            },
            {
            coursename:'Vue组件之间的通信',
            courseprice:'19.99',
            number:'1200'
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
.price{
        color: red;
        font-size: 16px;
        }
    .list-container{
        margin-top: 50px;
        width: 80%;
        ul{
            li{
                text-align: left;
                width: 360px;
                height: 120px;
                background: #fff;
                float: left;
                border-radius: 20px;
                padding: 20px;
                margin: 20px;
                display: flex;
                align-items: center;
                .fl{
                    img{
                        width: 180px;
                        height: 120px;
                    }
                }
                .fr{
                    margin-left: 20px;
                    p{
                        font-size: 14px;
                        line-height: 24px;
                    }
                }
            }
        }
    }
    .aside-course{
        width: 20%;
        margin-top: 40px;
        ul{
            li{
                 width: 200px;
                margin:20px 0 0 20px;
                border-radius: 20px;
                .course-img{
                    img{
                        width: 200px;
                        height: 120px;
                        display: block;
                        border-radius: 20px 20px 0 0;
                    }
                }
                .course-detail{
                background: #fff;
                text-align: left;
                padding: 6px 12px;
                border-radius: 0 0 20px 20px;
                p{
                    font-size: 14px;
                    line-height: 24px;
                 }
                }
            }
        }
    }
</style>
