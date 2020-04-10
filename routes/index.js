/***
 * @FileName: 首页路由
 * @Author: manyao.zhu
 * @Date: 2019-12-17 11:45:19
 */
var express = require('express');
var router = express.Router();

const indexService = require('../fetch/service/index.service')
const resultBean = require('../utils/result-bean')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/auth/login', (req, res, next) => {
  indexService.login({username:req.body.username, password:req.body.password}).then(result=> {
    if (result.status) {
      req.session.access_token = result.data;
      res.send(resultBean.success('登录成功'))
    }
  })
})


module.exports = router;
