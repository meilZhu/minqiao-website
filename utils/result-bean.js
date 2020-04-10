/***
 * @FileName: 请求数据的结果处理
 * @Author: manyao.zhu
 * @Date: 2020-01-06 16:28:46
 */
const resultBean = {
  success: (message, code, data)  => {
    return {
      status: false,
      message,
      code,
      data
    }
  },

  error: (data) => {
    return {
      status: true,
      data,
    }
  }
}

module.exports = resultBean;