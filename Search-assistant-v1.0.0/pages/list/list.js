//list.js
//获取应用实例
const app = getApp()
var tool = require("../../utils/tool.js")
var curl = require("../../utils/curl.js")
Page({
  data: {
    list: null,
    min: null,
    mil: null,
    max: null,
  },
  onLoad: function () {
    tool.page = this;
    tool.getLocation();
    curl.login();
    curl.getList("");
  },

  location: function () {
    if (tool.getStorage('location')) return;
    curl.getList("");
  },

  onShow: function () {
    console.log('onshow');
    if (tool.getStorage('request') && tool.getStorage('location')) return;
    tool.getLocation();
    curl.login();
    curl.getList("");
  },

  searchData: function (e) {
    var value = e.detail.value;
    console.log(e.detail)
    curl.getList(value);
  },

  info: function (e) {
    tool.setStorage('distance', e.currentTarget.dataset.distance)
    tool.setStorage('list_id', e.currentTarget.id);
    tool.changePage('/info/info');
  }
})