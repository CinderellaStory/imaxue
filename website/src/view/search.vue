<template>
 <div class="search">
     <Mheader></Mheader>
    <div class="mw ov">
        <div class="search-container">
            <p class="searchabout">为你搜索到110条相关内容</p>
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
        <div class="aside-course">
            <h3>推荐课程</h3>
            <ul>
                <li v-for="(item,index) in items" :key="index">
                    <div class="course-img">
                      <img src="../assets/web.png" alt="">
                    </div>
                    <div class="course-detail">
                      <p class="course-name">{{item.coursename}}</p>
                      <p class="course-name">{{item.username}}</p>
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
            }
        ],
        items:[
            {
            coursename:'Vue组件之间的通信',
            username:'小任性',
            courseprice:'19.99',
            number:'1200'
            },
            {
            coursename:'Vue组件之间的通信',
            username:'小任性',
            courseprice:'19.99',
            number:'1200'
            },
            {
            coursename:'Vue组件之间的通信',
            username:'小任性',
            courseprice:'19.99',
            number:'1200'
            },
            {
            coursename:'Vue组件之间的通信',
            username:'小任性',
            courseprice:'19.99',
            number:'1200'
            },
            {
            coursename:'Vue组件之间的通信',
            username:'小任性',
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
.searchabout{
    text-align: left;
    font-size: 14px;
}
.price{
    color: red;
    font-size: 16px;
    }
    .search-container{
        margin-top: 50px;
        float: left;
        width: 70%;
        ul{
            li{
                text-align: left;
                width: 740px;
                height: 140px;
                background: #fff;
                float: left;
                border-radius: 20px;
                padding: 20px;
                margin: 20px 0 20px 0;
                display: flex;
                align-items: center;
                .fl{
                    img{
                        width: 500px;
                        height: 140px;
                    }
                }
                .fr{
                    margin-left: 30px;
                    p{
                        font-size: 16px;
                        line-height: 40px;
                    }
                }
            }
        }
    }
    .aside-course{
        width: 30%;
        float: right;
        margin-top: 45px;
        ul{
            li{
                width: 310px;
                height: 100px;
                background: #fff;
                border-radius: 20px;
                overflow: hidden;
                display: flex;
                align-items: center;
                padding: 0 0 0 20px;
                margin: 20px 0 0 0;
                .course-img{
                    float: left;
                    img{
                        width: 80px;
                        height: 70px;
                        display: block;
                    }
                }
                .course-detail{
                float: left;
                text-align: left;
                padding: 6px 12px 0 20px;
                p{
                    font-size: 14px;
                    line-height: 24px;
                 }
                }
            }
        }
    }
</style>
