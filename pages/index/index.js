//index.js
var util = require("../../utils/util");
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    "motto": "Hello 小程序！",
    "hasUserInfo": app.globaData.userInfo,
    "canIUse": false,
    "userInfo": "",
    "saoYiSaoInfo": ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("监听页面加载");
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("监听页面渲染完成");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("监听页面显示");
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
    console.log("用户下拉监听");
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("用户上拉监听");
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  /** 
   * 用户点击dom
  */
  getUserInfo: function(){
    var t = this;
    util.getUserInfo({
      success: function (data) {
        app.globaData.userInfo = true;
        t.setData({
          "userInfo": data.userInfo
        });
      }
    });
  },
  getSaoYiSao: function(){
    var t = this;
    util.getSaoYiSao({
      success: function(data){
        t.setData({
          "saoYiSaoInfo": data
        });
      }
    });
  }

});
