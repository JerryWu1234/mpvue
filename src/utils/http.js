import { showBusy,showSuccess,showModel } from '@/utils/util'

export default {
  host:'https://t35kgmh0.qcloud.la',
  $httpGet(url){
    return new Promise((resolve,reject)=>{
      wx.request({
        url:`${this.host}${url}`,
        method:"GET",
        success(res){
          resolve(res)
        },
        fail(res){
          showModel('请求失败', res)
          reject(res)
        }
      })
    })
  },
  $httpPost(url,datas){
    console.log(url)
    return new Promise((resolve,reject)=>{
      wx.request({
        url:`${this.host}${url}`,
        method:"Post",
        data:datas,
        success(res){
          resolve(res)
        },
        fail(res){
          showModel('请求失败', res)
          reject(res)
        }
      })
    })
  },

}
