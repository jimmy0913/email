<template>
  <div class="success-page">
      <div class="suc-box">
        <img src="@/assets/imgs/gou.png">
      </div>
      <p class="suc-txt">报名成功</p>
  </div>
</template>

<script>

export default {
  data(){
    return {
      username:'',
    }
  },
  methods:{
   
  }
  
}
</script>

<style scoped lang="less">

  .success-page{
    min-height: 100%;
    background-color: #E3E3E3;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;

    .suc-box{
      margin-top: 60px;
      width: 100px;
    }

    .suc-txt{
      margin-top: 30px;
      color: #999999;
    }
  }
  
</style>
