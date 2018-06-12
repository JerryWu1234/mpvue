import Vue from 'vue'
import App from '@/App'
import store from '@/store'

import MpvueRouterPatch from 'mpvue-router-patch'
import 'mp-weui/lib/style.css'
Vue.use(MpvueRouterPatch)
Vue.config.productionTip = false
App.store = store

App.mpType = 'app'


const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    pages: ['pages/aaaa','pages/index','pages/logs'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      selectedColor: "#1296db",
      borderStyle:"white",
      list: [
        {
          pagePath: "pages/aaaa",
          text: "队员列表",
          iconPath: "static/images/ico-home.png",
          selectedIconPath: "static/images/ico-home-d.png"
        },
        {
          pagePath: "pages/index",
          text: "待发开",
          iconPath: "static/images/ico-setting.png",
          selectedIconPath: "static/images/ico-setting-d.png"
        },
        {
          pagePath: "pages/logs",
          text: "申请列表",
          iconPath: "static/images/ico-help.png",
          selectedIconPath: "static/images/ico-help-d.png"
        }
      ]
    }
  }
}
