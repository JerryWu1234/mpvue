<template>
    <div class="team-details-list">
      <div class="team-details-list-header">
        <div class="team-details-list-header-logo"><img src="../../../static/images/9171525917622_.pic_hd.png"/></div>
        <div class="team-details-list-header-introduction">
          士大夫噶士大夫公司代发跟撒旦发个士大夫告诉和是 撒旦发个收到发跟
        </div>
      </div>
      <div class="team-details-list-body">
        <ul>
          <li class="teamhomelist-body-listLI">
            <a href="/pages/teamhomelist/teamdetails">
              <div class="teamhomelist-body-listindex">1</div>
              <div class="teamhomelist-body-listLIImg">
                <img src="../../../static/images/9171525917622_.pic_hd.png" alt="">
              </div>
              <div class="teamhomelist-body-listLIname">收到斯蒂芬斯蒂芬</div>
              <div class="teamhomelist-body-listLIdetails">
                180cm/160cm 队长
              </div>
            </a>
          </li>

        </ul>
      </div>
    </div>
</template>

<script>

    export default {
        name: "teamdetails",
        components: {

        },
        methods:{
          sss(){
            wx.chooseImage({
              count: 1, // 默认9
              sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
              sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
              success: function (res) {
                // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
                var tempFilePaths = res.tempFilePaths
              }
            })
          }
        }
    }
</script>

<style lang="less">
.team-details-list{
  height: 100vh;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding: 20rpx 20rpx;
  overflow: hidden;
  backgroundColor:"#f2f2f2";
  .team-details-list-header{
    &-logo{
      border: 1px solid #ddd;
      width: 200rpx;
      border-radius: 100rpx;
      text-align: center;
      display: block;
      margin: auto;
      overflow: hidden;
      height: 200rpx;

      &>img{
        height: 100%;
        width: 100%;
        background-size: 100% 100%;
      }
    }
    &-introduction{
      margin: 20rpx 0;
      height: 200rpx;
      width: 100%;
      padding: 20rpx;
      font-size: 28rpx;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      border: 1px solid #ddd;
      overflow: hidden;
    }
  }
  .team-details-list-body{
    margin-top:20rpx;
    height: calc(100% - 440rpx);
    overflow-y: auto;
    .teamhomelist-body-listLI{
      height: 80rpx;
      width: 100%;
      border-radius: 10rpx;
      background: #fff;
      margin: 10rpx 0;
      &>a{
        display: inline-block;
        width: 100%;
        height: 100%;
        display: flex;
        font-size: 30rpx;
        position: relative;
        .teamhomelist-body-listindex{
          height: 100%;
          width: 40rpx;
          line-height: 80rpx;
          color: #ffffff;
          border-radius: 20rpx;
          text-align: center;
          background: #cccccc;
        }
        .teamhomelist-body-listLIImg{
          width: 80rpx;
          height: 80rpx;
          overflow: hidden;
          margin-left: 20rpx;
          &>img{
            width: 100%;
            height: 100%;
            border-radius: 100%;
          }
        }
        .teamhomelist-body-listLIdetails{
          line-height: 80rpx;
          font-size: 25rxp;
          color: #999999;
          flex: 1;
        }
        .teamhomelist-body-listLIname{
          color: #999999;
          line-height: 80rpx;
          font-size: 30rpx;
          text-align: center;
          flex: 1;
          word-break: keep-all; /* 不换行 */

          white-space: nowrap; /* 不换行 */

          overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */

          text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
        }
      }
    }
  }
}
</style>
