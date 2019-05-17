// pages/endReason/endReason.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    itemList: [
      { id: 1, name: '饭菜洒了', isSelected: false, },
      { id: 2, name: '排队时间过长', isSelected: false, },
      { id: 3, name: '物品售罄', isSelected: false, },
      { id: 4, name: '联系不上买方', isSelexted: false, },
    ]
  },
  itemSelected: function (e) {
    var index = e.currentTarget.dataset.index;
    var item = this.data.itemList[index];
    item.isSelected = !item.isSelected;
    this.setData({ itemList: this.data.itemList, }); 

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  

  skipSuccess: function () {
    wx.redirectTo({
      url: '../endReason/success/success',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
})