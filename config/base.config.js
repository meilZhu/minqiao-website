/***
 * @FileName: 基础配置
 * @Author: manyao.zhu
 * @Date: 2020-01-03 09:38:53
 */
const baseApi = 'http://srm.dev.ithinkdt.com'; // 开发环境  http://jira.ithinkdt.com  http://srm.dev.ithinkdt.com
// const baseApi = 'http://new.srm.qa.ithinkdt.com'; // 测试环境
// const baseApi = 'http://srm.ithinkdt.com';  // 正式环境


const BASE_CONFIG = {
  token: 'token',
  // 获取主机域名
  getHost: () => {
    return baseApi
  },
  serverName: {
    admin: '/api/v1/ithinkdt-user-center',
    dict: '/api/v1/ithinkdt-user-center',
    auth: '/api/v1/ithinkdt-user-center',
    srm: '/api/v1/ithinkdt-srm-scm-new',
    file: '/api/v1/ithinkdt-file',
    bpm: '/api/v1/ithinkdt-bpm',
  }
}

module.exports = BASE_CONFIG;