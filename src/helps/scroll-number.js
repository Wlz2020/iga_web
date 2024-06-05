// 格式化数字，确保它具有前导零
function formatNumber(num) {
  return num.toString().padStart(5, '0') // 将数字转换为字符串，并在前面补充零，使其总长度为5
}

export default function scrollNumber(_start, _end, duration, callback) {
  const start = parseInt(_start) // 解析字符串为整数
  const end = parseInt(_end) // 解析字符串为整数
  const totalFrames = Math.ceil((duration / 1000) * 60) // 根据总时间计算出总帧数，假设每秒60帧
  const increment = Math.ceil((end - start) / totalFrames) // 每帧增加的值，向上取整确保为整数
  var num = start
  var frame = 0
  var timer

  function animate() {
    timer = setInterval(function () {
      frame++ // 帧数递增
      num += increment // 根据每帧增加的值更新 num
      // 当 num 达到 end 时停止滚动
      if (num >= end) {
        clearInterval(timer) // 停止定时器
        num = end // 确保最终值为 end
      }

      // 将当前值传递给回调函数
      if (typeof callback === 'function') {
        callback(formatNumber(num)) // 格式化数字并传递给回调函数
      }

      // 当达到总帧数时停止滚动
      if (frame >= totalFrames) {
        clearInterval(timer) // 停止定时器
      }
    }, 1000 / 60) // 每秒60帧
  }

  // 初始执行动画
  animate()

  return {
    // 返回一个对象，用于重新开始动画
    restartAnimation: function () {
      clearInterval(timer) // 清除之前的定时器
      num = start // 重置 num 的值为起始值
      frame = 0 // 重置帧数
      animate() // 重新执行动画
    }
  }
}
