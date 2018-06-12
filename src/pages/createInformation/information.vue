<template>
  <div class="personaData">
      <div class="personaImg"><img :src="personal.img" alt="默认微信头像"></div>
      <div class="personalbox">
        <input type="text" v-model="personal.name" placeholder="请填写姓名">
      </div>
      <div class="personalbox">
        <!--<input type="text" v-model="personal.position" placeholder="请填写你擅长的位置">-->
        <picker mode="selector" :range="mArray" :value="personal.position" @change="bindpersonal">
          <input type="text" class="personatime" v-model="personal.position" placeholder="请填写你擅长的位置" disabled>
        </picker>
      </div>
      <div class="personalbox">
        <input type="number" v-model="personal.callphone" placeholder="请填写你手机号码">
      </div>
      <picker mode="date" :value="personal.timeBirth" @change="bindDateChange">
        <input type="text" class="personatime" v-model="personal.timeBirth" placeholder="请填写你的出生日期" disabled>
      </picker>
      <div class="personalbox">
        <input type="number" v-model="personal.height" placeholder="请填写你身高">
      </div>
      <div class="personalbox">
        <input type="number" v-model="personal.weight"  placeholder="请填写你体重">
      </div>
      <div class="personalCharacteristic">
        <textarea v-model="personal.characteristic" placeholder="请简要概括你的技术特点"></textarea>
      </div>
      <div class="personalbutton">
        <button @click="submitpersonal">提交</button>
      </div>
  </div>
</template>

<script>
  import { showBusy,showSuccess,showModel } from '../../utils/util'
  import http from '../../utils/http'
  import MpPicker from 'mp-weui/packages/picker'
  import MpChecklist from 'mp-weui/packages/checklist'
  import MpMessage from 'mp-weui/packages/message'
    export default {
        name: "information.vue",
        mounted(){
          let userInfo = wx.getStorageSync('userInfo')
          this.personal.name = userInfo.nickName
          this.personal.id = userInfo.openId
          this.personal.img = userInfo.avatarUrl
          this.personal.city = userInfo.city
          this.personal.province = userInfo.province
        },
        data() {
          return {
            //个人信息
            personal:{
              name:'',
              position:'',
              callphone:'',
              id:'',
              img:'',
              height:'',
              weight:"",
              characteristic:"",
              province:"",
              city:"",
              timeBirth:''
            },
            mArray:['中锋','小前锋','大前锋','得分后卫','后卫']

          };
        },
        methods:{
          bindDateChange(e) {
            this.personal.timeBirth = e.target.value;
          },
          bindpersonal(e){
            this.personal.position = this.mArray[e.target.value];
          },
          async submitpersonal(){
            let datalist =  await http.$httpPost('/weapp/playerApplication',{
                ...this.personal,
              })
            //用户添加失败
              if(!datalist.data.success){
                showModel('请求失败', datalist.data.msg)
                //用户添加成功后跳转
              }else {

              }

          }

        },
        components: {
          MpPicker,
          MpChecklist,
          MpMessage
        },

    }
</script>

<style scoped>
  .personaData{
    width: 100%;
    box-sizing: border-box;
    padding: 20rpx 50rpx;
  }
.personalbox{
  margin-top: 30rpx;
  height: 60rpx;
  width: 100%;
}
  .personalbox >input{
    border: 1rpx solid #ccc;
    font-size: 26rpx;
    padding: 10rpx;
  }
  .personalbox >select{
    border: 1rpx solid #ccc;
    font-size: 26rpx;
    padding: 10rpx;
  }
  .personatime{
    border: 1rpx solid #ccc;
    font-size: 26rpx;
    margin-top: 30rpx;
    height: 40rpx;
    padding: 10rpx;
  }
  .personalCharacteristic{

    width: 100%;
    margin-top: 30rpx;
    font-size: 26rpx;
  }
  .personalCharacteristic textarea{
    height: 200rpx;
    box-sizing: border-box;
    font-size: 26rpx;
    padding: 10rpx;
    width: 100%;
    border: 1rpx solid #ccc;
  }
  .personaImg{
    width: 100%;
    border-radius: 50rpx;
    text-align: center;
    display: block;
    height: 240rpx;

  }
  .personaImg img{
    width: 240rpx;
    height: 240rpx;
    border-radius: 120rpx;

  }
  .personalbutton{
    display: block;
    margin-top: 30rpx;

  }
  .personalbutton button{
      border: none;
  }
</style>
