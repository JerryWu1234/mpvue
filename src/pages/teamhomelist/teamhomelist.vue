<template>
    <div class="teamhomelist">
      <div class="teamhomelist-top" v-show="cativeindex==1">
        <div class="teamhomelist-top-seach">
          <input type="text" placeholder="索搜" class="teamhomelist-top-input" >
        </div>
      </div>
      <div class="teamhomelist-body" :class="{'marginTop':cativeindex==1}">
          <div class="teamhomelist-body-header">
            <div class="eamhomelist-body-headerTop" @click="tabStyle(1)" :class="{'cative':cativeindex==1}">
              球队列表
            </div>
            <div class="eamhomelist-body-headerTop" @click="tabStyle(2)"  :class="{'cative':cativeindex==2}">
              创建球队
            </div>
          </div>
          <div class="teamhomelist-body-list" v-show="cativeindex===1">
            <ul>
              <li class="teamhomelist-body-listLI">
                <a href="/pages/teamhomelist/teamdetails">
                  <div class="teamhomelist-body-listindex">1</div>
                  <div class="teamhomelist-body-listLIImg">
                    <img src="../../../static/images/9171525917622_.pic_hd.png" alt="">
                  </div>
                  <div class="teamhomelist-body-listLIname">收到斯蒂芬斯蒂芬</div>
                  <div class="teamhomelist-body-listLIdetails">
                    22胜/12负—50/积分
                  </div>
                </a>
              </li>
              <li class="teamhomelist-body-listLI">
                <a href="/pages/teamhomelist/teamdetails">
                  <div class="teamhomelist-body-listindex">1</div>
                  <div class="teamhomelist-body-listLIImg">
                    <img src="../../../static/images/9171525917622_.pic_hd.png" alt="">
                  </div>
                  <div class="teamhomelist-body-listLIname">收到斯蒂芬斯蒂芬</div>
                  <div class="teamhomelist-body-listLIdetails">
                    22胜/12负—50/积分
                  </div>
                </a>
              </li>
              <li class="teamhomelist-body-listLI">
                <a href="/pages/teamhomelist/teamdetails">
                  <div class="teamhomelist-body-listindex">1</div>
                  <div class="teamhomelist-body-listLIImg">
                    <img src="../../../static/images/9171525917622_.pic_hd.png" alt="">
                  </div>
                  <div class="teamhomelist-body-listLIname">收到斯蒂芬斯蒂芬</div>
                  <div class="teamhomelist-body-listLIdetails">
                    22胜/12负—50/积分
                  </div>
                </a>
              </li>
              <li class="teamhomelist-body-listLI">
                <a href="/pages/teamhomelist/teamdetails">
                  <div class="teamhomelist-body-listindex">1</div>
                  <div class="teamhomelist-body-listLIImg">
                    <img src="../../../static/images/9171525917622_.pic_hd.png" alt="">
                  </div>
                  <div class="teamhomelist-body-listLIname">收到斯蒂芬斯蒂芬</div>
                  <div class="teamhomelist-body-listLIdetails">
                    22胜/12负—50/积分
                  </div>
                </a>
              </li>
              <li class="teamhomelist-body-listLI">
                <a href="/pages/teamhomelist/teamdetails">
                  <div class="teamhomelist-body-listindex">1</div>
                  <div class="teamhomelist-body-listLIImg">
                    <img src="../../../static/images/9171525917622_.pic_hd.png" alt="">
                  </div>
                  <div class="teamhomelist-body-listLIname">收到斯蒂芬斯蒂芬</div>
                  <div class="teamhomelist-body-listLIdetails">
                    22胜/12负—50/积分
                  </div>
                </a>
              </li>
              <li class="teamhomelist-body-listLI">
                <a href="/pages/teamhomelist/teamdetails">
                  <div class="teamhomelist-body-listindex">1</div>
                  <div class="teamhomelist-body-listLIImg">
                    <img src="../../../static/images/9171525917622_.pic_hd.png" alt="">
                  </div>
                  <div class="teamhomelist-body-listLIname">收到斯蒂芬斯蒂芬</div>
                  <div class="teamhomelist-body-listLIdetails">
                    22胜/12负—50/积分
                  </div>
                </a>
              </li>
              <li class="teamhomelist-body-listLI">
                <a href="/pages/teamhomelist/teamdetails">
                  <div class="teamhomelist-body-listindex">1</div>
                  <div class="teamhomelist-body-listLIImg">
                    <img src="../../../static/images/9171525917622_.pic_hd.png" alt="">
                  </div>
                  <div class="teamhomelist-body-listLIname">收到斯蒂芬斯蒂芬</div>
                  <div class="teamhomelist-body-listLIdetails">
                    22胜/12负—50/积分
                  </div>
                </a>
              </li>

            </ul>
          </div>
          <div class="teamhomelist-body-created" v-show="cativeindex===2">
            <div class="personaImg">
              <img :src="aggregate.tempFilePaths?aggregate.tempFilePaths:'../../../static/images/9171525917622_.pic_hd.png'" alt="默认微信头像" width="100%" height="100%" @click="updateIMG">
            </div>
            <div class="personalbox">
              <input type="text"  placeholder="填写球队名字" v-model="aggregate.teamName">
            </div>
            <div class="personalCharacteristic">
              <textarea  placeholder="请简要概括球队简介" v-model="aggregate.introduction"></textarea>
            </div>
            <div class="personalbutton">
              <button @click="submitpersonal">提交</button>
            </div>
          </div>
      </div>
    </div>
