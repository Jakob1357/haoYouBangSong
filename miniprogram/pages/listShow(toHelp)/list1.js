Page({
  adddetial: function () {
    wx.navigateTo({
      url: '../adddetial/adddetial',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  skipForHelp: function () {
    wx.navigateTo({
      url: '../listShow(forHelp)/list',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  }
})
