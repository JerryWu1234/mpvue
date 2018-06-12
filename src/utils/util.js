import {QQMapWX } from './qqmap-wx-jssdk.min'

var qqmapsdk = new QQMapWX({
  key: 'V7LBZ-MQSLV-3Y2P5-UYERI-OIO57-IBFDT'
});
// 显示繁忙提示
var showBusy = text => wx.showToast({
    title: text,
    icon: 'loading',
    duration: 10000
})

// 显示成功提示
var showSuccess = text => wx.showToast({
    title: text,
    icon: 'success'
})

// 显示失败提示
var showModel = (title, content) => {
    wx.hideToast();

    wx.showModal({
        title,
        content: JSON.stringify(content),
        showCancel: false
    })
}

export { showBusy, showSuccess, showModel,qqmapsdk }
