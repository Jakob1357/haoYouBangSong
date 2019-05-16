// pages/needCard/needCard.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    storage: '',
    selectShow: false,//控制下拉列表的显示隐藏，false隐藏、true显示
    selectData: ['美食园', '风味餐厅', '奥运餐厅一层','奥运餐厅二层','清真餐厅','三食','京客隆(奥运餐厅店）','京客隆（三食店）','luckin coffee（学生服务中心店）','luckin coffee（理科楼）'],//下拉列表的数据
    index: 0,
  },

  selectTap() {
    this.setData({
      selectShow: !this.data.selectShow
    });
  },
  // 点击下拉列表
  optionTap(e) {
    let Index = e.currentTarget.dataset.index;//获取点击的下拉列表的下标
    this.setData({
      index: Index,
      selectShow: !this.data.selectShow
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this

  },

  getInput: function (e) {
    this.setData({
      storage: e.detail.value
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
  onTapToSuccess: function () {
    wx.setStorageSync('storage', this.data.storage)
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

  //添加

  res: function (e) {
    const db = wx.cloud.database()
    db.collection('test').add({
      data: {
        restaurant: e.detail.value.restaurant,
        needIn: e.detail.value.needIn,
        time: e.detail.value.time,
        phoneNumber: e.detail.value.phoneNumber,
        more: e.detail.value.more,
        way: 1
      },
      success: res => {
        // 在返回结果中会包含新创建的记录的 _id
        this.setData({
          restaurant: e.detail.value.restaurant,
          needIn: e.detail.value.needIn,
          time: e.detail.value.time,
          phoneNumber: e.detail.value.phoneNumber,
          more: e.detail.value.more,
        })
        wx.showToast({
          title: '新增记录成功',
        })
        console.log('[数据库] [新增记录] 成功，记录 _id: ', res._id)
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '新增记录失败'
        })
        console.error('[数据库] [新增记录] 失败：', err)
      }
    })

  },

  skipHelpCard: function () {
    wx.redirectTo({
      url: '../helpCard/helpCard',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})