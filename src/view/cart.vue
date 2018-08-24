<template>
 <div class="cart">
    <Mheader></Mheader>
    <h1 class="mw">确认订单</h1>
    <div class="mw content">
        <div class="sureorder-box">
            <div class="order-times ov">
                <div class="item-1 fl" style="text-aligin:center">
                    <input type="checkbox" name="allcheck">
                    <label for="" id="allcheck">全选</label>
                </div>
                <div class="item-2 fl">课程</div>
                <div class="item-3 fl">金额</div>
                <div class="item-4 fl">操作</div>
            </div>
            <div class="course-item">
              <ul>
                <li v-for="(item,index) in items" :key="index">
                  <div class="item-1 fl"> <input type="checkbox"></div>
                  <div class="item-2 fl">
                    <div class="fl course-img">
                        <img src="../assets/web.png" alt="">
                    </div>
                    <div class="fl">
                        <p class="course-name">{{item.courseneme}}</p>
                        <p class="teachers-name">{{item.teachersneme}}</p>
                        <p class="videos-times">{{item.videostimes}}</p>
                    </div>
                  </div>
                  <div class="item-3 fl">￥{{item.courseprice}}</div>
                  <div class="item-4 fl">
                      <i class="iconfont"></i>
                  </div>
                </li>
              </ul>
            </div>
            <div class="pay-box ov">
              <div class="fl payinfo">
                <p class="number">共1件课程</p> 
                <p class="amount">商品总金额：<span>￥299.99</span></p>
              </div>
            </div>
        </div>
    </div>
 </div>
</template>

<script type="text/javascript">
import Mheader from '@/components/Mheader'

  export default {
   data() {
     return {
       items:[
        {
           courseneme:'全网最热Python3入门+进阶 更快上手实际开发',
           teachersneme:'请叫我小任性',
           videostimes:'视频时长：一个小时20分',
           courseprice:333.33
        },
        {
           courseneme:'全网最热Python3入门+进阶 更快上手实际开发',
           teachersneme:'请叫我小任性',
           videostimes:'视频时长：一个小时20分',
           courseprice:333.33
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
h1{
  text-align: left;
}
i{
  margin-right: 6px;
  vertical-align: middle;
}
button{
  border: none;
  color: #fff;
  font-size: 12px;
  width: 160px;
  height: 34px;
  line-height: 34px;
  text-align: center;
  border-radius: 4px;
  cursor: pointer;
}
.content{
  background: #fff;
  box-shadow: 0 2px 8px 2px rgba(0, 0, 0, 0.1);
  padding: 20px 30px 60px 30px;
  }

.item-1{
    width: 8%;
    text-align: left;
}
.item-2{
    width: 60%;
    text-align: left;
}
.item-3{
    width: 20%;
    text-align: center;
}
.item-4{
    width: 12%;
    text-align: center;
}
  .sureorder-box{
    .order-times{
      text-align: left;
      margin-bottom: 16px;
    }
    .course-item{
      ul{
        li{
          overflow: hidden;
          margin-top: 20px;
          padding: 20px 0;
          display: flex;
          align-items: center;
          .item-2{
            text-align: left;
            font-size: 14px;
            color: #333;
            .course-img{
                margin-right: 20px;
                img{
                width: 160px;
                height: 90px;
                }
            }
            p{
              line-height: 30px;
              &.course-name{
                font-weight: bold;
                font-size: 15px;
              }
            }
          }
          .item-3{
            line-height: 90px;
            color: red;
            font-size: 16px;
          }
        }
      }
    }
    .pay-box{
        display: flex;
        width: 100%;
        align-items: center;
      .payinfo{
        width: 100%;
        margin: 20px 0 10px;
        p{
        text-align: left;
        line-height: 30px;
        }
        .amount{
          span{
            color: red;
            font-weight: bold;
            font-size: 16px;
          }
        }
      }
      }
  }
</style>
