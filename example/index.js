/**
 * [process.env.DEB description]
 * @type {Boolean}
 * process.env.DEB should define in webpack
 */
process.env.DEB = true;
var lib = require('./lib');
var debug1 = require('../index')('1');
var debug2 = require('../index')('2');
var debug3 = require('../index')('3');
debug1('1');
debug2('2');
debug3('3.1');
lib(); // 3.1 & 3.2 same color 
