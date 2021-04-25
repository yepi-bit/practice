//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    currentId: '1',
     mytime:"",
    contentList: ['恭喜泰总喜提法拉利一辆！', '恭喜泰总斩获10000元大奖！', '恭喜酷彩吧越来越红火！'],
    listI: -1,
    content: '欢迎进入小程序',
    topMenu:[
      {"id": 1, "name": "竞彩足球"},
      {"id": 2, "name": "北京单场"},
      {"id": 3, "name": "竞彩篮球"},
      {"id": 4, "name": "排列三"},
      {"id": 5, "name": "任选9"},
      {"id": 6, "name": "11选5"},
      {"id": 7, "name": "大乐透"},
      {"id": 8, "name": "七星彩"},
      ],
    show:true,  
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onPullDownRefresh() {
    console.log('我下拉刷新了');
  },
  changeTabbar(e){
    this.setData({ index: e.currentTarget.dataset.id})
  },
  handleTap: function(e) {
    let id = e.currentTarget.id;
    if(id){
      this.setData({
        currentId:id
      })
    }
  },
  btnclose:function(){
this.setData({
  show:false,
})
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
  },
  onLoad: function (options) {
    setInterval(() => { this.update(this.getListInfo()) }, 3000)
  },
  update(content) {
    var that = this
    var animation = wx.createAnimation()
        // 旧消息向上平移
    animation.translateY(-30).step({
            duration: 1000,
            timingFunction: 'ease-in'
        })
        // 为了实现下一条新内容向上平移的效果，必须把内容很快平移到下方，并且不能被用户看见，这里其原理类似轮播图的思路。
        // 实现方法：动画时间设置为1ms，过渡效果设置为’动画第一帧就跳至结束状态直到结束‘
    animation.opacity(0).translateY(30).step({
            duration: 1,
            timingFunction: 'step-start'
        })
        // 新消息向上平移的同时恢复透明
    animation.opacity(1).translateY(0).step({
        duration: 1000,
        timingFunction: 'ease-out'
    })
    that.setData({
            animationData: animation.export()
        })
        // 更新内容的延时必须大于第一步动画时间
    setTimeout(() => {
        that.setData({
            content: content
        })
    }, 1000)
},
getListInfo() {
    if (this.data.listI >= this.data.contentList.length - 1) {
        this.data.listI = -1
        this.getListInfo()
    } else {
        this.data.listI++
    }
    return this.data.contentList[this.data.listI]
},
})
