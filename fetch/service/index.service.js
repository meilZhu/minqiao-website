/***
 * @FileName: index页面的请求接口服务
 * @Author: manyao.zhu
 * @Date: 2020-01-03 16:50:29
 */

const INDEX_API = require('../api/index.api');
const http = require('../../utils/axios')

// 登陆接口
const login = (param) => {
  return http.post(INDEX_API.login, param).then( res => {
    console.log('res', res)
    return res
  }).catch( err => {
    console.log('err', err)
  })
}

module.exports = {
  login,
}