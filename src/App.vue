<script>

export default {
  mpType: 'app',
  created(){
    wx.login({
      success: function(res) {
        wx.setStorageSync('code',res)
      }
    });
    // wx.getLocation({
    //   success(res){
    //
    //     // let latitude = res.latitude
    //     // let longitude = res.longitude
    //     // let speed = res.speed
    //     // let accuracy = res.accuracy
    //     qqmapsdk.reverseGeocoder({
    //       location: {
    //         latitude: res.latitude,
    //         longitude: res.longitude
    //       },
    //       success: function(res) {
    //         console.log(res);
    //       },
    //       fail: function(res) {
    //         console.log(res);
    //       },
    //     });
    //   }
    // })

  }
}
</script>

<style>

.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
</style>
