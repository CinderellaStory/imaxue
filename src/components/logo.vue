<template>
    <div class="logo" @click="Logo">
        <img src="../assets/logo.png">
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        Logo(){
            this.$router.push({path:"/home"})
        }
    }
}
</script>


<style scoped lang="less">
.logo {
  text-align: left;
  padding: 80px;
  cursor: pointer;
}
</style>
