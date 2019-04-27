// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    storage:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this

  },

  getInput: function (e) {
    this.setData({
      storage: e.detail.value
    })
  },

  // saveInput: function () {
  //   wx.setStorageSync('storage', this.data.storage)
  // },



  onTapToSuccess: function(){
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
        username: e.detail.value.username,
        way:1
      },
      success: res => {
        // 在返回结果中会包含新创建的记录的 _id
        this.setData({
          username: e.detail.value.username
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

// const db = wx.cloud.database()

// const test = db.collection('test')

// const test_1 = db.collection('test').doc('1')

// db.collection('test').add({
//   // data 字段表示需新增的 JSON 数据
//   data: {
//     // _id: 'todo-identifiant-aleatoire', // 可选自定义 _id，在此处场景下用数据库自动分配的就可以了
//     description: 'learn cloud database',
//     due: new Date('2018-09-01'),
//     tags: [
//       'cloud',
//       'database'
//     ],
//     // 为待办事项添加一个地理位置（113°E，23°N）
//     location: new db.Geo.Point(113, 23),
//     done: false
//   },
//   success(res) {
//     // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
//     console.log(res)
//   }
// })

