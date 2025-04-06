const os = require('os');
let username = os.userInfo().username;
module.exports.username = username;
global.username = username;