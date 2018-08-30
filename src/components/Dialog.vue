<template>
 <div class="dialog" v-show="show">
    <div class="dialog_bg"></div>
    <div class="dialog_content">
        <div class="title">{{title}}<i class="iconfont icon-delete" @click="CloseDialog"></i></div>
        <h2 class="content" v-html="content"></h2>
        <!-- <div class="items">
            <label for="">手机号码：</label>
            <input type="text" placeholder="请输入你的手机号码">
            <button>发送验证码</button>
        </div>
        <div class="items">
            <label for="">短信验证码：</label>
            <input type="text" placeholder="请输入手机验证码">
        </div> -->
        <div class="btn">
            <button v-if="type != 'confirm'" class="DelBtn" @click="DelBtn">{{DeleteText}}</button>
            <button v-if="type == 'danger'" class="CancelBtn" @click="CancelBtn">{{cancelText}}</button>
        </div>
    </div>
 </div>
</template>

<script type="text/javascript">
  export default {
   data() {
        return{
             show:true
        }
  },
  props:{
      value:{},
      content:{
          type:String,
          default:''
      },
      type:{
        type: String,
        default: 'default'
    },
      title:{
          type:String,
          default:''
      },
      DeleteText:{
          type:String,
          default:'删除'
      },
      cancelText:{
          type:String,
          default:'取消'
      }
  },
  mounted(){
      this.show = this.value;
  },
  watch:{
      value(newVal,oldVal){
          this.show = newVal;
      },
      show(val){
          this.$emit('input',val);
      }
  },
  methods:{
      CloseDialog(){
          this.show = false;
      },
      CancelBtn(){
          this.$emit('cancel');
          this.CloseDialog();
           console.log("取消")
      },
      DelBtn(){
          this.$emit('danger');
          this.CloseDialog();
          console.log("删除")
      },
        confirmBtn(){
            this.$emit('confirm');
            this.CloseDialog();
        }
  },
   components: {

   }
 }
</script>

<style scoped lang="less">
.content{
    text-align: center;
    margin-top: 30px;
}
.icon-delete{
    position: absolute;
    right: 10px;
    cursor: pointer;
    top: 10px;
}
.dialog{
    .dialog_bg{
        background: #000;
        opacity: 0.75;
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
    }
    .dialog_content{
        width: 420px;
        padding-bottom: 30px;
        background: #fff;
        top: 30%;
        border-radius: 10px;
        left: 38%;
        position: absolute;
        text-align: left;
        box-shadow: 0 2px 8px 2px rgba(0, 0, 0, 0.1);
        .title{
           border-radius: 10px 10px 0 0;
            padding: 14px 20px; 
            color: #fff;
            position: relative;
            text-align: center;
            background: #6CB6FD;
            border-bottom: 1px solid #3E95E5;
            padding-bottom: 10px;
        }
        .items{
           padding:0 20px 0px 10px;
            margin-top: 26px;
            position: relative;
            label{
                width: 100px;
                text-align: right;
                display: inline-block;
            }
            input{
                border-radius: 5px;
                height: 30px;
                border: 1px solid #bbb;
                width: 66%;
                padding-left: 20px;
            }
            button{
                background: #fff;
                border: 1px solid #6CB6FD;
                color: #6CB6FD;
                border-radius: 0 5px 5px 0;
                padding: 7px 8px;
                font-weight: bold;
                font-size: 12px;
                position: absolute;
                right: 27px;
                top: 0;
            }
        }
        .btn{
            text-align: center;
            margin-top: 30px;
            button{
                font-size: 12px;
                padding: 6px 30px;
                border-radius: 6px;
                &.DelBtn{
                background: #6CB6FD;
                border: 1px solid #6CB6FD;
                color: #fff;
                margin-right: 30px;
                margin-left: 20px;
                }
                &.CancelBtn{
                border:1px solid #6CB6FD;
                color: #6CB6FD;
                background: #fff;
                }
            }
        }
    }
}

</style>
