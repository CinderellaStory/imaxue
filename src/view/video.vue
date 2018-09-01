<template>
 <div class="video">
    <Mheader></Mheader>
    <div class="warpper warpper-box">   
        <div class="ov">
            <div class="video-warpper">
                <div class="video-box fl">
                    <video width="100%" height="100%" controls="controls">
                        <source src="../assets/1.mp4" type="video/mp4">
                    </video>
                    <div class="video-info ov">
                        <div class="fl">
                            <p class="teachers-name">请叫我小任性</p>
                            <p class="course-name">Vue2.0新手构建单页面应用</p>
                        </div>
                        <div class="fr ov">
                            <span>
                                1234人观看
                            </span>
                            <span class="cursor collect" :class="{active:isActive}" @click="collect">
                                <i class="iconfont icon-xingzhuanggongnengtubiao-"></i>{{message}}
                            </span>
                        </div>
                    </div>
                    <div class="comment">
                        <div class="comment-area">
                            <img src="../assets/userlogo.png" alt="">
                            <textarea name="" id="" cols="30" rows="10" placeholder="说说你的看法~"></textarea>
                        </div>
                        <div class="comment-box ov">
                            <ul>
                                <li v-for="(comment,n) in comments" :key="n">
                                    <div class="commentator-img fl">
                                        <img src="../assets/userlogo.png" alt="">
                                    </div>
                                    <div class="fl comment-item">
                                        <p class="commentator">{{comment.commentator}}</p>
                                        <p class="comment-content">{{comment.content}}</p>
                                        <p>
                                            <span><i class="iconfont icon-dianzan"></i>{{comment.like}}人</span>
                                            <span><i class="iconfont icon-yanjing-shi"></i>{{comment.watch}}人</span>
                                            <span><i class="iconfont icon-pinglun"></i>{{comment.number}}人</span>
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="checkbtn">
                            <button>查看全部</button>
                        </div>
                    </div>
                </div>
                <div class="teachers-box fl">
                    <div class="title">讲师课程</div>
                    <ul>
                        <li v-for="(item,index) in items" :key="index">
                            <div class="courseimg fl">
                                <img src="../assets/web.png" alt="">
                            </div>
                            <div class="course-detail fl">
                                <p class="course-name">{{item.coursename}}</p>
                                <p class="teachersname">{{item.teachersname}}</p>
                                <p class="others">
                                    <span class="fl">￥{{item.price}}</span>
                                    <span class="fr">{{item.number}}人参与</span>
                                </p>
                            </div>
                        </li>
                    </ul>
                    <div class="title">相关课程</div>
                    <ul>
                        <li v-for="(item,index) in items" :key="index">
                            <div class="courseimg fl">
                                <img src="../assets/web.png" alt="">
                            </div>
                            <div class="course-detail fl">
                                <p class="course-name">{{item.coursename}}</p>
                                <p class="teachersname">{{item.teachersname}}</p>
                                <p class="others">
                                    <span class="fl">￥{{item.price}}</span>
                                    <span class="fr">{{item.number}}人参与</span>
                                </p>
                            </div>
                        </li>
                    </ul>
                    <div class="title">推荐课程</div>
                    <ul>
                        <li v-for="(item,index) in items" :key="index">
                            <div class="courseimg fl">
                                <img src="../assets/web.png" alt="">
                            </div>
                            <div class="course-detail fl">
                                <p class="course-name">{{item.coursename}}</p>
                                <p class="teachersname">{{item.teachersname}}</p>
                                <p class="others">
                                    <span class="fl">￥{{item.price}}</span>
                                    <span class="fr">{{item.number}}人参与</span>
                                </p>
                            </div>
                        </li>
                    </ul>
                    <button>查看更多</button>
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
         isActive:false,
         message:"收藏",
         items:[
            {
                coursename:'Vue2.0仿京东商场实战课程',
                teachersname:'小任性',
                price:20.99,
                number:4156
            },
            {
                coursename:'Vue2.0仿京东商场实战课程',
                teachersname:'小任性',
                price:20.99,
                number:4156
            },
            {
                coursename:'Vue2.0仿京东商场实战课程',
                teachersname:'小任性',
                price:20.99,
                number:4156
            },
            {
                coursename:'Vue2.0仿京东商场实战课程',
                teachersname:'小任性',
                price:20.99,
                number:4156
            }
         ],
         comments:[
             {
                commentator:'评论者',
                content:"这里最多不能超过两行，超过两行就隐藏，显示省略号这里最多不能超过两行，超过两行就隐藏，显示省略号这里最多不能超过两行，超过两行就隐藏，显示省略号这里最多不能超过两行，超过两行就隐藏，显示省略号这里最多不能超过两行，超过两行就隐藏，显示省略号这里最多不能超过两行，超过两行就隐藏，显示省略号",
                like:2344,
                watch:1213,
                number:3223
             },
             {
                commentator:'Anne',
                content:"这里最多不能超过两行，超过两行就隐藏，显示省略号这里最多不能超过两行，超过两行就隐藏，显示省略号这里最多不能超过两行，超过两行就隐藏，显示省略号这里最多不能超过两行，超过两行就隐藏，显示省略号这里最多不能超过两行，超过两行就隐藏，显示省略号这里最多不能超过两行，超过两行就隐藏，显示省略号",
                like:111,
                watch:3223,
                number:3232323
             },
             {
                commentator:'Anne',
                content:"这里最多不能超过两行，超过两行就隐藏，显示省略号这里最多不能超过两行，超过两行就隐藏，显示省略号这里最多不能超过两行，超过两行就隐藏，显示省略号这里最多不能超过两行，超过两行就隐藏，显示省略号这里最多不能超过两行，超过两行就隐藏，显示省略号这里最多不能超过两行，超过两行就隐藏，显示省略号",
                like:111,
                watch:3223,
                number:3232323
             },
             {
                commentator:'Anne',
                content:"这里最多不能超过两行，超过两行就隐藏，显示省略号这里最多不能超过两行，超过两行就隐藏，显示省略号这里最多不能超过两行，超过两行就隐藏，显示省略号这里最多不能超过两行，超过两行就隐藏，显示省略号这里最多不能超过两行，超过两行就隐藏，显示省略号这里最多不能超过两行，超过两行就隐藏，显示省略号",
                like:111,
                watch:3223,
                number:3232323
             }
         ]
      }
  },
  methods:{
      collect(){
        if(this.message=="收藏"){
            this.message="取消";
            this.isActive=true;
        }else{
            this.message="收藏"
            this.isActive=false;
        }
      }
  },
   components: {
     Mheader
   }
 }
