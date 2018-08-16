<template>
  <div>
    <div class="loginwindows">
      <div class="loginuser">
        <button open-type="getUserInfo" lang="zh_CN" @getuserinfo="onGotUserInfo($event)">微信登录</button>
      </div>
    </div>
  </div>
</template>

<script>
import http from '../../utils/http'
import { showBusy, showSuccess, showModel,qqmapsdk} from '../../utils/util'
export default {
  data() {
    return {
      userInfo: {},
      total:0,
    }
  },
  created() {
  },
  methods: {
    async onGotUserInfo(e) {
      if(this.total==1) return
      this.total++
      let that = this
      //获取当前的定位
      wx.getLocation({
        success(res) {
          //腾讯地图的sdk
          qqmapsdk.reverseGeocoder({
            location: {
              latitude: res.latitude,
              longitude: res.longitude
            },
            success: function (cityres) {
              //获取当前用户的地址
              let address = cityres.result.address_component
              //获取地址成功后开始登陆
              let code = wx.getStorageSync('code')

              let obj = {
                code: code.code,
                encryptedData: e.mp.detail.encryptedData,
                iv: e.mp.detail.iv,
                userInfo: e.mp.detail.userInfo,
              }
              let header = {};
              header['X-WX-Code'] = obj.code;
              header['X-WX-Encrypted-Data'] = obj.encryptedData;
              header['X-WX-IV'] = obj.iv;
              wx.request({
                url: 'https://t35kgmh0.qcloud.la/weapp/login',
                method: 'GET',
                header: {...header},
                success: function (e) {
                  //获取当前用户的个人信息设置用户的所在地址
                  let userinfo = e.data.data.userinfo

                  userinfo.city = address.city//设置城市
                  userinfo.province = address.province//设置地区
                  wx.setStorageSync('userInfo', userinfo)
                  showSuccess('登录成功')
                  //检验是否填写完整资料
                  http.$httpGet(`/weapp/userList/${userinfo.openId}`).then((res)=>{
                    //检验数据库是否有此用户
                    if(res.data.data.length==0){
                      //跳信息补全页面
                      that.$router.replace('../createInformation/information')
                    }else{
                      //球队列表
                      console.log('输入')
                      wx.switchTab({
                        url: '../teamhomelist/teamhomelist'
                      })
                    }
                  })
                },
                fill(e) {
                  showModel('登录成功', e)
                }
              })
            },
            fail: function (res) {
              console.log(res);
            },
          });
        }
      })

    }
  }
}
</script>

<style lang="less">
  @import "../../utils/css";
  .loginwindows{
    position: fixed;
    background: rgba(255, 255, 255, 0.5);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

  }
  .loginuser{
    width: 400rpx;
    height: 250rpx;
    background: #fff;
    border-radius: 200rpx;
    margin:300rpx auto;
    padding-top: 150rpx;
    background: url("../../../static/images/9171525917622_.pic_hd.png") no-repeat center;
  }
  .loginuser>button{
    width: 380rpx;
    background: none;
    margin-top: 200rpx;

  }
</style>