</template>

<script>
  import MpUploaderBase from 'mp-weui/packages/uploader-base'
    export default {
        name: "teamhomelist",
        components: {
          MpUploaderBase,
        },
        data(){
          return{
            cativeindex:1,
            filelist : [
              {
                path: '', // 本地文件路径
                size: 1024, // 本地文件大小，单位：B
                failure: false, // 是否上传失败
                progress: 50, // 上传进度，0 - 100
              }
            ],
            aggregate:{
              tempFilePaths:null,
              teamName:"",
              introduction:""
            }
          }
        },
        methods:{
          tabStyle(num){
            this.cativeindex = num
          },
          submitpersonal(){
            this.aggregate = {}
          },
          updateIMG(){
            let that = this
            wx.chooseImage({
              count: 1, // 默认9
              sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
              sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
              success: function (res) {
                // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
                that.aggregate.tempFilePaths = res.tempFilePaths[0]
              }
            })
          }
        },
        mounted(){

        }
    }
</script>

<style lang="less">
  @import "../../style/iconfont.css";
  .cative{
    background: #0086b3;
    color: #fff !important;
    border-radius: 10rpx ;
  }
  .marginTop{
    margin-top: 80rpx !important;
    transition: margin-top 2s;
  }
  .teamhomelist{
    width: 100%;
    margin-top:0 10rpx;
    box-sizing: border-box;
    .teamhomelist-top{
      position: fixed;
      top: 0;
      margin: 0 10rpx;
      height: 60rpx;
      width: 100%;
      .teamhomelist-top-seach{
        box-sizing: border-box;
        height: 60rpx;
        width: calc(~"100% - 20rpx");
        border-radius: 30rpx;
        background: #cccccc;

        &>i.icon-search{
          position: absolute;
          left: 45%;
        }
        &>input.teamhomelist-top-input{
          box-sizing: border-box;
          height: 60rpx;
          border-radius: 30rpx;
          font-size: 28rpx;
          line-height:60rpx;
          color: #000000;
          padding-left: 15rpx;

        }
      }
    }
    .teamhomelist-body{
      margin: 0 10rpx 0 10rpx;
      transition: margin-top 2s;
      .teamhomelist-body-header{
        display: flex;
        border-radius: 10rpx ;
        height: 60rpx;
        background: #cccccc;
        .eamhomelist-body-headerTop{
          flex: 1;
          text-align: center;
          font-size: 28rpx;
          line-height: 60rpx;
          color: #666666;
        }
      }
      .teamhomelist-body-list{
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
      .teamhomelist-body-created{
        width: 100%;
        box-sizing: border-box;
        padding: 20rpx 50rpx;
        .personaImg{
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
        .personalbox{
          margin-top: 30rpx;
          height: 60rpx;
          width: 100%;
          &>input{
            border: 1rpx solid #ccc;
            font-size: 26rpx;
            padding: 10rpx;
          }
        }
        .personalCharacteristic{
          width: 100%;
          margin-top: 30rpx;
          font-size: 26rpx;
          &>textarea{
            height: 200rpx;
            box-sizing: border-box;
            font-size: 26rpx;
            padding: 10rpx;
            width: 100%;
            border: 1rpx solid #ccc;
          }
        }
        .personalbutton{
          display: block;
          margin-top: 30rpx;
          &>button{
            border: none;
          }
        }
      }
    }
  }
  page{
    background-color: #f2f2f2;
  }
</style>