</script>

<style scoped lang="less">
.warpper{
    width: 100%;
}
.iconfont{
    vertical-align: middle;
    margin-right: 4px;
}
.active{
    color: red;
}
.video-warpper{
    width: 90%;
    margin: 20px auto;
    .video-box{
        width: 76%;
        .video-info{
            text-align: left;
            height: 120px;
            width: 100%;
            align-items: center;
            display: flex;
            box-shadow: 0 2px 8px 2px rgba(0, 0, 0, 0.1);
            .fl{
                width: 80%;
                padding-left: 40px;
                p{
                    line-height: 30px;
                    &.teachers-name{
                        font-weight: bold;
                        font-size: 15px;
                    }
                }
            }
            .fr{
                width: 156px;
                .collect{
                   padding-left: 30px;
                }
            }
        }
        .comment{
            margin-bottom: 100px;
            border: 1px solid #BBBBBB;
            background: #fff;
            margin-top: 20px;
            .comment-area{
                border: 1px solid #BBBBBB;
                margin: 24px 45px;
                text-align: left;
                background: #E6E6E6;
                border-radius: 10px;
                padding: 20px;
                align-items: center;
                display: flex;
                img{
                    width: 70px;
                    // vertical-align: middle;
                    height: 70px;
                    border-radius: 100%;
                    border: 3px solid #fff;
                }
                textarea{
                    height: 80px;
                    resize:none;
                    width: 90%;
                    color: #333;
                    margin: 12px 12px 12px 20px;
                    outline: none;
                    padding: 10px;
                    border-radius: 10px;
                    border: 1px solid #bbb;
                }
            }
            .comment-box{
                padding: 24px 45px;
                align-items: center;
                display: flex;
                ul{
                    li{
                       border-bottom: 1px solid #e1e1e1;
                       overflow: hidden;
                       padding-bottom: 14px;
                       margin-bottom:20px; 
                        .commentator-img{
                            img{
                                width: 60px;
                                vertical-align: middle;
                                height: 60px;
                                border-radius: 100%;
                                border: 3px solid #fff;
                            }
                        }
                        .comment-item{
                            text-align: left;
                            margin-left: 12px;
                            width: 90%;
                            p{
                                line-height: 26px;
                                span{
                                    margin-right: 20px;
                                    color: #c3c3c3;
                                }
                                &.commentator{
                                    font-weight: bold;
                                    font-size: 15px;
                                }
                                &.comment-content{
                                    margin-bottom: 10px;
                                    font-size: 12px;
                                   display:-webkit-box; //将对象作为弹性伸缩盒子模型显示。
                                   overflow: hidden;
                                   line-height: 22px;
                                    -webkit-box-orient:vertical; //从上到下垂直排列子元素（设置伸缩盒子的子元素排列方式）
                                    -webkit-line-clamp:2; //这个属性不是css的规范属性，需要组合上面两个属性，表示显示的行数。
                                }
                            }
                        }
                    }
                }
            }
            .checkbtn{
                margin-bottom: 30px;
                button{
                    border: 0;
                    background: 0;
                    color: #568587;
                }
            }
        }
    }
    .teachers-box{
        width: 20%;
        margin-left: 30px;
        // background: #fff;
        // border: 1px solid #BBBBBB;
        .title{
            text-align: left;
            margin: 10px auto 10px;
            width: 100%;
            font-weight: bold;
            font-size: 15px;
            border-bottom: 1px solid #BBBBBB;
            padding-bottom: 10px;
        }
        ul{
            padding: 10px 14px 0;
            li{
                overflow: hidden;
                padding: 0 0 10px 0;
                align-items: center;
                display: flex;
                .courseimg{
                    padding-right: 14px;
                    img{
                        width: 120px;
                        height:78.5px; 
                    }
                }
                .course-detail{
                    text-align: left;
                    p{
                        line-height: 24px;
                        &.course-name{
                            font-weight: bold;
                        }
                        &.others{
                            .fl{
                                color: red;
                            }
                        }
                    }
                }
            }
        }
        button{
            background: #DFDFDF;
            color: #666;
            font-size: 12px;
            cursor: pointer;
            text-align: center;
            width: 92%;
            border: 0;
            height: 36px;
            line-height: 36px;
        }
    }
}
</style>
