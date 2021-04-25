// pages/discover/discover.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'点击登录',
    path:'http://img.zcool.cn/community/010e9557f74cbba84a0d304faa657c.jpg'
  },
  bindGetUserInfo:function(){
    var that = this;
    wx.getUserInfo({
      success: function (res) {
        console.log('success',res)
        that.setData({
           name: res.userInfo.nickName,
           path: res.userInfo.avatarUrl,
          });
      },
      fail:function(res){
        console.log('fail', res)
      }
    })
  },
  click:function (event) {
    console.log(event)
  }
  })