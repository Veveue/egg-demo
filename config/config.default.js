module.exports = appInfo => {
  const config = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = `${appInfo.name}_1532511512428_3477`;

  // add your config here
  config.middleware = ["gzip", "getIp"];

  // 配置 gzip 中间件的配置
  config.zip = {
    threshold: 1024, // 小于 1k 的响应体不压缩
  };
  // 配置公共的api
  config.api = "http://www.phonegap100.com/";

  // 配置模板引擎
  config.view = {
    mapping: {
      ".html": "ejs",
    },
  };

  return config;
};
