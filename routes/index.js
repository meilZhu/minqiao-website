/***
 * @FileName: 首页路由
 * @Author: manyao.zhu
 * @Date: 2019-12-17 11:45:19
 */
var express = require('express');
var router = express.Router();

const _route = { index: require('./viewRoutes/index') }; // 模块化处理

const indexService = require('../fetch/service/index.service');
const resultBean = require('../utils/result-bean');

let url = 'str',
  routes = [],
  skip = true,
  renderParam = {};

// 该路由使用的中间件
router.use(function timeLog(req, res, next) {
  console.log('view::' + req.path, Date.now());
  url = (req.path.endsWith('/') ? req.path + 'index' : req.path).slice(1);
  routes = req.path.split('/');
  renderParam = {
    path: url,
    queryData: req.query || {},
    paramsData: req.params || {}
  };
  next();
});

// 路由转发
router.use('/', function(req, res, next) {
  //目前我们支持二层的url结构
  if (routes.length === 3) {
    try {
      let fun = _route[routes[1]] && _route[routes[1]][routes[2]];
      if (fun && fun !== null) {
        skip = false;
        fun(req, res, function(data, err) {
          if (err) {
            next(err);
          } else {
            renderParam.data = data;
            res.render(url, renderParam);
          }
        });
      }
    } catch (e) {
      console.error(e);
      throw e;
    }
  }
  if (skip) {
    res.render(url, renderParam);
  }
});

/* GET home page */
// router.get('/product', function(req, res, next) {
//   console.log(1);
//   res.render('product');
// });
module.exports = router;
