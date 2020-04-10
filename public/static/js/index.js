/***
 * @FileName:  首页index的 js
 * @Author: manyao.zhu
 * @Date: 2020-01-02 17:19:30
 */

function login() {
  $.post('/auth/login', $("#login").serializeArray(), function(res){
    console.log('index', res)
    if(res.status) {
      window.location.href = '/t1';
    }
  });
}