<template>
 <div class="home">
     <Mheader></Mheader>
     <NavBar></NavBar>
    <div class="banner">
      <img src="../assets/banner03.png" alt="">
    </div>
    <div class="Course-container">
      <div class="mw ov">
        <div class="course-info fl">
          <div class="Course-list" v-for="(item,index) in items" :key="index">
            <h3>{{item.title}}</h3>
            <div class="ov">
              <div class="fl adv">
                <img src="../assets/banner_web.png" alt="">
              </div>
              <div class="fl course-item">
                <ul>
                  <li>
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
                  <li>
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
                  <li>
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
                  <li>
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
                  <li>
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
                  <li>
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
        </div>
        <div class="teacher-info fr">
          <h3>{{teachertitle}}</h3>
          <ul>
            <li v-for="(teacher,n) in teachers" :key="n">
              <div class="user-logo">
                <img src="../assets/userlogo.png" alt="">
              </div>
              <p class="username">{{teacher.name}}</p>
              <p class="job">{{teacher.job}}</p>
              <p class="teacher-intr">{{teacher.intr}}</p>
            </li>
          </ul>
        </div>
      </div>
    </div> 
 </div>
</template>

<script type="text/javascript">
import Mheader from '@/components/Mheader'
import NavBar from '@/components/NavBar'

export default {
  name: 'HelloWorld',
  data () {
    return {
      teachertitle:"讲师推荐",
      items:[
        {
          title:'新手入门',
          coursename:'Vue组件之间的通信',
          courseprice:'19.99',
          number:'1200'
        },
        {
          title:'新手入门',
          coursename:'Vue组件之间的通信',
          courseprice:'19.99',
          number:'1200'
        },
        {
          title:'新手入门',
          coursename:'Vue组件之间的通信',
          courseprice:'19.99',
          number:'1200'
        },
        {
          title:'新手入门',
          coursename:'Vue组件之间的通信',
          courseprice:'19.99',
          number:'1200'
        }
      ],
      teachers:[
        {
          name:"小任性",
          job:"Web前端工程师",
          intr:"如果你无法简洁的表达你的想法，那只说明你还不够了解它。"
        },
        {
          name:"小任性",
          job:"Web前端工程师",
          intr:"如果你无法简洁的表达你的想法，那只说明你还不够了解它。"
        },
        {
          name:"小任性",
          job:"Web前端工程师",
          intr:"如果你无法简洁的表达你的想法，那只说明你还不够了解它。"
        },
        {
          name:"小任性",
          job:"Web前端工程师",
          intr:"如果你无法简洁的表达你的想法，那只说明你还不够了解它。"
        },
        {
          name:"小任性",
          job:"Web前端工程师",
          intr:"如果你无法简洁的表达你的想法，那只说明你还不够了解它。"
        },
        {
          name:"小任性",
          job:"Web前端工程师",
          intr:"如果你无法简洁的表达你的想法，那只说明你还不够了解它。"
        },
        {
          name:"小任性",
          job:"Web前端工程师",
          intr:"如果你无法简洁的表达你的想法，那只说明你还不够了解它。"
        },
        {
          name:"小任性",
          job:"Web前端工程师",
          intr:"如果你无法简洁的表达你的想法，那只说明你还不够了解它。"
        },
        {
          name:"小任性",
          job:"Web前端工程师",
          intr:"如果你无法简洁的表达你的想法，那只说明你还不够了解它。"
        }
      ]
    }
  },
  components:{
      Mheader,NavBar
  }
}
</script>

<style scoped lang="less">
h3{
  margin: 20px 0;
}
.banner{
  overflow: hidden;
}
.adv img{
  border-radius: 20px;
}
.course-info{
  width: 80%;
}
.teacher-info{
  width: 20%;
}
.course-item{
  width: 660px;
}
.course-item ul li{
  margin:0 0 10px 20px;
  float: left;
  border-radius: 20px;
}
.course-detail{
  background: #fff;
  text-align: left;
  padding: 6px 12px;
  border-radius: 0 0 20px 20px;
}
.course-img img{
  display: block;
  border-radius: 20px 20px 0 0;
}
.course-detail p{
  font-size: 14px;
  line-height: 24px;
}
.course-detail p .price{
   color: red;
   font-size: 16px;
}

.teacher-info ul li{
  border-radius:20px; 
  background: #ECECEC;
  border: 1px solid #BBBBBB;
  position: relative;
  margin-top: 72px;
  padding: 0 18px 12px 18px;
}
.teacher-info ul li .user-logo{
    position: absolute;
    top: -30%;
    left: 30%;
}
.teacher-info ul li .user-logo img{
  border-radius: 50%;
}
.username{
      margin-top: 60px;
}
.job{
  margin-top: 5px;
}
.teacher-intr{
  font-size: 12px;
  text-align: left;
  margin-top: 10px;
}

</style>
