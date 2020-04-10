/***
 * @FileName:  对请求axios的封装
 * @Author: manyao.zhu
 * @Date: 2020-01-03 09:13:46
 */
const axios = require('axios');
const qs = require('qs');
// const storeService = require('../service/store.service');
const BASE_CONFIG = require('../config/base.config');

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

// 请求拦截器
axios.interceptors.request.use( config => {
    // if (storeService.getStore(BASE_CONFIG.token)) {
    //   config.headers.access_token = storeService.getStore(BASE_CONFIG.token)
    // }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
)

// 响应拦截器
axios.interceptors.response.use( response => {
    return response.data;
  },
  error => {
    return Promise.reject(error);
  }
)

// 请求方法
const fetch = ({method = 'get', url='', params={}, header= {}} = {}) => {
  let config = {
    method: method,
    url: url,
    params: method === 'get' || method === 'delete'? params: null,
    data: method === 'post' || method === 'put'? qs.stringify(params): method === 'postJson'? JSON.stringify(params): null,
    header: header
  }

  return new Promise((resolve, reject) => {
    axios(config).then(response => {
      resolve(response)
    }).catch(error => {
      reject(error)
    })
  })
}

// get 请求方法
const get = (url, params = {}) => {
  return fetch({
    method: 'get',
    url,
    params
  })
}

// post 请求方法
const post = (url, params={}) => {
  return fetch({
    method: 'post',
    url,
    params,
  })
}

const postJson = (url, parmas) => {
  return fetch({
    method: 'postJson',
    url,
    params,
    header: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}

module.exports = {
  get,
  post,
  postJson
}