<template>
  <div class="email-page">
      <div class="banner-box">
        <img src="@/assets/imgs/banner.jpg">
      </div>
      <div class="main">
        <mt-field class="required" label="姓名" placeholder="请输入姓名" v-model="username" ></mt-field>
        <mt-field class="required" label="手机号" placeholder="请输入手机号" type="tel" v-model="phone" :attr="{ maxlength: 11 }"></mt-field>
        <mt-field class="required" label="身份证号" placeholder="请输入身份证号" type="email" v-model="identId"></mt-field>
        <mt-field label="备注" placeholder="备注" type="textarea" rows="4" v-model="remark"></mt-field>
      </div>

      <div class="enter-box">
        <mt-button type="primary" size="large" @click="sendMailFn">提交</mt-button>
      </div>

      <div class="loading-box" v-if="isLoading">
          <mt-spinner class="loading" type="snake" :size="60"></mt-spinner>
      </div>

  </div>
</template>

<script>

import { emptyStr, isPhone, isIdentyId} from '@/utils/util';
import  { Toast } from 'mint-ui';
import { sendMailApi } from '@/service/getData';
import Axios from 'axios';

export default {
  data(){
    return {
      isLoading:false,
      username:'',
      phone:'',
      identId:'',
      remark:'',
    }
  },
  methods:{
    async sendMailFn(){
        if(emptyStr(this.username)){
            Toast({
              message: '姓名不能为空',
              duration: 3000
            });
            return;
        }else if(emptyStr(this.phone)){
            Toast({
              message: '手机号不能为空',
              duration: 3000
            });
            return;
        }else if(!isPhone(this.phone)){
            Toast({
              message: '手机号格式不对',
              duration: 3000
            });
            return;
        }else if(emptyStr(this.identId)){
            Toast({
              message: '身份证号不能为空',
              duration: 3000
            });
            return;
        }else if(!isIdentyId(this.identId)){
            Toast({
              message: '身份证格式不对',
              duration: 3000
            });
            return;
        }else{
            
            let _this = this;
            _this.isLoading = true;
            Axios.post('/api/transoutage/send_email', {
                name: this.username,
                phone: this.phone,
                id: this.identId,
                remarks: this.remark
            })
            .then(function (response) {
                // Toast({
                //   message: response.data.errorMessage.errorMessage,
                //   duration: 3000
                // });

                _this.isLoading = false;
                console.info(response.data.errorMessage.errorCode);

                if(response.data.errorMessage.errorCode=='0'){
                    setTimeout(function() {
                      _this.$router.push({ path: "/success" });
                    }, 1500);                
                }else{
                    Toast({
                      message: response.data.errorMessage.errorMessage,
                      duration: 3000
                    });
                }
            })
            .catch(function (error) {
                Toast({
                  message: error.response,
                  duration: 3000
                });
            });

        }
    }


  }
  
}
</script>

<style scoped lang="less">

  .email-page{
    min-height: 100%;
  }
  .enter-box{
    width: 100%;
    bottom: 20px;
    padding: 0 10px;
    position: fixed;
  }

  .banner-box{
    /*height: 5rem;*/
  }

  .loading-box{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 4;
    background-color: rgba(0,0,0,.6);
  }

  .loading{
    position: absolute;
    z-index: 5;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }

  .required{
    position: relative;

    &:before{
      content:'*';
      position: absolute;
      color: red;
      left: 83px;
      top: 14px;
    }
  }
</style>
