const path = require("path");
// 在这里你可以重写storybook 默认的webpack配置
module.exports = async ({ config, mode }) => {
    // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    config.module.rules.push({
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      });
    
  
    // 新增@别名
    config.resolve.alias = Object.assign(config.resolve.alias, {
      '@': path.resolve(__dirname, '../src')
    })
  
    // Return the altered config
    return config
  }