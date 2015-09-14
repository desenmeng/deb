
var debs = {};
var randomColor = require('randomcolor');
module.exports = function(key) {
  if (debs[key]) {
    return debs[key];
  }
  debs[key] = function() {
    var color = randomColor({luminosity: 'bright'});
    var name = key;
    return function(text) {
      if (process.env.DEB) {
        console.log(`%c ${name}: ${text}`, `color: ${color}; font-weight: bold`);
      }
    }
  }();
  return debs[key];
}
