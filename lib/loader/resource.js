import cfg from '../constants';

if (cfg.canOpenGL) {
  module.exports = require('./resource.normal.js');
} else {
  module.exports = require('./resource.mini.js');
}
