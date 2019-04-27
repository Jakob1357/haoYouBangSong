// pages/test1/test1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ne1:[],
    storage:''
 
  },
  // onShareAppMessage(){
  //   return{
  //     path:'/pages/test1/test1'
  //   }
  // },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    //获取存储信息
    wx.getStorage({
      key: 'storage',
      success: function (res) {
        // success
        that.setData({
          storage: res.data
        })
      }
    })
    var _this = this;
    const db = wx.cloud.database({
      env: 'hyb-1ab04c'
    })
    db.collection('test').where({
      // _openid:'o1xC-4iMJhWMVbcYNTt1YALqHH18'
    })
      .get({
        success: res => {
          this.setData({
            ne1: res.data
          })
        }
      })

  },
  show:function(){
    var _this = this;
    const db = wx.cloud.database({
      env: 'hyb-1ab04c'
    })
    db.collection('test1').where({
      // _openid:'o1xC-4iMJhWMVbcYNTt1YALqHH18'
    })
      .get({
        success: res => {
          this.setData({
            ne2: res.data
          })
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