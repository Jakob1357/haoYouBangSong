Page({
  adddetial: function () {
    wx.navigateTo({
      url: '../adddetial/adddetial',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  skipToHelp: function(){
    wx.navigateTo({
      url: '../listShow(toHelp)/list1',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    list1: []

  },

  /**
   * 生命周期函数--监听页面加载
   */
  //读取数据
  onLoad: function (options) {
    var _this = this;
    const db = wx.cloud.database({
      env: 'hyb-1ab04c'
    })
    db.collection('test').where({
    })
      .get({
        success: res => {
          this.setData({
            list1: res.data
          })
        }
      })
    this.setData({
      type: options.type,
    });
    console.log(options.type);
  },
  onTapToSuccess: function () {
    wx.navigateTo({
      url: '/pages/test1/test1',
      success: function () {
        console.log("jump success")
      },
      fail: function () {
        console.log("jump failed")
      },
      complete: function () {
        console.log("jump complete")
      }
    })
  },




  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
