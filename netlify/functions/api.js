const serverless = require('serverless-http');
const {consturctServer} = require('../../server');

const app = consturctServer();

// Export the serverless handler for Netlify Functions
exports.handler = serverless(app); 