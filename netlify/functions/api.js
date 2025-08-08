const fs = require('fs');
const path = require('path');
const serverless = require('serverless-http');
const {consturctServer} = require('../../server');

const app = consturctServer();

 // 检测是否存在 anonymous_token 文件,没有则生成
  if (!fs.existsSync(path.resolve(tmpPath, 'anonymous_token'))) {
    fs.writeFileSync(path.resolve(tmpPath, 'anonymous_token'), '', 'utf-8')
  }

// Export the serverless handler for Netlify Functions
exports.handler = serverless(app); 