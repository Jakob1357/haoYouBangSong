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
  }
})
