<template>
 <div class="details">
    <Mheader></Mheader>
    <div class="details-bg">
        <p class="course-name mw">vue2.0仿京东商场实战课程</p>
        <div class="details-content">
            <div class="details-info">
                <h1>全网首发仿京东实战课程</h1>
                <h2>vue2.0最新技术开发</h2>
                <p class="video-times">
                    <span>视频时长：1个小时20分钟</span>
                    <span>参与人数：1000人</span>
                </p>
                <div class="price">￥299.99</div>
                <div class="btn">
                    <button>
                        <span>立即购买</span>
                        <i class="iconfont icon-msnui-cart"></i>
                    </button>
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

      }
  },
   components: {
     Mheader
   }
 }
</script>

<style scoped lang="less">
h1,h2{
    font-weight: normal;
    margin-bottom: 30px;
}
button{
    border: 0;
    background: red;
    height: 38px;
    line-height: 38px;
    border-radius: 20px;
    margin-top: 30px;
    width: 150px;
    color: #fff;
    cursor: pointer;
    span{
        border-right: 1px solid #c3c3c3;
        padding-right: 4px;
    }
}
 .details-bg{
     background: url(../assets/2.jpg)center top no-repeat;background-size: cover;
     height: 500px;
     color: #fff;
    .course-name{
        padding-top: 40px;
        text-align: left;
    }
        .details-content{
            width: 30%;
            margin: 0 auto;
            .details-info{
            width: 100%;
            text-align: center;
            .video-times{
                span{
                    margin-right: 50px;
                }
            }
            .price{
                color: red;
                font-weight: 540;
                font-size: 24px;
                margin-top: 30px;
            }
        }
    }
 }
</style>
