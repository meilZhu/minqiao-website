/***
 * @FileName: index同页面的api
 * @Author: manyao.zhu
 * @Date: 2020-01-03 16:50:17
 */
const BASE_CONFIG = require('../../config/base.config');

const auth = BASE_CONFIG.serverName.auth;

const INDEX_API = {
  login: `${BASE_CONFIG.getHost()}${auth}/pub/login`,  // 登陆接口
}

module.exports = INDEX_API;

