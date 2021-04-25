Page({
  data:{
   name1:'',
   path:'http://img.zcool.cn/community/010e9557f74cbba84a0d304faa657c.jpg',
   topMenu:[
    {"id": 1, "name": "追号记录"},
    {"id": 2, "name": "我的晒单"},
    {"id": 3, "name": "彩店信息"},
    {"id": 4, "name": "我的号码篮"},
    {"id": 5, "name": "我的红包"},
    {"id": 6, "name": "我的消息"},
    {"id": 7, "name": "我的推荐"},
    {"id": 8, "name": "帮助中心"},
    {"id": 9, "name": "我的资料"},
    {"id": 10, "name": "意见反馈"},
    ],

},
bindGetUserInfo:function(){
  var that = this;
  wx.getUserInfo({
    success: function (res) {
      console.log('success',res)
      that.setData({
         name1: res.userInfo.nickName,
         path: res.userInfo.avatarUrl,
        });
    },
    fail:function(res){
      console.log('fail', res)
    }
  })
},
})