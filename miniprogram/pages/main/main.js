// pages/mainPage/mainPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  onTapToMatch1:function(){
    wx.navigateTo({
      url: "/pages/listShow(forHelp)/list?type=1"
    });
  },

  onTapToMatch2: function () {
    wx.navigateTo({
      url: "pages/home/home?type=2"
    });
  },

  onTapToMatch3: function () {
    wx.navigateTo({
      url: "pages/home/home?type=3"
    });
  },

  onTapToMatch4: function () {
    wx.navigateTo({
      url: "pages/home/home?type=4"
    });
  },

  onTapToMatch5: function () {
    wx.navigateTo({
      url: "pages/home/home?type=5"
    });
  },

  onTapToMatch6: function () {
    wx.navigateTo({
      url: "pages/home/home?type=6"
    });
  },

  onTapToMatch7: function () {
    wx.navigateTo({
      url: "pages/home/home?type=7"
    });
  },

  onTapToMatch8: function () {
    wx.navigateTo({
      url: "pages/home/home?type=8"
    });
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