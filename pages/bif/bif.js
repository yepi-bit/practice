Page({
  data:{
   name:'',
   path:'http://img95.699pic.com/xsj/08/wg/1v.jpg!/fh/300'

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
})