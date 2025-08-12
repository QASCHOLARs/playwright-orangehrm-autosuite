const fs = require('fs');
const path = require('path');

function loadConfig(env) {
  const configPath = path.resolve(__dirname, `../config/${env}.json`);
  console.log('Config Path: ' + configPath);
  console.log(JSON.parse(fs.readFileSync(configPath, 'utf-8')));
  return JSON.parse(fs.readFileSync(configPath, 'utf-8'));
}

module.exports = { loadConfig };
