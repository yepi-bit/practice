//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
    onLoad: function (options) {
    var that=this;
    setInterval(
      function () { 
          var mydate=new Date();
                    var hour=mydate.getHours();
                    var min=mydate.getMinutes();
                    var sec=mydate.getSeconds();
                    that.setData({
                      mytime:hour+":"+min+":"+sec
                    })
      }   , 1000); 
    },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
