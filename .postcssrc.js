/***
 * @FileName: 将px自动转换成vw单位
 * @Author: manyao.zhu
 * @Date: 2020-04-10 17:04:25
 */
// .postcssrc.js
module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {},
    "postcss-px-to-viewport-opt": {
      viewportWidth: 1920,// 设计稿宽度
      viewportHeight: 970,// 设计稿高度，可以不指定
      unitPrecision: 3,// px to vw无法整除时，保留几位小数
      viewportUnit: 'vw',// 转换成vw单位    
      selectorBlackList: ['.ignore', '.hairlines'],// 不转换的类名
      minPixelValue: 1,// 小于1px不转换
      mediaQuery: false, // 允许媒体查询中转换
      exclude: /(\/|\\)(node_modules)(\/|\\)/          // 排除node_modules文件中第三方css文件
    },
    "postcss-viewport-units":{},
    "cssnano": {
      preset: "advanced",
      autoprefixer: false,// 和cssnext同样具有autoprefixer，保留一个
      "postcss-zindex": false
    }
  }
}