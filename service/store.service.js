/***
 * @FileName: 封装缓存相关服务
 * @Author: manyao.zhu
 * @Date: 2020-01-03 09:27:49
 */
const StoreService = {
  /** 
   * 设置缓存
  */
  setStore(key,value, bool = true) {
    bool? sessionStorage.setItem(key, value): localStorage.setItem(key, value)
  },

  /**
   * 获取缓存
   */
  getStore(key, bool = true) {
    bool? sessionStorage.getItem(key): localStorage.getItem(key)
  },

  /**
   * 移除缓存
   */
  removeStore(key, bool) {
    bool? sessionStorage.removeItem(key): localStorage.removeItem(key)
  }
}

module.exports = StoreService;