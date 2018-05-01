const env = process.env.NODE_ENV;
import Fly from "flyio/dist/npm/wx";
const fly = new Fly(); //创建fly实例
const hosts = {
  development: "https://www.yiyiyiyi.com", //开发环境
  production: "https://www.yiyiyiyi.com", //生产环境
};
//配置请求基地址
fly.config.baseURL = hosts[env];

//添加拦截器
fly.interceptors.request.use((config, promise) => {
  //给所有请求添加自定义header
  let token = wx.getStorageSync("token");
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
});
export default fly;
