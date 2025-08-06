// config/loader.js
const fs = require('fs');
const path = require('path');

function loadConfig(env) {
  const configPath = path.resolve(__dirname, `../config/${env}.json`);
  return JSON.parse(fs.readFileSync(configPath, 'utf-8'));
}

module.exports = { loadConfig };