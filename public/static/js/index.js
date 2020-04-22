/***
 * @FileName:  首页index的 js
 * @Author: manyao.zhu
 * @Date: 2020-01-02 17:19:30
 */

// function login() {
//   $.post('/auth/login', $('#login').serializeArray(), function (res) {
//     console.log('index', res);
//     if (res.status) {
//       window.location.href = '/t1';
//     }
//   });
// }

var index = 0;

// 宽度
const domWidth = $('.dt-case-content').width();

// 复制第一个并天叫道盒子里面
const listClone = $('.dt-case-list')
  .first()
  .clone();
$('.dt-case--list-content').append(listClone);

// 数量
const listLen = $('.dt-case-list').length;

// 点击向左按钮
$('.dt-case-left').click(function() {
  toLeft('dt-case--list-content', listLen);
});

// 点击向右按钮
$('.dt-case-right').click(function() {
  toRight('dt-case--list-content', listLen);
});

// 向左移动
function toLeft(type, size) {
  index++;
  if (index === size) {
    $(`.${type}`).css({ left: 0 });
    index = 1;
  }
  $(`.${type}`)
    .stop()
    .animate({ left: -index * domWidth }, 1000);
}

// 向右运动
function toRight(type, size) {
  index--;
  if (index === -1) {
    $(`.${type}`).css({ left: -(size - 1) * domWidth });
    index = size - 2;
  }
  $(`.${type}`)
    .stop()
    .animate({ left: -index * domWidth }, 1000);
}
