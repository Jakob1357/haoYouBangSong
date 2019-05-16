// pages/orderList/orderList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    //标签云
    labArr: ['待接单', '正在进行', '已终止', '已完成'],

    // 自定义自己喜欢的颜色
    colorArr: ["#EE2C2C", "#ff7070", "#EEC900", "#4876FF", "#ff6100","#607b8b"],
    // 存储随机颜色
    // randomColorArr: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // let that = this,
    //   labLen = that.data.labArr.length,
    //   colorArr = that.data.colorArr,
    //   colorLen = colorArr.length,
    //   randomColorArr = [];
    // //判断执行
    // do {
    //   let random = colorArr[Math.floor(Math.random() * colorLen)];
    //   randomColorArr.push(random);
    //   labLen--;
    // } while (labLen > 0)

    // that.setData({
    //   randomColorArr: randomColorArr
    // });
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

  },

  skipOrderContent: function(){
    wx.navigateTo({
      url: '../viewOrder/viewOrder',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
})