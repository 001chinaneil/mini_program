const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

var getUserInfo = function(handle){
  wx.getUserInfo(handle);
  console.log("来自util文件的getUserInfo函数");
}

var getSaoYiSao = function(handle){
  wx.scanCode(handle);
}

module.exports = {
  formatTime: formatTime,
  getUserInfo: getUserInfo,
  getSaoYiSao: getSaoYiSao
}
